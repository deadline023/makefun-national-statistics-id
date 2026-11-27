// DataNusa v2 — angka resmi Indonesia.
// Semua angka di bawah ini angka terbitan resmi (BPS, Bank Dunia, IMF,
// Dukcapil Kemendagri, CIA World Factbook) dan selalu tampil bersama
// sumber + tahunnya. Tidak ada angka karangan di situs ini.

export const SITUS = {
  nama: "DataNusa",
  negara: "Indonesia",
  semboyan: "Statistik nasional Indonesia: satu pintu, semua angka bersumber.",
  diperbarui: "27 November 2026",
  tahunDasar: 2024,
  luasKm2: 1904569,
  luasSumber: "BPS, Statistik Indonesia 2024",
};

// Delapan angka kunci halaman depan.
export const ANGKA_KUNCI = [
  { label: "Jumlah Penduduk", tampil: "281,6 jt", satuan: "jiwa", catatan: "Pertengahan 2024; naik 1,0% dari 2023", sumber: "BPS", tahun: 2024 },
  { label: "PDB Harga Berlaku", tampil: "Rp22.139 T", satuan: "triliun rupiah", catatan: "Per kapita Rp78,6 jt (US$4.960)", sumber: "BPS", tahun: 2024 },
  { label: "Pertumbuhan Ekonomi", tampil: "5,03%", satuan: "y-on-y", catatan: "Sedikit di bawah 5,05% pada 2023", sumber: "BPS", tahun: 2024 },
  { label: "Inflasi", tampil: "1,57%", satuan: "Des thd Des", catatan: "Terendah dalam satu dekade", sumber: "BPS", tahun: 2024 },
  { label: "Pengangguran Terbuka", tampil: "4,91%", satuan: "angkatan kerja", catatan: "7,47 jt orang (Agustus 2024)", sumber: "BPS, Sakernas", tahun: 2024 },
  { label: "Penduduk Miskin", tampil: "8,57%", satuan: "dari penduduk", catatan: "24,06 jt orang (September); rekor terendah", sumber: "BPS", tahun: 2024 },
  { label: "Harapan Hidup", tampil: "74,15 thn", satuan: "saat lahir", catatan: "Naik 0,22 tahun dari 2023", sumber: "BPS", tahun: 2024 },
  { label: "IPM", tampil: "75,02", satuan: "kategori Tinggi", catatan: "Naik 0,63 poin dari 74,39 (2023)", sumber: "BPS", tahun: 2024 },
];

// --- Kependudukan -------------------------------------------------------

// Penduduk pertengahan tahun, juta jiwa (BPS).
export const SERI_PENDUDUK = [
  [2015, 255.46], [2016, 258.71], [2017, 261.89], [2018, 265.02], [2019, 268.07],
  [2020, 270.2], [2021, 272.68], [2022, 275.77], [2023, 278.7], [2024, 281.6],
];
export const SERI_PENDUDUK_SUMBER = "BPS, 2015–2024";

// Struktur umur, Semester I 2024 (Dukcapil Kemendagri; total 282,48 jt jiwa).
export const STRUKTUR_UMUR = [
  { kelompok: "0–14 tahun", persen: 22.95, jiwa: "64,83 jt", keterangan: "Anak" },
  { kelompok: "15–64 tahun", persen: 69.58, jiwa: "196,56 jt", keterangan: "Usia produktif" },
  { kelompok: "65 tahun ke atas", persen: 7.46, jiwa: "21,09 jt", keterangan: "Lansia" },
];
export const RASIO_KETERGANTUNGAN = { nilai: "43,7", teks: "tiap 100 penduduk usia produktif menanggung 43,7 penduduk nonproduktif", sumber: "Dukcapil Kemendagri, 2024" };
export const USIA_MEDIAN = { nilai: "30,7 thn", sumber: "PBB, World Population Prospects 2024" };

// --- Ekonomi ------------------------------------------------------------

// PDB harga berlaku (Rp triliun), pertumbuhan (%), inflasi (%) — BPS.
export const SERI_PDB = [
  { tahun: 2019, pdb: 15832.7, tumbuh: 5.02, inflasi: 2.72 },
  { tahun: 2020, pdb: 15443.4, tumbuh: -2.07, inflasi: 1.68 },
  { tahun: 2021, pdb: 16976.7, tumbuh: 3.7, inflasi: 1.87 },
  { tahun: 2022, pdb: 19588.4, tumbuh: 5.31, inflasi: 5.51 },
  { tahun: 2023, pdb: 20892.4, tumbuh: 5.05, inflasi: 2.61 },
  { tahun: 2024, pdb: 22139.0, tumbuh: 5.03, inflasi: 1.57 },
];
export const SERI_PDB_SUMBER = "BPS, 2019–2024";

