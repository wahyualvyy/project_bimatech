export type Locale = "id" | "en";

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    getStarted: string;
  };

  // Hero
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImageAlt: string;
  };

  // About
  about: {
    label: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string[];
    highlights: string[];
    stats: { value: string; label: string }[];
  };

  // Services
  services: {
    label: string;
    title: string;
    description: string;
    cards: {
      id: string;
      title: string;
      description: string;
      features: string[];
    }[];
  };

  // Why Choose Us
  whyChoose: {
    label: string;
    title: string;
    features: {
      title: string;
      description: string;
    }[];
  };

  // Solutions
  solutions: {
    label: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  // Portfolio
  portfolio: {
    label: string;
    title: string;
    description: string;
    filterAll: string;
    projects: {
      id: string;
      title: string;
      description: string;
    }[];
  };

  // Process
  process: {
    label: string;
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  // Technologies
  technologies: {
    label: string;
    title: string;
    description: string;
    showMore: string;
    showLess: string;
  };

  // Catalog Banner
  catalog: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    badges: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };

  // Gallery
  gallery: {
    label: string;
    title: string;
    description: string;
    filterAll: string;
    showMore: string;
    showLess: string;
    categories: {
      id: string;
      label: string;
    }[];
    images: {
      src: string;
      alt: string;
      category: string;
    }[];
  };

  // Testimonials
  testimonials: {
    label: string;
    title: string;
    loading: string;
    empty: string;
    saving: string;
    loadError: string;
    saveError: string;
    unavailable: string;
    invalidInput: string;
    customer: string;
    previous: string;
    next: string;
    slide: string;
    stars: string;
    ratingDescription: string;

    form: {
      title: string;
      description: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      ratingLabel: string;
      submit: string;
      success: string;
    };
  };

  // CTA
  cta: {
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    button: string;
  };

  // Contact
  contact: {
    label: string;
    title: string;
    description: string;
    info: {
      addressLabel: string;
      addressValue: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string;
    };
    whatsapp: string;
    whatsappNote: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      success: string;
    };
  };

  // Footer
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    followUs: string;
    socialNote: string;
    copyright: string;
    bottomTagline: string;
  };
}

