# 💻 BIMATECH (Profil Perusahaan & Layanan IT)

Website Profil Perusahaan Premium yang dibangun untuk bisnis **BIMATECH** — penyedia layanan perbaikan komputer, perangkat keras, instalasi perangkat lunak, hingga pemasangan jaringan dan CCTV.

Dibangun dengan **Next.js (App Router)**, **Tailwind CSS**, dan **Framer Motion** untuk menghadirkan pengalaman pengguna yang sangat cepat, interaktif, responsif, dan elegan.

---

## 🚀 Fitur Utama

- **Premium UI/UX:** Desain modern dengan animasi halus (Framer Motion) dan transisi responsif (Mobile First).
- **Mode Terang/Gelap (Dark Mode):** Otomatis menyesuaikan dengan preferensi sistem pengguna atau diatur manual.
- **Dua Bahasa (Bilingual):** Dukungan penuh untuk Bahasa Indonesia (`id`) dan Bahasa Inggris (`en`).
- **Full-Stack Ready:** Dilengkapi dengan struktur API Route (`/api/testimonials`) yang terhubung langsung ke **Upstash Redis** untuk menampung fitur testimoni secara real-time.
- **Optimasi Gambar Otomatis:** Otomatis mengubah gambar menjadi WebP/AVIF menggunakan komponen `next/image` milik Next.js.
- **Performa Skala Enterprise:** Menggunakan *Dynamic Imports (Lazy Loading)* dan *React useMemo* untuk mempercepat *First Contentful Paint (FCP)*.

---

## 🛠️ Persyaratan Sistem

Sebelum menjalankan *project* ini, pastikan Anda telah memasang:
1. **Node.js** (Minimal versi v18.17.0 atau lebih baru)
2. **NPM** atau **Yarn** atau **pnpm**
3. Akun **GitHub** & **Vercel** (Untuk keperluan *Deployment*)

---

## 💻 Cara Menjalankan Secara Lokal (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan website di komputer Anda sendiri:

1. **Buka Terminal** dan arahkan ke dalam direktori project ini.
   ```bash
   cd project_bimatech
   ```

2. **Install semua modul/dependensi** yang dibutuhkan:
   ```bash
   npm install
   ```

3. *(Opsional namun Direkomendasikan)* **Konfigurasi Database Lokal:**
   Website ini menggunakan **Upstash Redis** untuk menyimpan Testimoni. 
   - Buat file bernama `.env.local` di *root* (bagian paling luar) folder proyek.
   - Isi dengan rahasia dari akun Upstash Redis Anda:
     ```env
     UPSTASH_REDIS_REST_URL="https://xxx.upstash.io"
     UPSTASH_REDIS_REST_TOKEN="xxxxxx"
     ```
   *(Catatan: Jika Anda melewati langkah ini, website tetap akan berjalan sempurna, namun Testimoni baru hanya akan tersimpan sementara di memori browser dan tidak permanen).*

4. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```

5. **Selesai!** Buka peramban (browser) Anda dan kunjungi: **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Cara Deploy ke Vercel (Gratis & Sangat Mudah)

Vercel adalah *platform* pembuat Next.js, sehingga proses rilis *(deploy)* proyek ini ke internet sangatlah mudah.

### Tahap 1: Upload Kode ke GitHub
1. Buat repositori baru yang kosong di akun [GitHub](https://github.com/) Anda.
2. Buka terminal di VS Code, dan ketik perintah berikut:
   ```bash
   git add .
   git commit -m "Initial commit - BIMATECH Website"
   git branch -M main
   git remote add origin https://github.com/username_anda/nama_repo_anda.git
   git push -u origin main
   ```

### Tahap 2: Sambungkan ke Vercel
1. Buka Dasbor [Vercel](https://vercel.com/) dan *login* menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Temukan repositori GitHub yang baru saja Anda buat, lalu klik **"Import"**.
4. Biarkan semua konfigurasi standar Vercel (karena Vercel otomatis mendeteksi bahwa ini adalah proyek Next.js).
5. Klik **"Deploy"** dan tunggu sekitar 1-2 menit hingga proses rilis selesai.

### Tahap 3: Aktifkan Database (Testimoni) di Vercel
Agar komentar dan testimoni pengguna dapat tersimpan permanen dan dibatasi maksimal 15 item:
1. Di halaman proyek Vercel Anda, klik tab **Storage** (di deretan navigasi atas).
2. Klik tombol **"Create"** lalu pilih **"Upstash Redis"**.
3. Beri nama databasenya (misalnya: `bimatech-db`), lalu pilih *Region* terdekat (misal: Singapore).
4. Klik **Create**, lalu ikuti panduan Vercel untuk menghubungkannya (*Connect*) ke proyek `project_bimatech` Anda.
5. Vercel akan secara otomatis menanamkan kode rahasia (`UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`) ke dalam *Environment Variables* proyek Anda.
6. Terakhir, pergi ke tab **Deployments**, klik tombol tiga titik di rilis (deploy) terakhir Anda, dan pilih **"Redeploy"** agar website memuat ulang pengaturan database baru tersebut.

🎉 **Selamat! Website BIMATECH Anda sekarang siap diakses oleh siapapun di seluruh dunia.**
