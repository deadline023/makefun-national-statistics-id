// Halaman-halaman DataNusa. Tiap halaman merangkai angka dari data.js
// dengan grafik dari charts.js; setiap blok angka membawa sumbernya.
import * as D from "./data.js";
import { batang, garis, batangDatar, donat, fmt, fmtInt } from "./charts.js";

const srcLine = (t) => `<p class="src">Sumber: ${t}</p>`;
const kartu = (judul, isi, src) => `<section class="card"><h3>${judul}</h3>${isi}${src ? srcLine(src) : ""}</section>`;

export function beranda() {
  const kpi = D.ANGKA_KUNCI.map((k) => `
    <div class="kpi">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.tampil}</div>
      <div class="kpi-note">${k.catatan}</div>
      <div class="kpi-src">${k.sumber} · ${k.tahun}</div>
    </div>`).join("");
  const popChart = batang(D.SERI_PENDUDUK.map(([t, v]) => ({ label: t, value: v })), { format: (v) => fmt(v, 0), warna: "#0b6e4f" });
  const pdbChart = batang(D.SERI_PDB.map((s) => ({ label: s.tahun, value: s.pdb })), { format: (v) => fmtInt(v), warna: "#2563eb" });
  return `
  <div class="hero">
    <h1>DataNusa — Statistik Indonesia</h1>
    <p class="tagline">${D.SITUS.semboyan}</p>
    <p class="hero-meta">Negara kepulauan seluas ${fmtInt(D.SITUS.luasKm2)} km2 · 38 provinsi · diperbarui ${D.SITUS.diperbarui} · tahun dasar ${D.SITUS.tahunDasar}</p>
  </div>
  <div class="kpi-grid">${kpi}</div>
  <div class="grid2">
    ${kartu("Penduduk Indonesia 2015–2024 (juta jiwa)", popChart, D.SERI_PENDUDUK_SUMBER)}
    ${kartu("PDB harga berlaku 2019–2024 (Rp triliun)", pdbChart, D.SERI_PDB_SUMBER)}
  </div>
  <p class="lead-links">Jelajahi: <a href="#/penduduk">Penduduk</a> · <a href="#/ekonomi">Ekonomi</a> · <a href="#/masyarakat">Masyarakat</a> · <a href="#/daerah">38 Provinsi</a> · <a href="#/sumber">Sumber</a></p>`;
}

export function penduduk() {
  const popChart = batang(D.SERI_PENDUDUK.map(([t, v]) => ({ label: t, value: v })), { format: (v) => fmt(v, 0), warna: "#0b6e4f" });
  const umur = batangDatar(D.STRUKTUR_UMUR.map((u) => ({ label: `${u.kelompok} (${u.keterangan})`, value: u.persen })), { format: (v) => fmt(v) + "%", warna: "#e8a13a", maks: 100 });
  return `
  <h2>Penduduk</h2>
  <p class="intro">Indonesia berpenduduk <b>281,6 juta jiwa</b> pada pertengahan 2024 — terbanyak keempat di dunia. Usia median ${D.USIA_MEDIAN.nilai} (${D.USIA_MEDIAN.sumber}).</p>
  <div class="grid2">
    ${kartu("Jumlah penduduk 2015–2024 (juta jiwa)", popChart, D.SERI_PENDUDUK_SUMBER)}
    ${kartu("Struktur umur 2024 (% penduduk)", umur, "Dukcapil Kemendagri, Semester I 2024")}
  </div>
  <section class="card"><h3>Rasio ketergantungan: ${D.RASIO_KETERGANTUNGAN.nilai}</h3>
    <p>Artinya ${D.RASIO_KETERGANTUNGAN.teks} — jendela bonus demografi masih terbuka selama angkatan kerja terserap.</p>
    ${srcLine(D.RASIO_KETERGANTUNGAN.sumber)}</section>`;
}

