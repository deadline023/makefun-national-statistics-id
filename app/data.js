// DataNusa — seluruh angka situs ini.
// Setiap angka disertai sumber dan tahunnya di field `source` / `year`.
// Sumber: Badan Pusat Statistik (BPS), Bank Dunia (World Bank),
// Dana Moneter Internasional (IMF), dan Dukcapil Kemendagri.
// Tidak ada angka yang dikarang: yang tidak terverifikasi tidak dimasukkan.

export const META = {
  country: "Indonesia",
  countryCode: "IDN",
  tagline: "Angka resmi Indonesia, satu tempat.",
  updated: "26 November 2026",
  baseYear: 2024,
  areaKm2: 1904569,
  areaSource: "BPS, Statistik Indonesia",
  areaYear: 2024,
};

export const KPI = [
  {
    id: "population",
    label: "Jumlah Penduduk",
    value: 281.6,
    display: "281,6 jt",
    unit: "jiwa",
    note: "Pertengahan tahun; naik 1,0% dari 2023",
    source: "BPS",
    year: 2024,
  },
  {
    id: "gdp",
    label: "PDB (harga berlaku)",
    value: 22139.0,
    display: "Rp22.139 T",
    unit: "triliun rupiah",
    note: "PDB per kapita Rp78,6 jt (US$4.960)",
    source: "BPS",
    year: 2024,
  },
  {
    id: "growth",
    label: "Pertumbuhan Ekonomi",
    value: 5.03,
    display: "5,03%",
    unit: "y-on-y",
    note: "Melambat tipis dari 5,05% pada 2023",
    source: "BPS",
    year: 2024,
  },
  {
    id: "inflation",
    label: "Inflasi (y-on-y)",
    value: 1.57,
    display: "1,57%",
    unit: "Des thd Des",
    note: "Terendah dalam satu dekade terakhir",
    source: "BPS",
    year: 2024,
  },
  {
    id: "unemployment",
    label: "Pengangguran Terbuka",
    value: 4.91,
    display: "4,91%",
    unit: "dari angkatan kerja",
    note: "7,47 jt orang menganggur (Agustus)",
    source: "BPS, Sakernas",
    year: 2024,
  },
  {
    id: "poverty",
    label: "Penduduk Miskin",
    value: 8.57,
    display: "8,57%",
    unit: "dari penduduk",
    note: "24,06 jt orang (September); terendah sepanjang sejarah",
    source: "BPS",
    year: 2024,
  },
  {
    id: "life",
    label: "Harapan Hidup",
    value: 74.15,
    display: "74,15 thn",
    unit: "saat lahir",
    note: "Naik 0,22 tahun dari 2023",
    source: "BPS",
    year: 2024,
  },
  {
    id: "hdi",
    label: "IPM",
    value: 75.02,
    display: "75,02",
    unit: "kategori Tinggi",
    note: "Naik 0,63 poin dari 74,39 pada 2023",
    source: "BPS",
    year: 2024,
  },
];

// Jumlah penduduk pertengahan tahun, juta jiwa (BPS).
export const POPULATION_SERIES = [
  { year: 2015, value: 255.46 },
  { year: 2016, value: 258.71 },
  { year: 2017, value: 261.89 },
  { year: 2018, value: 265.02 },
  { year: 2019, value: 268.07 },
  { year: 2020, value: 270.2 },
  { year: 2021, value: 272.68 },
  { year: 2022, value: 275.77 },
  { year: 2023, value: 278.7 },
  { year: 2024, value: 281.6 },
];
export const POPULATION_SERIES_SOURCE = { source: "BPS", year: "2015–2024" };

// Struktur umur 2024 (Dukcapil Kemendagri, Semester I 2024; total 282,48 jt jiwa).
export const AGE_GROUPS = [
  { group: "0–14 tahun", share: 22.95, millions: 64.83, note: "Anak" },
  { group: "15–64 tahun", share: 69.58, millions: 196.56, note: "Usia produktif" },
  { group: "65+ tahun", share: 7.46, millions: 21.09, note: "Lansia" },
];
export const AGE_SOURCE = { source: "Dukcapil Kemendagri", year: 2024 };
export const DEPENDENCY_RATIO = {
  value: 43.7,
  note: "Setiap 100 penduduk usia produktif menanggung 43,7 penduduk nonproduktif",
  source: "Dukcapil Kemendagri",
  year: 2024,
};
export const MEDIAN_AGE = {
  value: 30.7,
  note: "Usia median penduduk",
  source: "PBB, World Population Prospects 2024",
  year: 2026,
};