export const PDB_LAIN = [
  { label: "PDB per kapita", nilai: "Rp78,6 jt", sub: "US$4.960,3", sumber: "BPS, 2024" },
  { label: "PDB (PPP)", nilai: "US$4,67 T", sub: "paritas daya beli", sumber: "Bank Dunia, 2024" },
  { label: "PDB nominal (US$)", nilai: "US$1,40 T", sub: "kurs berlaku", sumber: "Bank Dunia, 2024" },
];

// Kontribusi lapangan usaha terhadap PDB, % (BPS, Pendapatan Nasional 2021–2025).
export const SEKTOR = [
  { nama: "Industri pengolahan", persen: 19.07 },
  { nama: "Perdagangan besar & eceran", persen: 13.17 },
  { nama: "Pertanian, kehutanan & perikanan", persen: 13.1 },
  { nama: "Konstruksi", persen: 9.83 },
  { nama: "Pertambangan & penggalian", persen: 8.75 },
  { nama: "Lapangan usaha lainnya", persen: 36.08 },
];

// Komposisi PDB menurut pengeluaran, % (CIA World Factbook, estimasi 2024).
export const PENGELUARAN = [
  { nama: "Konsumsi rumah tangga", persen: 55.4 },
  { nama: "Investasi (PMTB)", persen: 29.1 },
  { nama: "Ekspor barang & jasa", persen: 22.2 },
  { nama: "Konsumsi pemerintah", persen: 7.7 },
  { nama: "Impor barang & jasa", persen: -20.4 },
];

// Perdagangan luar negeri 2024, US$ miliar (BPS).
export const DAGANG = { ekspor: 264.7, impor: 233.66, surplus: 31.04, eksporTumbuh: 2.29, sumber: "BPS, 2024" };
export const EKSPOR_UTAMA = [
  { nama: "Bahan bakar mineral", nilai: 55.52, persen: 20.98 },
  { nama: "Lemak & minyak nabati (sawit)", nilai: 26.82, persen: 10.13 },
  { nama: "Besi & baja", nilai: 25.8, persen: 9.75 },
  { nama: "Mesin & peralatan listrik", nilai: 15.05, persen: 5.69 },
  { nama: "Kendaraan & bagiannya", nilai: 11.01, persen: 4.16 },
];
export const TUJUAN_EKSPOR = ["Tiongkok", "Amerika Serikat", "Jepang"];

// --- Masyarakat ---------------------------------------------------------

// IPM 2020–2024 (BPS).
export const SERI_IPM = [[2020, 71.94], [2021, 72.29], [2022, 73.77], [2023, 74.39], [2024, 75.02]];
export const KOMPONEN_IPM = [
  { label: "Umur harapan hidup", nilai: "74,15 thn" },
  { label: "Harapan lama sekolah", nilai: "13,21 thn" },
  { label: "Rata-rata lama sekolah", nilai: "8,85 thn" },
  { label: "Pengeluaran riil per kapita", nilai: "Rp12,34 jt/thn" },
];

export const KESEHATAN = [
  { label: "Angka kematian bayi", nilai: "15,2", satuan: "per 1.000 kelahiran hidup", sumber: "Estimasi antar-lembaga PBB via UNICEF, 2024" },
  { label: "Angka kematian balita", nilai: "17,7", satuan: "per 1.000 kelahiran hidup", sumber: "Bank Dunia, WDI 2024" },
  { label: "Angka kematian ibu", nilai: "140", satuan: "per 100.000 kelahiran hidup", sumber: "Kemenkes / data ASEAN, 2023" },
];

export const PENDIDIKAN = [
  { label: "Melek huruf (15+ thn)", nilai: "96,67%", detail: "Laki-laki 97,69% · Perempuan 95,66%", sumber: "BPS, Susenas 2024" },
  { label: "Melek huruf perkotaan", nilai: "98,07%", detail: "Perdesaan 94,66%", sumber: "BPS, Susenas 2024" },
  { label: "Harapan lama sekolah", nilai: "13,21 thn", detail: "DIY tertinggi: 15,70 thn", sumber: "BPS, 2024" },
  { label: "Rata-rata lama sekolah", nilai: "8,85 thn", detail: "Usia 25+; setara kelas 9 SMP", sumber: "BPS, 2024" },
];
// Angka partisipasi sekolah, % (BPS, 2024).
export const PARTISIPASI = [
  { kelompok: "7–12 thn (SD)", persen: 99.19 },
  { kelompok: "13–15 thn (SMP)", persen: 96.17 },
  { kelompok: "16–18 thn (SMA)", persen: 74.64 },
  { kelompok: "19–23 thn (PT)", persen: 29.01 },
];