export function ekonomi() {
  const pdbChart = batang(D.SERI_PDB.map((s) => ({ label: s.tahun, value: s.pdb })), { format: (v) => fmtInt(v), warna: "#2563eb" });
  const tumbuhChart = garis([
    { nama: "Pertumbuhan (%)", warna: "#0b6e4f", titik: D.SERI_PDB.map((s) => [s.tahun, s.tumbuh]) },
    { nama: "Inflasi (%)", warna: "#c2410c", titik: D.SERI_PDB.map((s) => [s.tahun, s.inflasi]) },
  ], { format: (v) => fmt(v, 1), min: -4 });
  const sektorChart = donat(D.SEKTOR.map((s) => ({ label: s.nama, value: s.persen })));
  const eksporChart = batangDatar(D.EKSPOR_UTAMA.map((e) => ({ label: e.nama, value: e.nilai })), { format: (v) => "US$" + fmt(v) + " M", warna: "#7c3aed" });
  const lain = D.PDB_LAIN.map((p) => `<div class="mini"><div class="mini-label">${p.label}</div><div class="mini-value">${p.nilai}</div><div class="mini-sub">${p.sub} · ${p.sumber}</div></div>`).join("");
  return `
  <h2>Ekonomi</h2>
  <p class="intro">PDB 2024 mencapai <b>Rp22.139 triliun</b> dengan pertumbuhan <b>5,03%</b> dan inflasi terendah satu dekade, <b>1,57%</b>.</p>
  <div class="mini-row">${lain}</div>
  <div class="grid2">
    ${kartu("PDB harga berlaku 2019–2024 (Rp triliun)", pdbChart, D.SERI_PDB_SUMBER)}
    ${kartu("Pertumbuhan vs inflasi 2019–2024 (%)", tumbuhChart, D.SERI_PDB_SUMBER)}
  </div>
  <div class="grid2">
    ${kartu("Kontribusi lapangan usaha terhadap PDB (%)", sektorChart, "BPS, Pendapatan Nasional 2021–2025")}
    ${kartu("Komoditas ekspor utama 2024 (US$ miliar)", eksporChart, "BPS / data perdagangan, 2024")}
  </div>
  <section class="card"><h3>Perdagangan luar negeri 2024</h3>
    <div class="mini-row">
      <div class="mini"><div class="mini-label">Ekspor</div><div class="mini-value">US$${fmt(D.DAGANG.ekspor)} M</div><div class="mini-sub">naik ${fmt(D.DAGANG.eksporTumbuh)}%</div></div>
      <div class="mini"><div class="mini-label">Impor</div><div class="mini-value">US$${fmt(D.DAGANG.impor)} M</div><div class="mini-sub">barang & jasa</div></div>
      <div class="mini"><div class="mini-label">Surplus neraca</div><div class="mini-value">US$${fmt(D.DAGANG.surplus)} M</div><div class="mini-sub">tujuan utama: ${D.TUJUAN_EKSPOR.join(", ")}</div></div>
    </div>
    ${srcLine(D.DAGANG.sumber)}</section>`;
}

export function masyarakat() {
  const ipmChart = garis([{ nama: "IPM", warna: "#0b6e4f", titik: D.SERI_IPM }], { format: (v) => fmt(v, 1), min: 68, maks: 78 });
  const tptChart = garis([{ nama: "TPT (%)", warna: "#c2410c", titik: D.SERI_TPT }], { format: (v) => fmt(v, 1), min: 4, maks: 8 });
  const ikutChart = batangDatar(D.PARTISIPASI.map((p) => ({ label: p.kelompok, value: p.persen })), { format: (v) => fmt(v) + "%", warna: "#2563eb", maks: 100 });
  const miskinChart = batang(D.SERI_MISKIN.map((m) => ({ label: m.label, value: m.persen })), { format: (v) => fmt(v) + "%", warna: "#e8a13a", min: 7.5, maks: 10.5 });
  const listKartu = (judul, baris, src) => kartu(judul, `<ul class="facts">${baris.map((b) => `<li><span>${b.label}</span><b>${b.nilai}${b.satuan ? " " + b.satuan : ""}</b>${b.detail ? `<em>${b.detail}</em>` : ""}${b.sumber ? `<small>${b.sumber}</small>` : ""}</li>`).join("")}</ul>`, src);
  return `
  <h2>Masyarakat</h2>
  <p class="intro">IPM naik ke <b>75,02</b> (kategori Tinggi), pengangguran turun ke <b>4,91%</b>, dan kemiskinan menyentuh rekor terendah <b>8,57%</b>.</p>
  <div class="grid2">
    ${kartu("Indeks Pembangunan Manusia 2020–2024", ipmChart, "BPS, 2020–2024")}
    ${kartu("Pengangguran terbuka 2020–2024 (%)", tptChart, "BPS, Sakernas Agustus")}
  </div>
  <div class="grid2">
    ${kartu("Partisipasi sekolah 2024 (%)", ikutChart, "BPS, 2024")}
    ${kartu("Kemiskinan 2022–2024 (% penduduk)", miskinChart, "BPS, 2022–2024")}
  </div>
  <div class="grid2">
    ${listKartu("Kesehatan", D.KESEHATAN)}
    ${listKartu("Pendidikan", D.PENDIDIKAN)}
  </div>
  <div class="grid2">
    ${listKartu("Ketenagakerjaan", D.KERJA)}
    ${listKartu("Kemiskinan rinci", D.MISKIN_RINCI)}
  </div>
  <section class="card"><h3>Komponen IPM 2024</h3>
    <div class="mini-row">${D.KOMPONEN_IPM.map((k) => `<div class="mini"><div class="mini-label">${k.label}</div><div class="mini-value">${k.nilai}</div></div>`).join("")}</div>
    ${srcLine("BPS, 2024")}</section>`;
}

