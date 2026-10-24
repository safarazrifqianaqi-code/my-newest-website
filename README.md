# 🚀 Website Pribadi Bertema Luar Angkasa

Website portofolio pribadi dengan tema luar angkasa, dibuat hanya dengan HTML, CSS, dan JavaScript murni (tanpa framework).

## Fitur

- Latar bintang berkelip di canvas, bergeser mengikuti kursor
- Teks pengetikan otomatis di bagian hero
- Keahlian ditampilkan sebagai sistem tata surya yang mengorbit; klik planet untuk melihat detail
- Desain responsif dengan menu mobile
- Menghormati pengaturan `prefers-reduced-motion`

## Struktur file

```
website-luar-angkasa/
├── index.html   # Struktur halaman
├── style.css    # Tampilan dan animasi
├── script.js    # Interaksi (bintang, pengetikan, orbit, menu)
└── README.md    # Dokumentasi ini
```

## Cara menjalankan

1. Unduh semua file dan simpan dalam satu folder.
2. Buka `index.html` di browser. Tidak perlu instalasi apa pun.
3. Koneksi internet dibutuhkan hanya untuk memuat font Google (Syne dan Instrument Sans). Tanpa internet, font bawaan sistem dipakai.

## Cara mengubah isi

| Yang ingin diubah | Lokasi |
|---|---|
| Nama, bio, lokasi | `index.html` (cari "Nama Kamu") |
| Kata yang diketik di hero | `script.js`, variabel `roles` |
| Keahlian dan deskripsinya | `index.html`, atribut `data-*` pada tombol `.planet` |
| Proyek | `index.html`, bagian `#proyek` |
| Email dan tautan sosial media | `index.html`, bagian `#kontak` |
| Warna | `style.css`, variabel di `:root` |

## Hosting gratis

Unggah folder ini ke GitHub Pages, Netlify, atau Vercel untuk membuat website bisa diakses publik.

## Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan pribadi.