// PDB atas dasar harga berlaku (Rp triliun) dan laju pertumbuhan (%), BPS.
export const GDP_SERIES = [
  { year: 2019, nominal: 15832.7, growth: 5.02, inflation: 2.72 },
  { year: 2020, nominal: 15443.4, growth: -2.07, inflation: 1.68 },
  { year: 2021, nominal: 16976.7, growth: 3.7, inflation: 1.87 },
  { year: 2022, nominal: 19588.4, growth: 5.31, inflation: 5.51 },
  { year: 2023, nominal: 20892.4, growth: 5.05, inflation: 2.61 },
  { year: 2024, nominal: 22139.0, growth: 5.03, inflation: 1.57 },
];
export const GDP_SERIES_SOURCE = { source: "BPS", year: "2019–2024" };
export const GDP_EXTRA = [
  { label: "PDB per kapita", value: "Rp78,6 jt", sub: "US$4.960,3", source: "BPS", year: 2024 },
  { label: "PDB (PPP)", value: "US$4,67 T", sub: "paritas daya beli", source: "Bank Dunia", year: 2024 },
  { label: "PDB nominal (US$)", value: "US$1,40 T", sub: "kurs berlaku", source: "Bank Dunia", year: 2024 },
];

// Kontribusi lapangan usaha terhadap PDB, % (BPS, via publikasi Pendapatan Nasional 2021–2025).
export const SECTORS = [
  { name: "Industri pengolahan", share: 19.07 },
  { name: "Perdagangan besar & eceran", share: 13.17 },
  { name: "Pertanian, kehutanan & perikanan", share: 13.1 },
  { name: "Konstruksi", share: 9.83 },
  { name: "Pertambangan & penggalian", share: 8.75 },
  { name: "Lapangan usaha lainnya", share: 36.08 },
];
export const SECTORS_SOURCE = { source: "BPS", year: 2025 };

// Komposisi PDB menurut pengeluaran, % (CIA World Factbook, estimasi 2024).
export const EXPENDITURE = [
  { name: "Konsumsi rumah tangga", share: 55.4 },
  { name: "Investasi (PMTB)", share: 29.1 },
  { name: "Ekspor barang & jasa", share: 22.2 },
  { name: "Konsumsi pemerintah", share: 7.7 },
  { name: "Impor barang & jasa", share: -20.4 },
];
export const EXPENDITURE_SOURCE = { source: "CIA World Factbook", year: 2024 };

// Perdagangan luar negeri 2024, US$ miliar (BPS).
export const TRADE = {
  exports: 264.7,
  imports: 233.66,
  surplus: 31.04,
  exportGrowth: 2.29,
  source: "BPS",
  year: 2024,
};
export const TOP_EXPORTS = [
  { name: "Bahan bakar mineral", value: 55.52, share: 20.98 },
  { name: "Lemak & minyak nabati (sawit)", value: 26.82, share: 10.13 },
  { name: "Besi & baja", value: 25.8, share: 9.75 },
  { name: "Mesin & peralatan listrik", value: 15.05, share: 5.69 },
  { name: "Kendaraan & bagiannya", value: 11.01, share: 4.16 },
];
export const TOP_EXPORTS_SOURCE = { source: "BPS / data perdagangan", year: 2024 };
export const TOP_DESTINATIONS = [
  { name: "Tiongkok", note: "Tujuan ekspor nonmigas terbesar" },
  { name: "Amerika Serikat", note: "Tujuan ekspor nonmigas kedua" },
  { name: "Jepang", note: "Tujuan ekspor nonmigas ketiga" },
];
export const TOP_DESTINATIONS_SOURCE = { source: "BPS", year: 2024 };

// IPM 2020–2024 (BPS).
export const HDI_SERIES = [
  { year: 2020, value: 71.94 },
  { year: 2021, value: 72.29 },
  { year: 2022, value: 73.77 },
  { year: 2023, value: 74.39 },
  { year: 2024, value: 75.02 },
];
export const HDI_COMPONENTS = [
  { label: "Umur harapan hidup", value: "74,15 thn", source: "BPS", year: 2024 },
  { label: "Harapan lama sekolah", value: "13,21 thn", source: "BPS", year: 2024 },
  { label: "Rata-rata lama sekolah", value: "8,85 thn", source: "BPS", year: 2024 },
  { label: "Pengeluaran riil per kapita", value: "Rp12,34 jt/thn", source: "BPS", year: 2024 },
];