// Tabel daerah dirender terpisah supaya sort/filter bisa menggambar ulang
// hanya bagian tabel. state: {urut: 'pop'|'nama'|'luas'|'padat', arah: 1|-1, gugus}
export function daerahTabel(state) {
  const baris = D.PROVINSI
    .filter((p) => state.gugus === "Semua" || p[2] === state.gugus)
    .map((p) => ({ nama: p[0], ibu: p[1], gugus: p[2], luas: p[3], pop: p[4], padat: p[4] / p[3] }));
  const kunci = { nama: "nama", luas: "luas", pop: "pop", padat: "padat" }[state.urut] || "pop";
  baris.sort((a, b) => (a[kunci] > b[kunci] ? 1 : a[kunci] < b[kunci] ? -1 : 0) * state.arah);
  const panah = (k) => (state.urut === k ? (state.arah === 1 ? " ▲" : " ▼") : "");
  return `
  <table class="prov">
    <thead><tr>
      <th data-urut="nama">Provinsi${panah("nama")}</th><th>Ibu kota</th><th>Gugus pulau</th>
      <th data-urut="luas" class="num">Luas (km2)${panah("luas")}</th>
      <th data-urut="pop" class="num">Penduduk 2024${panah("pop")}</th>
      <th data-urut="padat" class="num">Kepadatan/km2${panah("padat")}</th>
    </tr></thead>
    <tbody>${baris.map((p, i) => `<tr><td>${i + 1}. ${p.nama}</td><td>${p.ibu}</td><td>${p.gugus}</td><td class="num">${fmtInt(p.luas)}</td><td class="num">${fmtInt(p.pop)}</td><td class="num">${fmtInt(Math.round(p.padat))}</td></tr>`).join("")}</tbody>
  </table>
  <p class="src">Menampilkan ${baris.length} dari 38 provinsi. Sumber: ${D.PROVINSI_SUMBER}. Kepadatan dihitung dari populasi dibagi luas.</p>`;
}

export function daerah(state) {
  const gugus = ["Semua", ...new Set(D.PROVINSI.map((p) => p[2]))];
  const totalPop = D.PROVINSI.reduce((a, p) => a + p[4], 0);
  return `
  <h2>Daerah — 38 Provinsi</h2>
  <p class="intro">Total penduduk 38 provinsi: <b>${fmtInt(totalPop)} jiwa</b>. Jawa Barat terbanyak (50,3 jt), Papua Selatan tersedikit (0,54 jt); DKI Jakarta terpadat (16.160/km2). Klik judul kolom untuk mengurutkan, saring per gugus pulau:</p>
  <div class="filters">${gugus.map((g) => `<button class="fbtn${state.gugus === g ? " on" : ""}" data-gugus="${g}">${g}</button>`).join("")}</div>
  <section class="card table-card"><div id="tabel-daerah">${daerahTabel(state)}</div></section>`;
}

export function sumber() {
  return `
  <h2>Sumber</h2>
  <p class="intro">Setiap angka di DataNusa dapat dilacak ke penerbit dan tahunnya di daftar ini.</p>
  ${D.SUMBER_GRUP.map((g) => `
    <section class="card"><h3>${g.judul}</h3>
      <table class="srct"><thead><tr><th>Angka</th><th>Sumber</th><th>Tahun</th></tr></thead>
      <tbody>${g.baris.map((b) => `<tr><td>${b[0]}</td><td>${b[1]}</td><td>${b[2]}</td></tr>`).join("")}</tbody></table>
    </section>`).join("")}`;
}
