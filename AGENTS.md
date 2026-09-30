<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# BIMATECH - Panduan Proyek & Konteks

## 1. Gambaran Proyek
- **Nama**: Profil Perusahaan BIMATECH (BIMATECH)
- **Deskripsi**: Website profil perusahaan yang modern, profesional, dan responsif untuk bisnis servis komputer yang berfokus pada perbaikan perangkat keras (hardware) dan instalasi perangkat lunak (software) serta pemasangan jaringan dan CCTV.
- **Teknologi Utama (Tech Stack)**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React.

## 2. Aturan Tampilan & Tema (SANGAT PENTING)
- **Wajib Menggunakan Variabel CSS**: JANGAN menggunakan warna *hardcode* (seperti `bg-white`, `text-navy`, `bg-gray-100`) untuk elemen layout struktural. SELALU gunakan variabel CSS semantik (misalnya, `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`) agar komponen dapat beradaptasi secara otomatis.
- **Dukungan Mode Gelap (Dark Mode)**: Aplikasi ini mendukung mode terang dan gelap melalui `next-themes`. Setiap komponen baru WAJIB terlihat bagus dan dapat dibaca pada kedua mode.
- **Warna Identitas (Brand Colors)**: Gunakan warna identitas untuk aksen (sorotan) saja: `text-blue`, `bg-blue`, `text-yellow`, dll.

## 3. Bahasa / Pelokalan (i18n)
- **Bilingual**: Website mendukung dua bahasa: Bahasa Indonesia (`id`) dan Bahasa Inggris (`en`).
- **Tanpa Teks Hardcode**: JANGAN PERNAH menulis teks yang terlihat langsung oleh pengguna (hardcode) ke dalam komponen. Semua teks WAJIB diambil dari file `src/data/translations.ts` menggunakan *hook* `useLanguage()`.

## 4. Informasi Kontak & Identitas Perusahaan
- **Nama Perusahaan**: BIMATECH
- **Email**: `bimatech13@gmail.com`
- **WhatsApp / Telepon**: `0822-9111-6343`
- **Lokasi**: `Dusun III RT 000 RW 000 Desa Were Kecamatan Weda`
- **Jam Operasional**: `Senin-Sabtu; jam 08.00-20.00`
- **Visi**: Kepuasan konsumen atas jasa service serta produk merupakan hal yang paling kami utamakan.
- **Misi**: Untuk memberikan produk dan jasa dengan harga yang terjangkau untuk memenuhi kebutuhan konsumen.
- **Media Sosial**:
  - Instagram: `@ibey_beyy`
  - Facebook: `Faisal Bima` (`https://www.facebook.com/faisal.bima.814060`)
  - Telegram: `@Ical_bey`
  - TikTok: `@ibey_beyyy`
- **Logo**: Logo utama berada di `/logo/bimatech-logo-transparent.png`. Karena teks logo berwarna gelap, maka pada mode gelap harus menggunakan *drop shadow* (`dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]`) agar bisa terbaca.

## 5. Fitur Interaktif & Formulir
- **Dokumentasi & Galeri**: Bagian `Gallery.tsx` mengambil gambar dari direktori `public/images/`. Gambar difilter berdasarkan kategori dan dibatasi awalnya 4 buah (dengan fitur *Show More / Tampilkan Lebih Banyak*).
- **Proyek (Portfolio)**: Bagian `Portfolio.tsx` dan `Testimonials.tsx` menggunakan gaya *layout grid* dan *slider/carousel* responsif (3 kolom di Desktop, 1 kolom di HP).
- **Formulir**: Formulir pada bagian Testimoni dan Kontak saat ini hanya berupa simulasi di sisi klien (UI saja, otomatis ter-reset saat di-*submit*). Jika ingin diintegrasikan di masa depan, disarankan menggunakan layanan *frontend-friendly* seperti Web3Forms atau EmailJS.

## 6. Alur Pengembangan (Workflow)
Ketika menambahkan bagian (*section*) baru ke dalam website:
1. Tetapkan dan tambahkan semua data teks untuk bahasa `id` dan `en` ke dalam file `src/data/translations.ts`.
2. Buat komponen antarmuka (UI) baru di dalam direktori `src/components/sections/`.
3. Masukkan komponen tersebut ke halaman utama (`src/app/page.tsx`) dan jangan lupa tambahkan tautan navigasinya di `Navbar` serta `Footer`.
