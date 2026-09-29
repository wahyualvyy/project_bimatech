export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  tags: string[];
  image: string;
}

export type PortfolioCategory =
  | "All"
  | "Jaringan"
  | "Printer"
  | "Sistem";

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Jaringan",
  "Printer",
  "Sistem",
];

/**
 * Portfolio data for BIMATECH — using actual work documentation images.
 * Categories match the real work folders: network, printer, system.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Pemasangan Kabel Jaringan",
    category: "Jaringan",
    description:
      "Pemasangan kabel jaringan LAN di atap gedung untuk konektivitas antar ruangan.",
    tags: ["LAN", "Kabel UTP", "Instalasi"],
    image: "/images/network/network 1.jpeg",
  },
  {
    id: "project-2",
    title: "Instalasi Jaringan LAN",
    category: "Jaringan",
    description:
      "Instalasi dan konfigurasi jaringan LAN untuk kebutuhan kantor dan warnet.",
    tags: ["LAN", "RJ45", "Switch"],
    image: "/images/network/network 2.jpeg",
  },
  {
    id: "project-3",
    title: "Konfigurasi Perangkat Jaringan",
    category: "Jaringan",
    description:
      "Konfigurasi perangkat jaringan termasuk router dan switch untuk performa optimal.",
    tags: ["Router", "MikroTik", "Konfigurasi"],
    image: "/images/network/network 3.jpeg",
  },
  {
    id: "project-4",
    title: "Pemasangan Jaringan Outdoor",
    category: "Jaringan",
    description:
      "Pemasangan kabel jaringan outdoor untuk menghubungkan beberapa gedung.",
    tags: ["Outdoor", "Kabel", "Infrastruktur"],
    image: "/images/network/network 4.jpeg",
  },
  {
    id: "project-5",
    title: "Perbaikan Printer",
    category: "Printer",
    description:
      "Pembongkaran dan perbaikan printer yang rusak termasuk penggantian komponen internal.",
    tags: ["Printer", "Service", "Komponen"],
    image: "/images/printer/printer 1.jpeg",
  },
  {
    id: "project-6",
    title: "Pembersihan Komponen Printer",
    category: "Printer",
    description:
      "Service printer — pembersihan head print dan komponen internal untuk hasil cetak optimal.",
    tags: ["Cleaning", "Head Print", "Maintenance"],
    image: "/images/printer/printer 2.jpeg",
  },
  {
    id: "project-7",
    title: "Perbaikan Mekanisme Printer",
    category: "Printer",
    description:
      "Perbaikan mekanisme gear dan roller printer yang macet atau aus.",
    tags: ["Gear", "Roller", "Mekanik"],
    image: "/images/printer/printer 3.jpeg",
  },
  {
    id: "project-8",
    title: "Perawatan & Spare Part Printer",
    category: "Printer",
    description:
      "Perawatan berkala printer dengan penggantian spare part untuk perpanjang usia pakai.",
    tags: ["Spare Part", "Perawatan", "Tinta"],
    image: "/images/printer/printer 4.jpeg",
  },
  {
    id: "project-9",
    title: "Troubleshooting Sistem",
    category: "Sistem",
    description:
      "Diagnosa dan troubleshooting sistem komputer untuk mengatasi error dan masalah performa.",
    tags: ["Troubleshoot", "Diagnosa", "Komputer"],
    image: "/images/system/sistem 1.jpeg",
  },
];
