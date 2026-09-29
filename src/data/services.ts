import {
  Monitor,
  Wrench,
  Network,
  Headphones,
  HardDrive,
  Laptop,
  Cpu,
  Cctv,
  Cable,
  Settings,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
}

/**
 * Service data for BIMATECH (BIMATECH).
 * Covers hardware repair, software service, and maintenance/consulting.
 */
export const services: Service[] = [
  {
    id: "hardware-service",
    title: "Service Hardware",
    description:
      "Layanan perbaikan dan penggantian komponen hardware komputer dan laptop yang rusak atau bermasalah.",
    icon: Wrench,
    features: [
      { icon: Cpu, label: "Perbaikan Motherboard" },
      { icon: Monitor, label: "Ganti LCD/LED" },
      { icon: HardDrive, label: "Upgrade RAM & SSD" },
      { icon: Cable, label: "Perbaikan Power Supply" },
      { icon: Settings, label: "Cleaning & Thermal Paste" },
    ],
  },
  {
    id: "software-service",
    title: "Service Software",
    description:
      "Layanan instalasi, troubleshooting, dan optimasi software untuk komputer dan laptop Anda.",
    icon: Laptop,
    features: [
      { icon: Monitor, label: "Install Ulang Windows" },
      { icon: Settings, label: "Install Driver & Aplikasi" },
      { icon: ShieldCheck, label: "Hapus Virus & Malware" },
      { icon: HardDrive, label: "Recovery Data" },
      { icon: Wrench, label: "Optimasi Sistem" },
    ],
  },
  {
    id: "maintenance",
    title: "Perawatan & Konsultasi",
    description:
      "Layanan perawatan berkala dan konsultasi untuk menjaga komputer Anda tetap optimal.",
    icon: Headphones,
    features: [
      { icon: Settings, label: "Perawatan Berkala" },
      { icon: Monitor, label: "Konsultasi IT" },
      { icon: HardDrive, label: "Backup Data" },
      { icon: Network, label: "Setup Jaringan" },
      { icon: Cctv, label: "Pemasangan CCTV" },
    ],
  },
];