export const HEALTH = [
  { label: "Angka kematian bayi", value: "15,2", unit: "per 1.000 kelahiran hidup", source: "Estimasi antar-lembaga PBB, via UNICEF", year: 2024 },
  { label: "Angka kematian balita", value: "17,7", unit: "per 1.000 kelahiran hidup", source: "Bank Dunia, WDI", year: 2024 },
  { label: "Angka kematian ibu (2023)", value: "140", unit: "per 100.000 kelahiran hidup", source: "Kemenkes / data ASEAN", year: 2023 },
];

export const EDUCATION = [
  { label: "Angka melek huruf (15+ thn)", value: "96,67%", detail: "Laki-laki 97,69% · Perempuan 95,66%", source: "BPS, Susenas", year: 2024 },
  { label: "Melek huruf perkotaan", value: "98,07%", detail: "Perdesaan 94,66%", source: "BPS, Susenas", year: 2024 },
  { label: "Harapan lama sekolah", value: "13,21 thn", detail: "Setara SMA ke atas; DIY tertinggi 15,70 thn", source: "BPS", year: 2024 },
  { label: "Rata-rata lama sekolah", value: "8,85 thn", detail: "Penduduk 25 tahun ke atas; setara kelas 9 (SMP)", source: "BPS", year: 2024 },
];
// Angka partisipasi sekolah 2024, % (BPS).
export const SCHOOL_PARTICIPATION = [
  { group: "Usia 7–12 thn (SD)", value: 99.19 },
  { group: "Usia 13–15 thn (SMP)", value: 96.17 },
  { group: "Usia 16–18 thn (SMA)", value: 74.64 },
  { group: "Usia 19–23 thn (PT)", value: 29.01 },
];
export const SCHOOL_PARTICIPATION_SOURCE = { source: "BPS", year: 2024 };

// Ketenagakerjaan, Sakernas Agustus (BPS).
export const LABOUR = [
  { label: "Angkatan kerja", value: "152,1 jt", detail: "orang", source: "BPS, Sakernas", year: 2024 },
  { label: "Penduduk bekerja", value: "144,64 jt", detail: "orang", source: "BPS, Sakernas", year: 2024 },
  { label: "Pengangguran", value: "7,47 jt", detail: "orang (TPT 4,91%)", source: "BPS, Sakernas", year: 2024 },
  { label: "Pekerja informal", value: "57,95%", detail: "dari penduduk bekerja", source: "BPS", year: 2024 },
];
export const UNEMPLOYMENT_SERIES = [
  { year: 2020, value: 7.07 },
  { year: 2021, value: 6.49 },
  { year: 2022, value: 5.86 },
  { year: 2023, value: 5.32 },
  { year: 2024, value: 4.91 },
];
export const UNEMPLOYMENT_SERIES_SOURCE = { source: "BPS, Sakernas Agustus", year: "2020–2024" };

// Kemiskinan (BPS). Garis kemiskinan September 2024 Rp595.242 per kapita per bulan.
export const POVERTY_SERIES = [
  { label: "Sep 2022", value: 9.57 },
  { label: "Mar 2023", value: 9.36 },
  { label: "Sep 2023", value: 9.36 },
  { label: "Mar 2024", value: 9.03 },
  { label: "Sep 2024", value: 8.57 },
];
export const POVERTY_DETAIL = [
  { label: "Penduduk miskin (Sep 2024)", value: "24,06 jt orang", source: "BPS", year: 2024 },
  { label: "Kemiskinan perkotaan", value: "6,66%", source: "BPS", year: 2024 },
  { label: "Kemiskinan perdesaan", value: "11,34%", source: "BPS", year: 2024 },
  { label: "Garis kemiskinan", value: "Rp595.242", detail: "per kapita per bulan", source: "BPS", year: 2024 },
];