export const translations: Record<Locale, Translations> = {
  // ══════════════════════════════════════════
  // BAHASA INDONESIA
  // ══════════════════════════════════════════
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      portfolio: "Portofolio",
      contact: "Kontak",
      getStarted: "Hubungi Kami",
    },

    hero: {
      badge: "Service • Hardware • Software",
      headlinePart1: "Solusi Service Komputer",
      headlineHighlight: "Terpercaya",
      headlinePart2: "untuk Anda.",
      description:
        "BIMATECH (BIMATECH) hadir untuk membantu Anda memperbaiki dan merawat komputer dengan layanan profesional, cepat, dan harga terjangkau. Kepuasan konsumen adalah prioritas utama kami.",
      ctaPrimary: "Jelajahi Layanan Kami",
      ctaSecondary: "Hubungi Kami",
      heroImageAlt:
        "Solusi service komputer BIMATECH — teknisi profesional memperbaiki hardware dan software komputer",
    },

    about: {
      label: "Tentang Kami",
      title: "BIMATECH",
      paragraph1:
        "Pada saat ini banyak orang yang membutuhkan bantuan untuk memperbaiki komputernya. Biasanya mereka lebih memilih untuk memanggil orang lain untuk memperbaikinya sendiri dengan alasan pertimbangan waktu dan tenaga walaupun memang sedikit mahal. Dari pemikiran inilah kami mempunyai ide untuk membuat usaha pelayanan jasa SERVICE COMPUTER yang akan diberi nama \"BIMATECH\".",
      paragraph2:
        "Kami berkomitmen untuk memberikan layanan service komputer yang berkualitas dengan harga terjangkau, serta mengutamakan kepuasan konsumen dalam setiap pekerjaan yang kami lakukan.",
      visionTitle: "Visi",
      visionText:
        "Menjadi perusahaan terpercaya yang menghadirkan produk dan jasa berkualitas dengan mengutamakan kepuasan dan kepercayaan konsumen.",
      missionTitle: "Misi",
      missionText: [
        "Menyediakan produk dan jasa berkualitas dengan harga yang terjangkau.",
        "Memberikan pelayanan yang profesional, cepat, dan responsif.",
        "Mengutamakan kepuasan serta kebutuhan konsumen.",
        "Memberikan solusi yang tepat dan sesuai dengan kebutuhan konsumen.",
        "Membangun hubungan jangka panjang berdasarkan kepercayaan.",
        "Terus berinovasi untuk meningkatkan kualitas produk dan pelayanan."
      ],
      highlights: [
        "Service hardware & perbaikan komputer",
        "Instalasi & troubleshooting software",
        "Harga terjangkau dan transparan",
        "Layanan cepat dan profesional",
      ],
      stats: [
        { value: "100+", label: "Komputer Diperbaiki" },
        { value: "6", label: "Hari / Minggu" },
        { value: "50+", label: "Pelanggan Puas" },
        { value: "12 Jam", label: "Jam Operasional" },
      ],
    },

    services: {
      label: "Yang Kami Kerjakan",
      title: "Layanan Kami",
      description:
        "Solusi lengkap untuk semua kebutuhan komputer Anda — mulai dari perbaikan hardware, instalasi software, hingga perawatan berkala.",
      cards: [
        {
          id: "hardware-service",
          title: "Service Hardware",
          description:
            "Layanan perbaikan dan penggantian komponen hardware komputer dan laptop yang rusak atau bermasalah.",
          features: [
            "Perbaikan Motherboard",
            "Ganti LCD/LED",
            "Upgrade RAM & SSD",
            "Perbaikan Power Supply",
            "Cleaning & Thermal Paste",
          ],
        },
        {
          id: "software-service",
          title: "Service Software",
          description:
            "Layanan instalasi, troubleshooting, dan optimasi software untuk komputer dan laptop Anda.",
          features: [
            "Install Ulang Windows",
            "Install Driver & Aplikasi",
            "Hapus Virus & Malware",
            "Recovery Data",
            "Optimasi Sistem",
          ],
        },
        {
          id: "maintenance",
          title: "Perawatan & Konsultasi",
          description:
            "Layanan perawatan berkala dan konsultasi untuk menjaga komputer Anda tetap optimal.",
          features: [
            "Perawatan Berkala",
            "Konsultasi IT",
            "Backup Data",
            "Setup Jaringan",
            "Pemasangan CCTV",
          ],
        },
        {
          id: "app-development",
          title: "Pengembangan Aplikasi",
          description:
            "Layanan pembuatan website dan aplikasi sesuai kebutuhan, mulai dari website bisnis hingga aplikasi mobile.",
          features: [
            "Website Development",
            "Web Application",
            "Mobile Application",
            "Custom System",
          ],
        },
      ],
    },

    whyChoose: {
      label: "Keunggulan Kami",
      title: "Mengapa Memilih BIMATECH",
      features: [
        {
          title: "Harga Terjangkau",
          description:
            "Kami memberikan layanan berkualitas dengan harga yang terjangkau dan transparan. Tidak ada biaya tersembunyi.",
        },
        {
          title: "Teknisi Berpengalaman",
          description:
            "Tim kami terdiri dari teknisi berpengalaman yang mampu menangani berbagai masalah hardware dan software komputer.",
        },
        {
          title: "Layanan Cepat",
          description:
            "Kami memahami pentingnya waktu Anda. Sebagian besar perbaikan dapat diselesaikan dalam hari yang sama.",
        },
        {
          title: "Garansi Layanan",
          description:
            "Setiap pekerjaan service kami berikan garansi untuk memastikan kepuasan dan kepercayaan pelanggan.",
        },
      ],
    },

    solutions: {
      label: "Solusi",
      title: "Produk & Solusi",
      description:
        "Selain layanan service, kami juga menyediakan berbagai produk dan solusi untuk kebutuhan komputer Anda.",
      items: [
        {
          title: "Komputer & Laptop",
          description:
            "Penjualan dan konfigurasi komputer serta laptop sesuai kebutuhan dan budget Anda.",
        },
        {
          title: "Spare Part",
          description:
            "Tersedia berbagai spare part dan komponen komputer berkualitas dengan harga bersaing.",
        },
        {
          title: "Aksesoris",
          description:
            "Berbagai aksesoris komputer mulai dari keyboard, mouse, hingga perangkat jaringan.",
        },
        {
          title: "Jaringan & WiFi",
          description:
            "Pemasangan dan konfigurasi jaringan lokal serta WiFi untuk rumah dan usaha kecil.",
        },
        {
          title: "CCTV",
          description:
            "Pemasangan dan konfigurasi sistem CCTV untuk keamanan rumah dan tempat usaha.",
        },
        {
          title: "Printer & Scanner",
          description:
            "Penjualan, instalasi, dan perbaikan printer serta scanner berbagai merek.",
        },
        {
          title: "Sistem Management",
          description:
            "Sistem terintegrasi untuk administrasi, keuangan, kesehatan (SIMRS), inventaris, hingga manajemen operasional bisnis.",
        },
        {
          title: "Layanan Digital",
          description:
            "Infrastruktur digital canggih meliputi pembuatan API, integrasi Cloud Service, Notification Service, dan sistem Authentication.",
        },
        {
          title: "Produk AI",
          description:
            "Implementasi kecerdasan buatan mutakhir, mencakup pembuatan Chatbot pintar, sistem prediksi, analisis teks, dan mesin rekomendasi.",
        },
      ],
    },

    portfolio: {
      label: "Portofolio",
      title: "Proyek Kami",
      description:
        "Beberapa contoh pekerjaan nyata yang telah kami selesaikan untuk pelanggan kami.",
      filterAll: "Semua",
      projects: [
        {
          id: "project-1",
          title: "Pemasangan Kabel Jaringan",
          description:
            "Pemasangan kabel jaringan LAN di atap gedung untuk konektivitas antar ruangan.",
        },
        {
          id: "project-2",
          title: "Instalasi Jaringan LAN",
          description:
            "Instalasi dan konfigurasi jaringan LAN untuk kebutuhan kantor dan warnet.",
        },
        {
          id: "project-3",
          title: "Konfigurasi Perangkat Jaringan",
          description:
            "Konfigurasi perangkat jaringan termasuk router dan switch untuk performa optimal.",
        },
        {
          id: "project-4",
          title: "Pemasangan Jaringan Outdoor",
          description:
            "Pemasangan kabel jaringan outdoor untuk menghubungkan beberapa gedung.",
        },
        {
          id: "project-5",
          title: "Perbaikan Printer",
          description:
            "Pembongkaran dan perbaikan printer yang rusak termasuk penggantian komponen internal.",
        },
        {
          id: "project-6",
          title: "Pembersihan Komponen Printer",
          description:
            "Service printer — pembersihan head print dan komponen internal untuk hasil cetak optimal.",
        },
        {
          id: "project-7",
          title: "Perbaikan Mekanisme Printer",
          description:
            "Perbaikan mekanisme gear dan roller printer yang macet atau aus.",
        },
        {
          id: "project-8",
          title: "Perawatan & Spare Part Printer",
          description:
            "Perawatan berkala printer dengan penggantian spare part untuk perpanjang usia pakai.",
        },
        {
          id: "project-9",
          title: "Troubleshooting Sistem",
          description:
            "Diagnosa dan troubleshooting sistem komputer untuk mengatasi error dan masalah performa.",
        },
      ],
    },

    process: {
      label: "Proses",
      title: "Cara Kami Bekerja",
      steps: [
        {
          number: "01",
          title: "Diagnosa",
          description:
            "Menerima keluhan dan melakukan pengecekan menyeluruh untuk menemukan sumber masalah.",
        },
        {
          number: "02",
          title: "Konsultasi",
          description:
            "Menjelaskan hasil diagnosa dan memberikan estimasi biaya serta waktu pengerjaan kepada pelanggan.",
        },
        {
          number: "03",
          title: "Pengerjaan",
          description:
            "Melakukan perbaikan atau instalasi dengan teliti menggunakan tools dan spare part berkualitas.",
        },
        {
          number: "04",
          title: "Pengujian",
          description:
            "Menguji hasil pekerjaan secara menyeluruh sebelum diserahkan kepada pelanggan dengan garansi.",
        },
      ],
    },

    technologies: {
      label: "Tech Stack",
      title: "Keahlian & Teknologi Kami",
      description:
        "Teknologi dan tools yang kami kuasai — dari pengembangan web & mobile, analisis data, hingga infrastruktur jaringan.",
      showMore: "Tampilkan Lebih Banyak",
      showLess: "Tampilkan Lebih Sedikit",
    },

    catalog: {
      badge: "Jual Beli Laptop",
      title: "Cari Laptop Berkualitas?",
      titleHighlight: "Lihat Katalog Kami",
      description:
        "Kami menyediakan berbagai laptop bekas berkualitas dan laptop baru dengan harga terjangkau. Lihat langsung katalog lengkap kami di WhatsApp Business.",
      badges: ["Harga Terjangkau", "Garansi Toko", "Kondisi Terjamin"],
      ctaPrimary: "Lihat Katalog",
      ctaSecondary: "Tanya Ketersediaan",
    },

    gallery: {
      label: "Dokumentasi",
      title: "Dokumentasi Pekerjaan",
      description:
        "Kumpulan foto dokumentasi pekerjaan nyata yang telah kami selesaikan untuk pelanggan kami.",
      filterAll: "Semua",
      showMore: "Tampilkan Lebih Banyak",
      showLess: "Tampilkan Lebih Sedikit",
      categories: [
        { id: "network", label: "Jaringan" },
        { id: "printer", label: "Printer" },
        { id: "system", label: "Sistem" },
      ],
      images: [
        {
          src: "/images/network/network 1.jpeg",
          alt: "Pemasangan kabel jaringan di atap gedung",
          category: "network",
        },
        {
          src: "/images/network/network 2.jpeg",
          alt: "Instalasi jaringan LAN",
          category: "network",
        },
        {
          src: "/images/network/network 3.jpeg",
          alt: "Konfigurasi perangkat jaringan",
          category: "network",
        },
        {
          src: "/images/network/network 4.jpeg",
          alt: "Pemasangan kabel jaringan outdoor",
          category: "network",
        },
        {
          src: "/images/printer/printer 1.jpeg",
          alt: "Pembongkaran dan perbaikan printer",
          category: "printer",
        },
        {
          src: "/images/printer/printer 2.jpeg",
          alt: "Service printer — pembersihan komponen",
          category: "printer",
        },
        {
          src: "/images/printer/printer 3.jpeg",
          alt: "Perbaikan mekanisme printer",
          category: "printer",
        },
        {
          src: "/images/printer/printer 4.jpeg",
          alt: "Perawatan printer — penggantian spare part",
          category: "printer",
        },
        {
          src: "/images/system/sistem 1.jpeg",
          alt: "Teknisi bekerja di komputer — troubleshooting sistem",
          category: "system",
        },
      ],
    },

    testimonials: {
      label: "Testimoni",
      title: "Apa Kata Pelanggan Kami",
      loading: "Memuat testimoni...",
      empty: "Belum ada testimoni. Bagikan pengalaman Anda melalui formulir di bawah.",
      saving: "Menyimpan...",
      loadError: "Testimoni belum dapat dimuat. Silakan muat ulang halaman.",
      saveError: "Testimoni gagal disimpan. Periksa isian dan coba lagi.",
      unavailable: "Pengiriman testimoni sementara belum tersedia. Pengelola perlu memeriksa konfigurasi penyimpanan. Isian Anda belum tersimpan.",
      invalidInput: "Periksa nama, email, pekerjaan / asal, rating, dan pesan Anda sebelum mengirim ulang.",
      customer: "Pelanggan",
      previous: "Testimoni sebelumnya",
      next: "Testimoni berikutnya",
      slide: "Buka slide",
      stars: "bintang",
      ratingDescription: "dari 5 bintang",

      form: {
        title: "Tinggalkan Testimoni",
        description: "Bagikan pengalaman Anda menggunakan layanan BIMATECH.",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "Alamat Gmail Anda",
        companyPlaceholder: "Pekerjaan / Asal",
        messagePlaceholder: "Tuliskan testimoni Anda di sini...",
        ratingLabel: "Bintang",
        submit: "Kirim Testimoni",
        success: "Terima kasih! Testimoni Anda telah berhasil dikirim.",
      },
    },

    cta: {
      titlePart1: "Komputer Bermasalah?",
      titleHighlight: "Serahkan ke BIMATECH",
      titlePart2: "!",
      description:
        "Jangan biarkan komputer rusak menghambat aktivitas Anda. Hubungi kami sekarang untuk layanan service yang cepat, profesional, dan terjangkau.",
      button: "Hubungi BIMATECH",
    },

    contact: {
      label: "Kontak",
      title: "Hubungi Kami",
      description:
        "Punya masalah dengan komputer Anda? Hubungi BIMATECH dan kami siap membantu.",
      info: {
        addressLabel: "Lokasi",
        addressValue: "Ciwaringin",
        phoneLabel: "Telepon / WhatsApp",
        phoneValue: "0822-9111-6343",
        emailLabel: "Email",
        emailValue: "bimatech13@gmail.com",
        hoursLabel: "Jam Operasional",
        hoursValue: "Senin - Sabtu, 08.00 - 20.00",
      },
      whatsapp: "Chat via WhatsApp",
      whatsappNote: "Hubungi kami langsung via WhatsApp untuk respons cepat.",
      form: {
        name: "Nama",
        email: "Email",
        phone: "Telepon",
        company: "Pekerjaan",
        message: "Pesan",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "email@anda.com",
        phonePlaceholder: "+62 XXX XXXX XXXX",
        companyPlaceholder: "Pekerjaan Anda",
        messagePlaceholder: "Ceritakan masalah komputer atau kebutuhan Anda...",
        submit: "Kirim Pesan",
        success:
          "Terima kasih! Pesan Anda telah diterima. Kami akan segera menghubungi Anda.",
      },
    },

    footer: {
      tagline:
        "BIMATECH — Solusi terpercaya untuk perbaikan dan perawatan komputer Anda dengan harga terjangkau di Ciwaringin.",
      quickLinks: "Tautan Cepat",
      servicesTitle: "Layanan",
      followUs: "Ikuti Kami",
      socialNote: "Ikuti kami di media sosial",
      copyright: "BIMATECH - BIMATECH. Hak Cipta Dilindungi.",
      bottomTagline: "SERVICE • HARDWARE • SOFTWARE",
    },
  },

  // ══════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      getStarted: "Contact Us",
    },

    hero: {
      badge: "Service • Hardware • Software",
      headlinePart1: "Trusted Computer Service",
      headlineHighlight: "Solutions",
      headlinePart2: "for You.",
      description:
        "BIMATECH (BIMATECH) is here to help you repair and maintain your computer with professional, fast, and affordable service. Customer satisfaction is our top priority.",
      ctaPrimary: "Explore Our Services",
      ctaSecondary: "Contact Us",
      heroImageAlt:
        "BIMATECH computer service solutions — professional technician repairing computer hardware and software",
    },

    about: {
      label: "About Us",
      title: "BIMATECH",
      paragraph1:
        "Nowadays, many people need help repairing their computers. They usually prefer to call someone to fix it rather than doing it themselves, considering the time and effort involved even though it may cost a bit more. From this insight, we came up with the idea to create a computer SERVICE business named \"BIMATECH\".",
      paragraph2:
        "We are committed to providing quality computer service at affordable prices, while prioritizing customer satisfaction in every job we undertake.",
      visionTitle: "Vision",
      visionText:
        "To become a trusted company providing quality products and services by prioritizing customer satisfaction and trust.",
      missionTitle: "Mission",
      missionText: [
        "Provide quality products and services at affordable prices.",
        "Deliver professional, fast, and responsive service.",
        "Prioritize customer satisfaction and needs.",
        "Provide appropriate solutions tailored to customer needs.",
        "Build long-term relationships based on trust.",
        "Continuously innovate to improve product and service quality."
      ],
      highlights: [
        "Hardware service & computer repair",
        "Software installation & troubleshooting",
        "Affordable and transparent pricing",
        "Fast and professional service",
      ],
      stats: [
        { value: "100+", label: "Computers Repaired" },
        { value: "6", label: "Days / Week" },
        { value: "50+", label: "Happy Customers" },
        { value: "12 Hrs", label: "Operating Hours" },
      ],
    },

    services: {
      label: "What We Do",
      title: "Our Services",
      description:
        "Complete solutions for all your computer needs — from hardware repair, software installation, to regular maintenance.",
      cards: [
        {
          id: "hardware-service",
          title: "Hardware Service",
          description:
            "Repair and replacement of damaged or malfunctioning computer and laptop hardware components.",
          features: [
            "Motherboard Repair",
            "LCD/LED Replacement",
            "RAM & SSD Upgrade",
            "Power Supply Repair",
            "Cleaning & Thermal Paste",
          ],
        },
        {
          id: "software-service",
          title: "Software Service",
          description:
            "Installation, troubleshooting, and optimization services for your computer and laptop software.",
          features: [
            "Windows Reinstallation",
            "Driver & App Installation",
            "Virus & Malware Removal",
            "Data Recovery",
            "System Optimization",
          ],
        },
        {
          id: "maintenance",
          title: "Maintenance & Consulting",
          description:
            "Regular maintenance and consulting services to keep your computer running optimally.",
          features: [
            "Regular Maintenance",
            "IT Consulting",
            "Data Backup",
            "Network Setup",
            "CCTV Installation",
          ],
        },
        {
          id: "app-development",
          title: "Application Development",
          description:
            "Custom website and application development services, ranging from business websites to mobile applications.",
          features: [
            "Website Development",
            "Web Application",
            "Mobile Application",
            "Custom System",
          ],
        },
      ],
    },

    whyChoose: {
      label: "Our Advantages",
      title: "Why Choose BIMATECH",
      features: [
        {
          title: "Affordable Pricing",
          description:
            "We provide quality service at affordable and transparent prices. No hidden fees.",
        },
        {
          title: "Experienced Technicians",
          description:
            "Our team consists of experienced technicians capable of handling various computer hardware and software issues.",
        },
        {
          title: "Fast Service",
          description:
            "We understand the value of your time. Most repairs can be completed within the same day.",
        },
        {
          title: "Service Warranty",
          description:
            "Every service job comes with a warranty to ensure customer satisfaction and trust.",
        },
      ],
    },

    solutions: {
      label: "Solutions",
      title: "Products & Solutions",
      description:
        "In addition to service, we also provide various products and solutions for your computer needs.",
      items: [
        {
          title: "Computer & Laptop",
          description:
            "Sales and configuration of computers and laptops according to your needs and budget.",
        },
        {
          title: "Spare Parts",
          description:
            "Various quality computer spare parts and components available at competitive prices.",
        },
        {
          title: "Accessories",
          description:
            "Various computer accessories from keyboards, mice, to networking devices.",
        },
        {
          title: "Network & WiFi",
          description:
            "Installation and configuration of local networks and WiFi for homes and small businesses.",
        },
        {
          title: "CCTV",
          description:
            "Installation and configuration of CCTV systems for home and business security.",
        },
        {
          title: "Printer & Scanner",
          description:
            "Sales, installation, and repair of printers and scanners of various brands.",
        },
        {
          title: "Management Systems",
          description:
            "Integrated systems for administration, finance, healthcare (SIMRS), inventory, and business operations management.",
        },
        {
          title: "Digital Services",
          description:
            "Advanced digital infrastructure including API development, Cloud Services, Notification Services, and Authentication systems.",
        },
        {
          title: "AI Products",
          description:
            "Implementation of cutting-edge artificial intelligence, including smart Chatbots, predictive systems, text analysis, and recommendation engines.",
        },
      ],
    },

    portfolio: {
      label: "Portfolio",
      title: "Our Projects",
      description:
        "Some examples of real work we have completed for our customers.",
      filterAll: "All",
      projects: [
        {
          id: "project-1",
          title: "Network Cable Installation",
          description:
            "LAN network cable installation on building rooftop for inter-room connectivity.",
        },
        {
          id: "project-2",
          title: "LAN Network Installation",
          description:
            "Installation and configuration of LAN network for office and internet café needs.",
        },
        {
          id: "project-3",
          title: "Network Device Configuration",
          description:
            "Configuration of network devices including routers and switches for optimal performance.",
        },
        {
          id: "project-4",
          title: "Outdoor Network Installation",
          description:
            "Outdoor network cable installation to connect multiple buildings.",
        },
        {
          id: "project-5",
          title: "Printer Repair",
          description:
            "Disassembly and repair of damaged printer including replacement of internal components.",
        },
        {
          id: "project-6",
          title: "Printer Component Cleaning",
          description:
            "Printer service — print head and internal component cleaning for optimal print results.",
        },
        {
          id: "project-7",
          title: "Printer Mechanism Repair",
          description:
            "Repair of jammed or worn printer gear and roller mechanisms.",
        },
        {
          id: "project-8",
          title: "Printer Maintenance & Parts",
          description:
            "Regular printer maintenance with spare part replacement to extend equipment lifespan.",
        },
        {
          id: "project-9",
          title: "System Troubleshooting",
          description:
            "Computer system diagnosis and troubleshooting to resolve errors and performance issues.",
        },
      ],
    },

    process: {
      label: "Process",
      title: "How We Work",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          description:
            "Receive complaints and perform thorough inspection to find the source of the problem.",
        },
        {
          number: "02",
          title: "Consult",
          description:
            "Explain diagnosis results and provide cost and time estimates to the customer.",
        },
        {
          number: "03",
          title: "Repair",
          description:
            "Perform repairs or installations carefully using quality tools and spare parts.",
        },
        {
          number: "04",
          title: "Test",
          description:
            "Thoroughly test the completed work before handing it back to the customer with warranty.",
        },
      ],
    },

    technologies: {
      label: "Tech Stack",
      title: "Our Expertise & Technologies",
      description:
        "Technologies and tools we master — from web & mobile development, data analytics, to network infrastructure.",
      showMore: "Show More",
      showLess: "Show Less",
    },

    catalog: {
      badge: "Buy & Sell Laptops",
      title: "Looking for Quality Laptops?",
      titleHighlight: "Browse Our Catalog",
      description:
        "We provide a variety of quality refurbished and brand-new laptops at affordable prices. Browse our full catalog directly on WhatsApp Business.",
      badges: ["Affordable Price", "Store Warranty", "Guaranteed Condition"],
      ctaPrimary: "View Catalog",
      ctaSecondary: "Ask Availability",
    },

    gallery: {
      label: "Documentation",
      title: "Work Documentation",
      description:
        "A collection of real work documentation photos we have completed for our customers.",
      filterAll: "All",
      showMore: "Show More",
      showLess: "Show Less",
      categories: [
        { id: "network", label: "Network" },
        { id: "printer", label: "Printer" },
        { id: "system", label: "System" },
      ],
      images: [
        {
          src: "/images/network/network 1.jpeg",
          alt: "Network cable installation on building roof",
          category: "network",
        },
        {
          src: "/images/network/network 2.jpeg",
          alt: "LAN network installation",
          category: "network",
        },
        {
          src: "/images/network/network 3.jpeg",
          alt: "Network device configuration",
          category: "network",
        },
        {
          src: "/images/network/network 4.jpeg",
          alt: "Outdoor network cable installation",
          category: "network",
        },
        {
          src: "/images/printer/printer 1.jpeg",
          alt: "Printer disassembly and repair",
          category: "printer",
        },
        {
          src: "/images/printer/printer 2.jpeg",
          alt: "Printer service — component cleaning",
          category: "printer",
        },
        {
          src: "/images/printer/printer 3.jpeg",
          alt: "Printer mechanism repair",
          category: "printer",
        },
        {
          src: "/images/printer/printer 4.jpeg",
          alt: "Printer maintenance — spare part replacement",
          category: "printer",
        },
        {
          src: "/images/system/sistem 1.jpeg",
          alt: "Technician working on computer — system troubleshooting",
          category: "system",
        },
      ],
    },

    testimonials: {
      label: "Testimonials",
      title: "What Our Customers Say",
      loading: "Loading testimonials...",
      empty: "No testimonials yet. Share your experience using the form below.",
      saving: "Saving...",
      loadError: "Unable to load testimonials. Please reload the page.",
      saveError: "Unable to save your testimonial. Check your entries and try again.",
      unavailable: "Testimonial submissions are temporarily unavailable. The administrator needs to check the storage configuration. Your entry has not been saved.",
      invalidInput: "Check your name, email, occupation / location, rating, and message before submitting again.",
      customer: "Customer",
      previous: "Previous testimonial",
      next: "Next testimonial",
      slide: "Go to slide",
      stars: "stars",
      ratingDescription: "out of 5 stars",

      form: {
        title: "Leave a Testimonial",
        description: "Share your experience using BIMATECH services.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Gmail Address",
        companyPlaceholder: "Occupation / Location",
        messagePlaceholder: "Write your testimonial here...",
        ratingLabel: "Rating",
        submit: "Submit Testimonial",
        success: "Thank you! Your testimonial has been submitted successfully.",
      },
    },

    cta: {
      titlePart1: "Computer Problems?",
      titleHighlight: "Leave It to BIMATECH",
      titlePart2: "!",
      description:
        "Don't let a broken computer hold you back. Contact us now for fast, professional, and affordable service.",
      button: "Contact BIMATECH",
    },

    contact: {
      label: "Contact",
      title: "Contact Us",
      description:
        "Having problems with your computer? Contact BIMATECH and we're ready to help.",
      info: {
        addressLabel: "Location",
        addressValue: "Ciwaringin",
        phoneLabel: "Phone / WhatsApp",
        phoneValue: "0822-9111-6343",
        emailLabel: "Email",
        emailValue: "bimatech13@gmail.com",
        hoursLabel: "Operating Hours",
        hoursValue: "Monday - Saturday, 08:00 - 20:00",
      },
      whatsapp: "Chat via WhatsApp",
      whatsappNote:
        "Contact us directly via WhatsApp for a quick response.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Occupation",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+62 XXX XXXX XXXX",
        companyPlaceholder: "Your occupation",
        messagePlaceholder: "Tell us about your computer problem or needs...",
        submit: "Send Message",
        success:
          "Thank you! Your message has been received. We'll get back to you soon.",
      },
    },

    footer: {
      tagline:
        "BIMATECH — Your trusted solution for computer repair and maintenance at affordable prices in Ciwaringin.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      followUs: "Follow Us",
      socialNote: "Follow us on social media",
      copyright: "BIMATECH - BIMATECH. All Rights Reserved.",
      bottomTagline: "SERVICE • HARDWARE • SOFTWARE",
    },
  },
};
