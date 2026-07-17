# DOSI Coffee & Space

DOSI Coffee & Space adalah website café modern yang menghadirkan informasi mengenai menu, signature coffee, suasana café, fasilitas, lokasi, dan reservasi.

DOSI menggunakan biji kopi pilihan dari dataran tinggi Sidikalang sebagai house beans, dengan identitas utama:

> Coffee · Food · Community

## Tentang DOSI

DOSI lahir dari keyakinan sederhana bahwa hari yang baik sering kali dimulai dari secangkir kopi dan orang-orang yang tepat.

Website ini dirancang untuk memberikan pengalaman digital yang hangat, modern, dan responsif bagi pengunjung yang ingin:

- Mengenal DOSI Coffee & Space
- Melihat kategori dan daftar menu
- Menemukan signature menu DOSI
- Mengetahui fasilitas dan suasana café
- Melihat lokasi serta jam operasional
- Melakukan reservasi meja

## Fitur

- Responsive navigation dengan mobile menu
- Full-screen hero section
- Informasi dan cerita tentang DOSI
- Daftar menu berdasarkan kategori
- Filter menu interaktif
- Format harga dalam Rupiah
- Informasi ketersediaan menu
- Badge Signature, Best Seller, Recommended, dan New
- Informasi fasilitas café
- Responsive layout untuk desktop, tablet, dan mobile
- Semantic HTML dan basic accessibility

## Kategori Menu

Menu DOSI dikelompokkan menjadi:

- DOSI Signature
- Espresso Based
- Manual Brew
- Non Coffee
- Food & Bites

Sidikalang digunakan sebagai house beans DOSI, sedangkan nama signature drink tetap menggunakan identitas DOSI.

## Teknologi

Project ini dibangun menggunakan:

- React
- TypeScript
- Vite
- CSS Modules
- ESLint
- Native CSS Variables
- Responsive Web Design

## Struktur Project

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   ├── home/
│   │   ├── components/
│   │   └── HomePage.tsx
│   ├── menu/
│   │   ├── components/
│   │   ├── data/
│   │   ├── types/
│   │   └── MenuPage.tsx
│   └── reservation/
│       ├── components/
│       ├── types/
│       └── ReservationPage.tsx
├── routes/
├── styles/
├── App.tsx
└── main.tsx
```

Project menggunakan pendekatan feature-based architecture. Komponen dikelompokkan berdasarkan fitur bisnis agar lebih mudah dikembangkan dan dipelihara.

## Menjalankan Project

Pastikan Node.js dan npm sudah terpasang.

Clone repository:

```bash
git clone https://github.com/FredrickP/DosiCoffeeSpace.git
```

Masuk ke folder project:

```bash
cd DosiCoffeeSpace
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya:

```text
http://localhost:5173
```

## Production Build

Jalankan pemeriksaan lint:

```bash
npm run lint
```

Buat production build:

```bash
npm run build
```

Preview hasil production build:

```bash
npm run preview
```

## Responsive Breakpoints

Website dioptimalkan untuk beberapa ukuran layar:

| Perangkat | Ukuran |
|---|---:|
| Mobile kecil | Hingga 380px |
| Mobile | Hingga 600px |
| Tablet | Hingga 900px |
| Laptop kecil | Hingga 1100px |
| Desktop | Di atas 1100px |

## Roadmap

Fitur yang akan dikembangkan berikutnya:

- Location dan opening hours
- Form reservasi meja
- Integrasi reservasi melalui WhatsApp
- Galeri café
- Customer testimonials
- Dashboard admin
- Pengelolaan menu melalui database
- Integrasi Supabase
- SEO dan social media metadata
- Deployment production

## Repository

[github.com/FredrickP/DosiCoffeeSpace](https://github.com/FredrickP/DosiCoffeeSpace)

## Author

Developed by [Fredrick Pardosi](https://github.com/FredrickP).