import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export async function GET() {
  try {
    // Only attempt to connect if env vars are present (to not crash if not setup yet)
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ success: false, error: "REDIS_NOT_CONFIGURED" }, { status: 503 });
    }

    const redis = Redis.fromEnv();
    const testimonials = await redis.lrange<Record<string, unknown>>("testimonials", 0, 14);
    const data = testimonials.map(({ id, name, role, company, content, rating, createdAt }) => ({ id, name, role, company, content, rating, createdAt }));
    
    return NextResponse.json({ success: true, data }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Redis GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const validText = (value: unknown, max: number): value is string =>
      typeof value === "string" && value.trim().length > 0 && value.length <= max;
    if (!body || !validText(body.name, 100) || !validText(body.email, 150) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()) ||
        !validText(body.company, 100) || !validText(body.message, 1000) ||
        !Number.isInteger(body.rating) || body.rating < 1 || body.rating > 5) {
      return NextResponse.json({ success: false, error: "INVALID_INPUT" }, { status: 400 });
    }
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ success: false, error: "REDIS_NOT_CONFIGURED" }, { status: 503 });
    }

    const newTestimonial = {
      id: crypto.randomUUID(),
      name: body.name.trim(),
      email: body.email.trim(),
      role: "",
      rating: body.rating,
      company: body.company.trim(),
      content: body.message.trim(),
      createdAt: new Date().toISOString(),
    };

    if (process.env.UPSTASH_REDIS_REST_URL) {
      const redis = Redis.fromEnv();
      
      // Push to the left (newest at index 0)
      await redis.lpush("testimonials", newTestimonial);
      
      // Keep all submissions in Redis; GET displays the latest 15.
    }

    return NextResponse.json({ 
      success: true, 
      message: "Testimonial saved successfully",
      data: { ...newTestimonial, email: undefined }
    }, { status: 201 });
  } catch (error) {
    const permissionDenied = error instanceof Error && /NOPERM/i.test(error.message);
    console.error("Redis POST Error:", permissionDenied ? "REDIS_WRITE_FORBIDDEN" : "SAVE_FAILED");
    return NextResponse.json(
      { success: false, error: permissionDenied ? "REDIS_WRITE_FORBIDDEN" : "SAVE_FAILED" },
      { status: 503 }
    );
  }
}
