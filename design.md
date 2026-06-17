# Design Documentation — Teknika Pesona Kahayan

> Company: Industrial Equipment & Fleet Rental Services
> Project: Next.js Website Portfolio & Fleet Management
> Updated: 17 Juni 2026

---

## 1. Identitas Brand

| Atribut         | Detail                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Nama Perusahaan | Teknika Pesona Kahayan                                                                                                              |
| Industri        | Industrial Equipment & Fleet Rental                                                                                                 |
| Tagline         | Premium heavy equipment and fleet solutions for industrial operations                                                               |
| Fokus Bisnis    | Material Handling, Heavy Duty Equipment, Aerial Work Platformm Crawler Dumper, Agrikultur (Combine Harvester), Genset Silent Diesel |
| Bahasa Situs    | English (Primary)                                                                                                                   |

---

## 2. Warna

### Palet Utama

Berdasarkan tema industrial dan profesionalisme:

| Peran             | Warna                         | Keterangan                             |
| ----------------- | ----------------------------- | -------------------------------------- |
| **Primary**       | Charcoal Black (#111111)      | Profesionalisme dan kepercayaan        |
| **Secondary**     | Construction Yellow (#FACC15) | Highlight dan CTA - energi & perhatian |
| **Neutral Dark**  | Charcoal Black (#111111)      | Teks utama, kontras tinggi             |
| **Neutral Light** | Light Gray (#F3F4F6)          | Latar section dan kartu                |
| **Background**    | Pure White (#FFFFFF)          | Tema industrial modern yang bersih     |

### Pendekatan Warna

- Tema **light modern industrial** dengan kontras gelap pada header/footer.
- Kontras tinggi dengan accent warna gold/orange untuk elemen interaktif
- Penggunaan foto-foto peralatan industrial berskala besar sebagai latar visual

---

## 3. Tipografi

| Elemen                | Karakteristik                                                                          |
| --------------------- | -------------------------------------------------------------------------------------- |
| **Heading**           | Sans-serif bold (Barlow Condensed), tebal, bersih — berkesan korporat & presisi        |
| **Body**              | Sans-serif reguler (Barlow), mudah dibaca, ukuran nyaman untuk web                     |
| **Label/Tag**         | Uppercase kecil, bold — digunakan untuk kategori ("Supply & Rent", "Specialized", dll) |
| **Numerik Statistik** | Ukuran besar, bold — untuk highlight spesifikasi dan data teknis                       |

---

## 4. Layout & Grid

### Struktur Halaman Utama (Home)

Halaman berstruktur dengan seksi-seksi jelas:

1. **Navigation Bar** — Logo kiri, menu horizontal kanan, sticky saat scroll
2. **Hero Section** — Image/Video background full-width + headline besar
3. **Services Section** — Grid kartu layanan (3 kolom) dengan deskripsi dan gambar
4. **Projects Section** — Portfolio proyek dengan case studies
5. **Sectors We Serve** — Grid sektor industri yang dilayani
6. **Fleet List** — List lengkap equipment dengan kategorisasi
7. **Footer** — Kolom kontak, alamat, media sosial, informasi legal

### Halaman Tambahan

- **About** — Company profile dan sejarah
- **Services Detail** — Detailed layanan individual dengan specs dan fitur
- **Products** — Daftar produk dengan kategori
- **Portfolio** — Project gallery dengan detail case study
- **Contact** — Form kontak + informasi lokasi

### Pendekatan Grid

- Menggunakan sistem grid **responsif** (1–3 kolom tergantung device)
- Layout **asimetris** pada beberapa seksi (teks kiri + gambar kanan)
- **Full-width sections** dengan alternating background untuk ritme visual

---

## 5. Komponen UI

### Navigasi

- **Sticky navbar** dengan logo SVG
- Menu dengan **dropdown** untuk submenu
- Responsive hamburger menu untuk mobile
- Minimal styling, fokus pada navigabilitas

### Hero Section

- Image/Video background **full-screen** atau full-width
- Gradient overlay untuk readability
- Teks headline besar, subtitle, deskripsi
- Tombol CTA "Explore Services" atau "Get Quote"

### Kartu (Cards)

- **Kartu Layanan**: icon + judul + deskripsi + gambar background
- **Kartu Proyek**: gambar + tag kategori + judul + client info
- **Kartu Equipment**: gambar + nama equipment + spesifikasi dasar + harga/inquiry
- Efek hover dengan subtle scale atau overlay

### Statistik / Counter

- Angka besar bold (mis. kapasitas angkat, jumlah unit, tahun operasi)
- Label deskriptif di bawahnya
- Disusun dalam grid responsive

### Section Layout

- **Dark background** untuk section utama
- **Cards dengan subtle border** untuk kontras
- **Typography hierarchy** yang jelas
- **Ample whitespace** untuk readability

---

## 6. Ikonografi & Imagery

### Gaya Gambar

- **Foto peralatan industrial** — Heavy equipment, cranes, forklifts dengan lighting profesional
- **Foto lokasi proyek** — Construction sites, rigging operations, fleet at work
- **Foto layanan** — Operators, maintenance, safety protocols
- Gambar beresolusi tinggi dengan **rasio 16:9** untuk card dan **landscape wide** untuk hero

### Ikon

- Ikon SVG custom untuk layanan dan equipment types
- Ikon media sosial (LinkedIn, Facebook, YouTube, Instagram, WhatsApp)
- Ikon kontak (telepon, email)

---

## 7. Tone of Voice & Konten

| Dimensi                    | Karakteristik                                                       |
| -------------------------- | ------------------------------------------------------------------- |
| **Nada**                   | Profesional, dapat diandalkan, ahli teknis                          |
| **Bahasa**                 | Formal-informatif, Inggris dengan terminologi teknis industri       |
| **Nilai yang ditonjolkan** | Keandalan, keahlian teknis, keselamatan, kapasitas dan skalabilitas |
| **Angka & Fakta**          | Ditonjolkan besar — kapasitas angkat, jumlah unit, tahun pengalaman |
| **Sosial**                 | Professional reputation, client testimonials, safety certifications |

---

## 8. Navigasi & Arsitektur Informasi

```
├── Home
├── About Us
│   ├── Company Profile, Vision & Mision, Business Focus : Material Handling, Heavy Duty Equipment, Aerial Work Platformm Crawler Dumper, Agrikultur (Combine Harvester), Genset Silent Diesel
├── Products
│   ├── Material Handling Equipment
│   ├── Crane Systems
│   └── Specialized Equipment
├── Service
│   ├── Boomlift & Scissor Lift
|   ├── Heavy Duty Equipment
|   ├── Agricultur / Combine Harvester
|   ├── Genset KVA Silent Diesel
|   └── Fabrication
├── Projects
├── Supporting Documents
└── Contact
```

---

## 9. Responsive Behavior

- **Desktop (1920px+)**: Full layout dengan sidebar optional
- **Laptop (1024px - 1919px)**: Layout optimal dengan spacing full
- **Tablet (768px - 1023px)**: 2-kolom grid, navigation menu collapsed
- **Mobile (< 768px)**: 1-kolom stack, hamburger navigation, stacked cards

---

## 10. Animasi & Interaksi

- **Page Transitions**: Fade atau slide animations saat navigasi (Framer Motion)
- **Scroll Reveals**: Element muncul dengan animasi saat di-scroll ke view
- **Hover States**: Subtle scale atau opacity change pada interactive elements
- **Loading States**: Skeleton screens atau spinner untuk async operations
- **Button States**: Active, hover, disabled states yang jelas

---

## 11. Teknis & Implementasi

| Aspek              | Detail                                              |
| ------------------ | --------------------------------------------------- |
| **Framework**      | Next.js 16+ dengan App Router (SSR/SSG)             |
| **Styling**        | Tailwind CSS + Framer Motion untuk animasi          |
| **Font**           | Barlow & Barlow Condensed (Google Fonts)            |
| **Image Handling** | next/image untuk optimisasi otomatis                |
| **Icons**          | Lucide React untuk consistent icon system           |
| **TypeScript**     | Full type safety di seluruh aplikasi                |
| **Responsiveness** | Mobile-first approach dengan breakpoints Bootstrap  |
| **SEO**            | Next.js metadata API, Open Graph, canonical URLs    |
| **Performance**    | Image lazy loading, code splitting, dynamic imports |

---

## 12. Keunikan Desain Teknika Pesona Kahayan

1. **Dark Industrial Theme** — mencerminkan profesionalisme dan keandalan teknis
2. **Equipment Showcase** — galeri visual peralatan premium dengan spesifikasi detail
3. **Project Portfolio** — case studies menunjukkan track record dan kapabilitas
4. **Multi-Sector Approach** — jelas menunjukkan versatilitas layanan
5. **Responsive Fleet System** — konten equipment dapat dipilter dan disortir
6. **Professional Brand Partners** — logo partner prominently displayed untuk kredibilitas
7. **Technical Specifications** — detail spek equipment untuk B2B audience

---

_Dokumen ini dibuat berdasarkan analisis struktur dan konten dari project Teknika Pesona Kahayan._
