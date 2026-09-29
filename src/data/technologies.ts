export interface TechnologyItem {
  name: string;
}

export interface TechnologyCategory {
  category: string;
  accent: string; // Tailwind color class for category accent
  items: TechnologyItem[];
}

/**
 * Technology and tools expertise data for BIMATECH.
 * Covers web development, mobile, UI/UX, data, devops, hardware, networking, and security.
 */
export const technologies: TechnologyCategory[] = [
  // === Keahlian lama (Service & Infrastructure) ===
  {
    category: "Sistem Operasi",
    accent: "text-blue",
    items: [
      { name: "Windows" },
      { name: "Linux" },
      { name: "macOS" },
    ],
  },
  {
    category: "Hardware",
    accent: "text-red-500",
    items: [
      { name: "Motherboard" },
      { name: "Processor" },
      { name: "RAM" },
      { name: "SSD / HDD" },
      { name: "Power Supply" },
      { name: "LCD / LED" },
    ],
  },
  {
    category: "Jaringan",
    accent: "text-cyan-500",
    items: [
      { name: "MikroTik" },
      { name: "Cisco" },
      { name: "TP-Link" },
      { name: "Ubiquiti" },
    ],
  },
  {
    category: "Software & Tools",
    accent: "text-orange-500",
    items: [
      { name: "Microsoft Office" },
      { name: "Adobe Suite" },
      { name: "Antivirus" },
      { name: "Recovery Tools" },
    ],
  },
  {
    category: "CCTV & Keamanan",
    accent: "text-emerald-500",
    items: [
      { name: "Hikvision" },
      { name: "Dahua" },
      { name: "IP Camera" },
    ],
  },

  // === Keahlian baru (Development & Data) ===
  {
    category: "Web Development",
    accent: "text-blue",
    items: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Node.js" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Express.js" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Mobile Development",
    accent: "text-green-500",
    items: [
      { name: "Kotlin" },
      { name: "Flutter" },
      { name: "React Native" },
      { name: "Dart" },
      { name: "Android Studio" },
    ],
  },
  {
    category: "UI / Design",
    accent: "text-purple-500",
    items: [
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "shadcn/ui" },
      { name: "Figma" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Data & Analytics",
    accent: "text-yellow",
    items: [
      { name: "Python" },
      { name: "Chart.js" },
      { name: "Leaflet.js" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Firebase" },
    ],
  },
  {
    category: "DevOps & Tools",
    accent: "text-orange-500",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Linux" },
    ],
  },
];