// 38 provinsi. Populasi: BPS, proyeksi pertengahan tahun 2024 (jiwa).
// Luas: Kemendagri / BPS (km2, dibulatkan). Kepadatan dihitung dari kedua angka itu.
export const PROVINCES = [
  { name: "Aceh", capital: "Banda Aceh", island: "Sumatra", area: 56835, pop: 5554800 },
  { name: "Sumatera Utara", capital: "Medan", island: "Sumatra", area: 72461, pop: 15588500 },
  { name: "Sumatera Barat", capital: "Padang", island: "Sumatra", area: 42120, pop: 5836200 },
  { name: "Riau", capital: "Pekanbaru", island: "Sumatra", area: 89936, pop: 6728100 },
  { name: "Jambi", capital: "Jambi", island: "Sumatra", area: 49027, pop: 3724300 },
  { name: "Sumatera Selatan", capital: "Palembang", island: "Sumatra", area: 86772, pop: 8837300 },
  { name: "Bengkulu", capital: "Bengkulu", island: "Sumatra", area: 20128, pop: 2112200 },
  { name: "Lampung", capital: "Bandar Lampung", island: "Sumatra", area: 33570, pop: 9419600 },
  { name: "Kepulauan Bangka Belitung", capital: "Pangkalpinang", island: "Sumatra", area: 16690, pop: 1517100 },
  { name: "Kepulauan Riau", capital: "Tanjung Pinang", island: "Sumatra", area: 8270, pop: 2183300 },
  { name: "DKI Jakarta", capital: "Jakarta", island: "Jawa", area: 661, pop: 10684900 },
  { name: "Jawa Barat", capital: "Bandung", island: "Jawa", area: 37045, pop: 50345200 },
  { name: "Jawa Tengah", capital: "Semarang", island: "Jawa", area: 34337, pop: 37892300 },
  { name: "DI Yogyakarta", capital: "Yogyakarta", island: "Jawa", area: 3171, pop: 3759500 },
  { name: "Jawa Timur", capital: "Surabaya", island: "Jawa", area: 48038, pop: 41814500 },
  { name: "Banten", capital: "Serang", island: "Jawa", area: 9353, pop: 12434900 },
  { name: "Bali", capital: "Denpasar", island: "Bali & Nusa Tenggara", area: 5780, pop: 4380800 },
  { name: "Nusa Tenggara Barat", capital: "Mataram", island: "Bali & Nusa Tenggara", area: 18572, pop: 5646200 },
  { name: "Nusa Tenggara Timur", capital: "Kupang", island: "Bali & Nusa Tenggara", area: 47932, pop: 5668000 },
  { name: "Kalimantan Barat", capital: "Pontianak", island: "Kalimantan", area: 147307, pop: 5795500 },
  { name: "Kalimantan Tengah", capital: "Palangka Raya", island: "Kalimantan", area: 153444, pop: 2809800 },
  { name: "Kalimantan Selatan", capital: "Banjarmasin", island: "Kalimantan", area: 38744, pop: 4275500 },
  { name: "Kalimantan Timur", capital: "Samarinda", island: "Kalimantan", area: 127347, pop: 3859100 },
  { name: "Kalimantan Utara", capital: "Tanjung Selor", island: "Kalimantan", area: 75467, pop: 727700 },
  { name: "Sulawesi Utara", capital: "Manado", island: "Sulawesi", area: 13892, pop: 2739500 },
  { name: "Sulawesi Tengah", capital: "Palu", island: "Sulawesi", area: 61841, pop: 3074300 },
  { name: "Sulawesi Selatan", capital: "Makassar", island: "Sulawesi", area: 46717, pop: 9463700 },
  { name: "Sulawesi Tenggara", capital: "Kendari", island: "Sulawesi", area: 38140, pop: 2771000 },
  { name: "Gorontalo", capital: "Gorontalo", island: "Sulawesi", area: 11257, pop: 1234500 },
  { name: "Sulawesi Barat", capital: "Mamuju", island: "Sulawesi", area: 16787, pop: 1573500 },
  { name: "Maluku", capital: "Ambon", island: "Maluku", area: 46914, pop: 2009000 },
  { name: "Maluku Utara", capital: "Sofifi", island: "Maluku", area: 31983, pop: 1449100 },
  { name: "Papua Barat", capital: "Manokwari", island: "Papua", area: 64125, pop: 569900 },
  { name: "Papua Barat Daya", capital: "Sorong", island: "Papua", area: 38858, pop: 616900 },
  { name: "Papua", capital: "Jayapura", island: "Papua", area: 82681, pop: 1082400 },
  { name: "Papua Selatan", capital: "Merauke", island: "Papua", area: 117849, pop: 542100 },
  { name: "Papua Tengah", capital: "Nabire", island: "Papua", area: 61073, pop: 1360500 },
  { name: "Papua Pegunungan", capital: "Wamena", island: "Papua", area: 51213, pop: 1470800 },
];
export const PROVINCES_SOURCE = {
  pop: { source: "BPS, proyeksi pertengahan tahun", year: 2024 },
  area: { source: "Kemendagri / BPS", year: 2024 },
};

