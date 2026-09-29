import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export async function GET() {
  try {
    // Only attempt to connect if env vars are present (to not crash if not setup yet)
    if (!process.env.UPSTASH_REDIS_REST_URL) {
      return NextResponse.json({ success: true, data: [] });
    }

    const redis = Redis.fromEnv();
    const testimonials = await redis.lrange("testimonials", 0, 14);
    
    return NextResponse.json({ success: true, data: testimonials });
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
    const body = await req.json();

    const newTestimonial = {
      name: body.name,
      email: body.email || "",
      role: body.role || "Pelanggan",
      company: body.company,
      content: body.message,
      createdAt: new Date().toISOString(),
    };

    if (process.env.UPSTASH_REDIS_REST_URL) {
      const redis = Redis.fromEnv();
      
      // Push to the left (newest at index 0)
      await redis.lpush("testimonials", newTestimonial);
      
      // Keep only the newest 15 items (0 to 14)
      await redis.ltrim("testimonials", 0, 14);
    }

    return NextResponse.json({ 
      success: true, 
      message: "Testimonial saved successfully",
      data: newTestimonial
    });
  } catch (error) {
    console.error("Redis POST Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save testimonial" },
      { status: 500 }
    );
  }
}