export const KERJA = [
  { label: "Angkatan kerja", nilai: "152,1 jt", detail: "orang", sumber: "BPS, Sakernas Agu 2024" },
  { label: "Penduduk bekerja", nilai: "144,64 jt", detail: "orang", sumber: "BPS, Sakernas Agu 2024" },
  { label: "Pengangguran", nilai: "7,47 jt", detail: "orang (TPT 4,91%)", sumber: "BPS, Sakernas Agu 2024" },
  { label: "Pekerja informal", nilai: "57,95%", detail: "dari penduduk bekerja", sumber: "BPS, 2024" },
];
// Tingkat pengangguran terbuka, % (BPS, Sakernas Agustus).
export const SERI_TPT = [[2020, 7.07], [2021, 6.49], [2022, 5.86], [2023, 5.32], [2024, 4.91]];

// Kemiskinan, % penduduk (BPS).
export const SERI_MISKIN = [
  { label: "Sep 2022", persen: 9.57 }, { label: "Mar 2023", persen: 9.36 },
  { label: "Sep 2023", persen: 9.36 }, { label: "Mar 2024", persen: 9.03 },
  { label: "Sep 2024", persen: 8.57 },
];
export const MISKIN_RINCI = [
  { label: "Penduduk miskin (Sep 2024)", nilai: "24,06 jt orang", sumber: "BPS, 2024" },
  { label: "Kemiskinan perkotaan", nilai: "6,66%", sumber: "BPS, 2024" },
  { label: "Kemiskinan perdesaan", nilai: "11,34%", sumber: "BPS, 2024" },
  { label: "Garis kemiskinan", nilai: "Rp595.242", detail: "per kapita per bulan", sumber: "BPS, 2024" },
];

// --- Daerah: 38 provinsi -------------------------------------------------
// Populasi: BPS, proyeksi pertengahan 2024 (jiwa). Luas: Kemendagri/BPS (km2).
// Kepadatan dihitung situs ini dari kedua angka tersebut.
export const PROVINSI = [
  ["Aceh", "Banda Aceh", "Sumatra", 56835, 5554800],
  ["Sumatera Utara", "Medan", "Sumatra", 72461, 15588500],
  ["Sumatera Barat", "Padang", "Sumatra", 42120, 5836200],
  ["Riau", "Pekanbaru", "Sumatra", 89936, 6728100],
  ["Jambi", "Jambi", "Sumatra", 49027, 3724300],
  ["Sumatera Selatan", "Palembang", "Sumatra", 86772, 8837300],
  ["Bengkulu", "Bengkulu", "Sumatra", 20128, 2112200],
  ["Lampung", "Bandar Lampung", "Sumatra", 33570, 9419600],
  ["Kepulauan Bangka Belitung", "Pangkalpinang", "Sumatra", 16690, 1517100],
  ["Kepulauan Riau", "Tanjung Pinang", "Sumatra", 8270, 2183300],
  ["DKI Jakarta", "Jakarta", "Jawa", 661, 10684900],
  ["Jawa Barat", "Bandung", "Jawa", 37045, 50345200],
  ["Jawa Tengah", "Semarang", "Jawa", 34337, 37892300],
  ["DI Yogyakarta", "Yogyakarta", "Jawa", 3171, 3759500],
  ["Jawa Timur", "Surabaya", "Jawa", 48038, 41814500],
  ["Banten", "Serang", "Jawa", 9353, 12434900],
  ["Bali", "Denpasar", "Bali & Nusa Tenggara", 5780, 4380800],
  ["Nusa Tenggara Barat", "Mataram", "Bali & Nusa Tenggara", 18572, 5646200],
  ["Nusa Tenggara Timur", "Kupang", "Bali & Nusa Tenggara", 47932, 5668000],
  ["Kalimantan Barat", "Pontianak", "Kalimantan", 147307, 5795500],
  ["Kalimantan Tengah", "Palangka Raya", "Kalimantan", 153444, 2809800],
  ["Kalimantan Selatan", "Banjarmasin", "Kalimantan", 38744, 4275500],
  ["Kalimantan Timur", "Samarinda", "Kalimantan", 127347, 3859100],
  ["Kalimantan Utara", "Tanjung Selor", "Kalimantan", 75467, 727700],
  ["Sulawesi Utara", "Manado", "Sulawesi", 13892, 2739500],
  ["Sulawesi Tengah", "Palu", "Sulawesi", 61841, 3074300],
  ["Sulawesi Selatan", "Makassar", "Sulawesi", 46717, 9463700],
  ["Sulawesi Tenggara", "Kendari", "Sulawesi", 38140, 2771000],
  ["Gorontalo", "Gorontalo", "Sulawesi", 11257, 1234500],
  ["Sulawesi Barat", "Mamuju", "Sulawesi", 16787, 1573500],
  ["Maluku", "Ambon", "Maluku", 46914, 2009000],
  ["Maluku Utara", "Sofifi", "Maluku", 31983, 1449100],
  ["Papua Barat", "Manokwari", "Papua", 64125, 569900],
  ["Papua Barat Daya", "Sorong", "Papua", 38858, 616900],
  ["Papua", "Jayapura", "Papua", 82681, 1082400],
  ["Papua Selatan", "Merauke", "Papua", 117849, 542100],
  ["Papua Tengah", "Nabire", "Papua", 61073, 1360500],
  ["Papua Pegunungan", "Wamena", "Papua", 51213, 1470800],
];
export const PROVINSI_SUMBER = "Populasi: BPS, proyeksi pertengahan 2024 · Luas: Kemendagri/BPS, 2024";

