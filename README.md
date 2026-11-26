# DataNusa — Statistik Indonesia

[![best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/deadline023/makefun-national-statistics-id/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/deadline023/makefun-national-statistics-id/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

DataNusa adalah situs statistik nasional Indonesia: angka resmi penduduk, ekonomi, kesehatan, pendidikan, ketenagakerjaan, dan 38 provinsi dalam satu tempat. Setiap angka disertai sumber dan tahunnya.

Situs ini statis dan bekerja luring penuh: tanpa build step, tanpa request jaringan, grafik digambar sendiri sebagai SVG dari data. Halaman: Beranda (KPI + grafik), Penduduk, Ekonomi, Masyarakat, Daerah (tabel 38 provinsi yang bisa diurutkan dan dicari), dan Sumber.

Sumber data utama: Badan Pusat Statistik (BPS), dilengkapi Bank Dunia, IMF, dan Dukcapil Kemendagri. Tahun acuan 2024.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Lalu sajikan `out/app` dengan server statis apa pun, atau langsung `python3 -m http.server` dari dalam `app/`.

## Screenshots

Empat tangkapan layar asli dari situs ini ada di `screenshots/`: beranda desktop, halaman ekonomi desktop, tabel daerah desktop, dan beranda di ukuran ponsel.

---

<sub>Built for the make.fun bounty — https://make.fun/?ref=yh628p52</sub>
