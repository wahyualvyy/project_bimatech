export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

/**
 * Placeholder testimonials for BIMATECH.
 * Replace with real customer testimonials when available.
 * Names are intentionally generic placeholders.
 */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Pelanggan",
    role: "Pemilik Warnet",
    company: "Ciwaringin",
    content:
      "BIMATECH sangat membantu dalam setup jaringan warnet saya. Harga terjangkau dan pekerjaan rapi. Sangat merekomendasikan!",
  },
  {
    id: "testimonial-2",
    name: "Pelanggan",
    role: "Mahasiswa",
    company: "Ciwaringin",
    content:
      "Laptop saya yang sering hang sekarang lancar lagi setelah di-upgrade RAM dan SSD di BIMATECH. Pelayanan cepat dan ramah!",
  },
  {
    id: "testimonial-3",
    name: "Pelanggan",
    role: "Karyawan",
    company: "Ciwaringin",
    content:
      "Data penting di hard disk saya berhasil diselamatkan oleh BIMATECH. Sangat profesional dan harga juga masuk akal.",
  },
  {
    id: "testimonial-4",
    name: "Pelanggan",
    role: "Pengusaha",
    company: "Ciwaringin",
    content:
      "Pemasangan CCTV di toko kami berjalan lancar. Teknisi sangat paham dan ramah. Sekarang bisa pantau toko dari HP.",
  },
  {
    id: "testimonial-5",
    name: "Pelanggan",
    role: "Guru",
    company: "Ciwaringin",
    content:
      "Service printer di sini cepat sekali. Printer Epson saya yang mampet langsung bisa dipakai lagi hari itu juga.",
  },
];