// Daftar sumber lengkap untuk halaman Sumber.
export const SOURCE_GROUPS = [
  {
    title: "Kependudukan",
    items: [
      { figure: "Jumlah penduduk 281,6 juta jiwa", source: "BPS", year: 2024 },
      { figure: "Tren penduduk 2015–2024", source: "BPS", year: "2015–2024" },
      { figure: "Struktur umur 0–14 / 15–64 / 65+ dan rasio ketergantungan 43,7", source: "Dukcapil Kemendagri, Semester I", year: 2024 },
      { figure: "Penduduk menurut provinsi (38 provinsi)", source: "BPS, proyeksi pertengahan tahun", year: 2024 },
      { figure: "Luas wilayah 1.904.569 km2 dan luas per provinsi", source: "BPS / Kemendagri", year: 2024 },
      { figure: "Usia median 30,7 tahun", source: "PBB, World Population Prospects 2024", year: 2026 },
    ],
  },
  {
    title: "Ekonomi",
    items: [
      { figure: "PDB Rp22.139 triliun; PDB per kapita Rp78,6 juta (US$4.960,3)", source: "BPS, Berita Resmi Statistik", year: 2024 },
      { figure: "Pertumbuhan ekonomi 5,03%; seri 2019–2024", source: "BPS", year: "2019–2024" },
      { figure: "Inflasi 1,57%; seri 2019–2024", source: "BPS", year: "2019–2024" },
      { figure: "PDB PPP US$4,67 triliun; PDB nominal US$1,40 triliun", source: "Bank Dunia", year: 2024 },
      { figure: "Kontribusi lapangan usaha terhadap PDB", source: "BPS, Pendapatan Nasional Indonesia 2021–2025", year: 2025 },
      { figure: "Komposisi PDB menurut pengeluaran", source: "CIA World Factbook", year: 2024 },
      { figure: "Ekspor US$264,70 miliar; impor US$233,66 miliar; surplus US$31,04 miliar", source: "BPS", year: 2024 },
      { figure: "Komoditas ekspor utama dan pangsa HS", source: "BPS / data perdagangan", year: 2024 },
      { figure: "Tujuan ekspor utama: Tiongkok, Amerika Serikat, Jepang", source: "BPS", year: 2024 },
    ],
  },
  {
    title: "Masyarakat: kesehatan, pendidikan, ketenagakerjaan",
    items: [
      { figure: "Harapan hidup 74,15 tahun", source: "BPS", year: 2024 },
      { figure: "Angka kematian bayi 15,2 per 1.000 kelahiran hidup", source: "Estimasi antar-lembaga PBB, via UNICEF", year: 2024 },
      { figure: "Angka kematian balita 17,7 per 1.000 kelahiran hidup", source: "Bank Dunia, World Development Indicators", year: 2024 },
      { figure: "Angka kematian ibu 140 per 100.000 kelahiran hidup", source: "Kemenkes / perbandingan ASEAN", year: 2023 },
      { figure: "IPM 75,02; seri 2020–2024; komponen IPM", source: "BPS", year: "2020–2024" },
      { figure: "Angka melek huruf 96,67% (15 tahun ke atas)", source: "BPS, Susenas", year: 2024 },
      { figure: "Harapan lama sekolah 13,21 tahun; rata-rata lama sekolah 8,85 tahun", source: "BPS", year: 2024 },
      { figure: "Angka partisipasi sekolah menurut kelompok umur", source: "BPS", year: 2024 },
      { figure: "TPT 4,91%; angkatan kerja 152,1 juta; bekerja 144,64 juta; pengangguran 7,47 juta", source: "BPS, Sakernas Agustus", year: 2024 },
      { figure: "Pekerja informal 57,95%", source: "BPS", year: 2024 },
      { figure: "Tingkat kemiskinan 8,57%; 24,06 juta orang; garis kemiskinan Rp595.242", source: "BPS", year: 2024 },
    ],
  },
  {
    title: "Catatan metode",
    items: [
      { figure: "Angka 2024 adalah angka resmi terakhir yang dirilis penuh saat situs ini disusun (November 2026)", source: "DataNusa", year: 2026 },
      { figure: "Kepadatan penduduk dihitung sebagai populasi dibagi luas wilayah provinsi", source: "DataNusa", year: 2026 },
      { figure: "Persen dibulatkan ke dua desimal; jumlah komponen dapat berbeda 0,01 karena pembulatan", source: "DataNusa", year: 2026 },
    ],
  },
];