// --- Sumber ---------------------------------------------------------------

export const SUMBER_GRUP = [
  {
    judul: "Kependudukan",
    baris: [
      ["Jumlah penduduk 281,6 juta jiwa", "BPS", "2024"],
      ["Tren penduduk 2015–2024", "BPS", "2015–2024"],
      ["Struktur umur dan rasio ketergantungan 43,7", "Dukcapil Kemendagri, Semester I", "2024"],
      ["Penduduk 38 provinsi", "BPS, proyeksi pertengahan tahun", "2024"],
      ["Luas wilayah 1.904.569 km2 dan luas per provinsi", "BPS / Kemendagri", "2024"],
      ["Usia median 30,7 tahun", "PBB, World Population Prospects", "2024"],
    ],
  },
  {
    judul: "Ekonomi",
    baris: [
      ["PDB Rp22.139 triliun; per kapita Rp78,6 juta (US$4.960,3)", "BPS, Berita Resmi Statistik", "2024"],
      ["Pertumbuhan ekonomi 5,03% dan seri 2019–2024", "BPS", "2019–2024"],
      ["Inflasi 1,57% dan seri 2019–2024", "BPS", "2019–2024"],
      ["PDB PPP US$4,67 triliun; PDB nominal US$1,40 triliun", "Bank Dunia", "2024"],
      ["Kontribusi lapangan usaha terhadap PDB", "BPS, Pendapatan Nasional 2021–2025", "2025"],
      ["Komposisi PDB menurut pengeluaran", "CIA World Factbook", "2024"],
      ["Ekspor US$264,70 M; impor US$233,66 M; surplus US$31,04 M", "BPS", "2024"],
      ["Komoditas ekspor utama dan pangsanya", "BPS / data perdagangan", "2024"],
      ["Tujuan ekspor utama: Tiongkok, Amerika Serikat, Jepang", "BPS", "2024"],
    ],
  },
  {
    judul: "Masyarakat",
    baris: [
      ["Harapan hidup 74,15 tahun", "BPS", "2024"],
      ["Angka kematian bayi 15,2 per 1.000 kelahiran hidup", "Estimasi antar-lembaga PBB via UNICEF", "2024"],
      ["Angka kematian balita 17,7 per 1.000 kelahiran hidup", "Bank Dunia, WDI", "2024"],
      ["Angka kematian ibu 140 per 100.000 kelahiran hidup", "Kemenkes / ASEAN", "2023"],
      ["IPM 75,02, seri dan komponennya", "BPS", "2020–2024"],
      ["Melek huruf 96,67% (15 tahun ke atas)", "BPS, Susenas", "2024"],
      ["Harapan lama sekolah 13,21 thn; rata-rata lama sekolah 8,85 thn", "BPS", "2024"],
      ["Partisipasi sekolah menurut kelompok umur", "BPS", "2024"],
      ["TPT 4,91%; angkatan kerja 152,1 jt; bekerja 144,64 jt", "BPS, Sakernas Agustus", "2024"],
      ["Pekerja informal 57,95%", "BPS", "2024"],
      ["Kemiskinan 8,57%; 24,06 jt orang; garis Rp595.242", "BPS", "2024"],
    ],
  },
  {
    judul: "Catatan metode",
    baris: [
      ["Angka 2024 adalah rilis resmi penuh terakhir saat situs disusun (November 2026)", "DataNusa", "2026"],
      ["Kepadatan = populasi dibagi luas wilayah provinsi", "DataNusa", "2026"],
      ["Persen dibulatkan dua desimal; total komponen bisa selisih 0,01 karena pembulatan", "DataNusa", "2026"],
    ],
  },
];
