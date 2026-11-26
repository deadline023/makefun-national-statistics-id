// views.js — fungsi render tiap halaman dari data.
// Setiap halaman mengembalikan HTML; router di main.js yang menampilkannya.

import {
  META,
  KPI,
  POPULATION_SERIES,
  POPULATION_SERIES_SOURCE,
  AGE_GROUPS,
  AGE_SOURCE,
  DEPENDENCY_RATIO,
  MEDIAN_AGE,
  GDP_SERIES,
  GDP_SERIES_SOURCE,
  GDP_EXTRA,
  SECTORS,
  SECTORS_SOURCE,
  EXPENDITURE,
  EXPENDITURE_SOURCE,
  TRADE,
  TOP_EXPORTS,
  TOP_EXPORTS_SOURCE,
  TOP_DESTINATIONS,
  TOP_DESTINATIONS_SOURCE,
  HDI_SERIES,
  HDI_COMPONENTS,
  HEALTH,
  EDUCATION,
  SCHOOL_PARTICIPATION,
  SCHOOL_PARTICIPATION_SOURCE,
  LABOUR,
  UNEMPLOYMENT_SERIES,
  UNEMPLOYMENT_SERIES_SOURCE,
  POVERTY_SERIES,
  POVERTY_DETAIL,
  PROVINCES,
  PROVINCES_SOURCE,
  SOURCE_GROUPS,
} from "./data.js";
import { barChart, lineChart, donutChart, hbarChart } from "./charts.js";

function idNum(value, decimals) {
  return Number(value).toLocaleString("id-ID", {
    minimumFractionDigits: decimals || 0,
    maximumFractionDigits: decimals || 0,
  });
}

function srcTag(source, year) {
  return (
    '<p class="src">Sumber: ' + source + " · " + year + "</p>"
  );
}

function kpiCard(k) {
  return (
    '<article class="kpi"><p class="kpi-label">' + k.label + "</p>" +
    '<p class="kpi-value">' + k.display + "</p>" +
    '<p class="kpi-unit">' + k.unit + "</p>" +
    '<p class="kpi-note">' + k.note + "</p>" +
    '<p class="src">Sumber: ' + k.source + " · " + k.year + "</p></article>"
  );
}

function statRow(item) {
  return (
    '<div class="stat-row"><div><p class="stat-label">' + item.label + "</p>" +
    (item.detail ? '<p class="stat-detail">' + item.detail + "</p>" : "") +
    "</div>" +
    '<p class="stat-value">' + item.value + "</p></div>" +
    '<p class="src">Sumber: ' + item.source + " · " + item.year + "</p>"
  );
}

function sectionHead(title, intro) {
  return "<h2>" + title + "</h2>" + (intro ? '<p class="intro">' + intro + "</p>" : "");
}

// ---- Beranda ----
export function renderHome() {
  const popLine = lineChart(
    POPULATION_SERIES.map((d) => ({ label: String(d.year), value: d.value })),
    { label: "Jumlah penduduk Indonesia 2015–2024", unit: "juta jiwa", showValues: false, decimals: 0 }
  );
  const gdpBars = barChart(
    GDP_SERIES.map((d) => ({
      label: String(d.year).slice(2),
      value: d.nominal,
      highlight: d.year === 2024,
    })),
    { label: "PDB Indonesia 2019–2024", unit: "Rp triliun", decimals: 0 }
  );
  const topProvinces = PROVINCES.slice()
    .sort((a, b) => b.pop - a.pop)
    .slice(0, 5)
    .map((p) => ({ label: p.name, value: p.pop / 1000000, highlight: p.name === "Jawa Barat" }));
  const provBars = hbarChart(topProvinces, {
    label: "Lima provinsi terpadat 2024",
    unit: "juta jiwa",
    decimals: 1,
  });
  let html = "";
  html += '<section class="hero">';
  html += "<p class=\"eyebrow\">" + META.country + " · Data resmi · Tahun acuan " + META.baseYear + "</p>";
  html += "<h1>Indonesia dalam angka</h1>";
  html +=
    '<p class="lede">Satu tempat untuk angka resmi Indonesia: penduduk, ekonomi, kesehatan, pendidikan, ketenagakerjaan, dan 38 provinsi. Setiap angka disertai sumber dan tahunnya.</p>';
  html +=
    '<p class="hero-facts"><span>Luas wilayah <strong>' + idNum(META.areaKm2) +
    " km²</strong></span><span>38 provinsi</span><span>Kepadatan <strong>±148 jiwa/km²</strong></span></p>";
  html += srcTag(META.areaSource, META.areaYear);
  html += "</section>";
  html += '<section class="kpi-grid" aria-label="Indikator utama">';
  html += KPI.map(kpiCard).join("");
  html += "</section>";
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>Penduduk terus tumbuh</h2>' + popLine + "<p>Jumlah penduduk naik dari 255,5 juta (2015) menjadi 281,6 juta (2024) — bertambah sekitar 2,9 juta jiwa per tahun.</p>" + srcTag(POPULATION_SERIES_SOURCE.source, POPULATION_SERIES_SOURCE.year) + "</article>";
  html += '<article class="card"><h2>PDB menembus Rp22 ribu triliun</h2>' + gdpBars + "<p>PDB atas dasar harga berlaku 2024 mencapai Rp22.139 triliun; PDB per kapita Rp78,6 juta (US$4.960).</p>" + srcTag(GDP_SERIES_SOURCE.source, GDP_SERIES_SOURCE.year) + "</article>";
  html += "</section>";
  html += '<section class="card wide">';
  html += "<h2>Lima provinsi terpadat</h2>" + provBars;
  html += "<p>Jawa Barat, Jawa Timur, dan Jawa Tengah menampung 128 juta jiwa — 45% penduduk Indonesia. Pulau Jawa dihuni 56% penduduk di atas 7% luas daratan.</p>";
  html += '<p><a class="btn" href="#/regions">Lihat tabel 38 provinsi →</a></p>';
  html += srcTag(PROVINCES_SOURCE.pop.source, PROVINCES_SOURCE.pop.year);
  html += "</section>";
  html += '<section class="card wide">';
  html += "<h2>Cara membaca situs ini</h2>";
  html += "<p>Semua angka berasal dari publikasi resmi — Badan Pusat Statistik (BPS) sebagai sumber utama, dilengkapi Bank Dunia, IMF, dan Dukcapil Kemendagri. Tahun setiap angka tertulis di sampingnya; daftar lengkap ada di halaman <a href=\"#/sources\">Sumber</a>. Angka 2024 dipakai sebagai tahun acuan karena itu rilisan tahunan penuh terakhir saat situs ini disusun.</p>";
  html += "</section>";
  return html;
}

// ---- Penduduk ----
export function renderPopulation() {
  const popLine = lineChart(
    POPULATION_SERIES.map((d) => ({ label: String(d.year), value: d.value })),
    { label: "Jumlah penduduk Indonesia 2015–2024", unit: "juta jiwa", showValues: true, decimals: 0 }
  );
  const ageDonut = donutChart(
    AGE_GROUPS.map((g) => ({ label: g.group, value: g.share })),
    { label: "Struktur umur penduduk 2024", center: "69,58%", centerSub: "usia produktif" }
  );
  const topProvinces = PROVINCES.slice()
    .sort((a, b) => b.pop - a.pop)
    .slice(0, 8)
    .map((p) => ({ label: p.name, value: p.pop / 1000000 }));
  const provBars = hbarChart(topProvinces, {
    label: "Delapan provinsi terpadat 2024",
    unit: "juta jiwa",
    decimals: 1,
  });
  let html = "";
  html += sectionHead(
    "Penduduk",
    "Indonesia adalah negara berpenduduk terbesar keempat di dunia. Pertumbuhannya melambat — dari 1,43% per tahun (2010) menjadi sekitar 1,0% per tahun — tetapi jumlahnya masih bertambah hampir 3 juta jiwa setiap tahun."
  );
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>Tren penduduk 2015–2024</h2>' + popLine + srcTag(POPULATION_SERIES_SOURCE.source, POPULATION_SERIES_SOURCE.year) + "</article>";
  html += '<article class="card"><h2>Struktur umur 2024</h2>' + ageDonut +
    "<p><strong>Bonus demografi:</strong> 69,58% penduduk berada pada usia produktif (15–64 tahun). " +
    DEPENDENCY_RATIO.note + ".</p>" +
    "<p>Usia median penduduk " + MEDIAN_AGE.value + " tahun.</p>" +
    srcTag(AGE_SOURCE.source, AGE_SOURCE.year) + srcTag(MEDIAN_AGE.source, MEDIAN_AGE.year) + "</article>";
  html += "</section>";
  html += '<section class="card wide"><h2>Kelompok umur, 2024</h2><div class="table-wrap"><table><thead><tr><th>Kelompok umur</th><th>Pangsa</th><th>Jumlah</th><th>Keterangan</th></tr></thead><tbody>';
  AGE_GROUPS.forEach((g) => {
    html += "<tr><td>" + g.group + "</td><td>" + idNum(g.share, 2) + "%</td><td>" + idNum(g.millions, 2) + " jt jiwa</td><td>" + g.note + "</td></tr>";
  });
  html += "</tbody></table></div>" + srcTag(AGE_SOURCE.source, AGE_SOURCE.year) + "</section>";
  html += '<section class="card wide"><h2>Provinsi terpadat, 2024</h2>' + provBars +
    "<p>Tiga provinsi di Jawa — Jawa Barat (50,35 jt), Jawa Timur (41,81 jt), Jawa Tengah (37,89 jt) — lebih padat dari seluruh Sumatra digabung. Provinsi di luar Jawa dengan penduduk terbanyak adalah Sumatera Utara (15,59 jt).</p>" +
    '<p><a class="btn" href="#/regions">Tabel lengkap 38 provinsi →</a></p>' +
    srcTag(PROVINCES_SOURCE.pop.source, PROVINCES_SOURCE.pop.year) + "</section>";
  return html;
}

// ---- Ekonomi ----
export function renderEconomy() {
  const gdpBars = barChart(
    GDP_SERIES.map((d) => ({
      label: String(d.year).slice(2),
      value: d.nominal,
      highlight: d.year === 2024,
    })),
    { label: "PDB Indonesia 2019–2024", unit: "Rp triliun", decimals: 0 }
  );
  const growthLine = lineChart(
    GDP_SERIES.map((d) => ({ label: String(d.year).slice(2), value: d.growth })),
    {
      label: "Pertumbuhan ekonomi dan inflasi 2019–2024",
      unit: "%",
      showValues: true,
      decimals: 2,
      min: -3,
      second: GDP_SERIES.map((d) => ({ label: String(d.year).slice(2), value: d.inflation })),
    }
  );
  const sectorDonut = donutChart(
    SECTORS.map((s) => ({ label: s.name, value: s.share })),
    { label: "Kontribusi lapangan usaha terhadap PDB 2025", center: "19,07%", centerSub: "industri pengolahan" }
  );
  let html = "";
  html += sectionHead(
    "Ekonomi",
    "Indonesia adalah ekonomi terbesar di Asia Tenggara: PDB US$1,40 triliun (2024) dan tumbuh di atas 5% selama tiga tahun berturut-turut. Konsumsi rumah tangga adalah mesin utamanya."
  );
  html += '<section class="stat-grid">';
  GDP_EXTRA.forEach((g) => {
    html += '<article class="stat-card"><p class="stat-label">' + g.label + '</p><p class="stat-value big">' + g.value + '</p><p class="stat-detail">' + g.sub + "</p>" + srcTag(g.source, g.year) + "</article>";
  });
  html += "</section>";
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>PDB 2019–2024 (Rp triliun)</h2>' + gdpBars + "<p>Kontraksi 2020 (−2,07%) akibat pandemi, lalu pulih: Rp15.443 triliun (2020) menjadi Rp22.139 triliun (2024).</p>" + srcTag(GDP_SERIES_SOURCE.source, GDP_SERIES_SOURCE.year) + "</article>";
  html += '<article class="card"><h2>Pertumbuhan vs inflasi (%)</h2>' + growthLine + "<p><span class=\"key-teal\">— Pertumbuhan ekonomi</span> &nbsp; <span class=\"key-amber\">- - Inflasi</span></p><p>Inflasi melonjak ke 5,51% pada 2022, lalu kembali ke 1,57% pada 2024 — terendah dalam satu dekade.</p>" + srcTag(GDP_SERIES_SOURCE.source, GDP_SERIES_SOURCE.year) + "</article>";
  html += "</section>";
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>Sektor penyumbang PDB, 2025</h2>' + sectorDonut + "<p>Industri pengolahan tetap penyumbang terbesar (19,07%), diikuti perdagangan (13,17%) dan pertanian (13,10%). Lima sektor teratas menyumbang 63,92% PDB.</p>" + srcTag(SECTORS_SOURCE.source, SECTORS_SOURCE.year) + "</article>";
  html += '<article class="card"><h2>Dari sisi pengeluaran, 2024</h2><div class="table-wrap"><table><thead><tr><th>Komponen</th><th>Pangsa PDB</th></tr></thead><tbody>';
  EXPENDITURE.forEach((e) => {
    html += "<tr><td>" + e.name + "</td><td>" + idNum(e.share, 1) + "%</td></tr>";
  });
  html += "</tbody></table></div><p>Konsumsi rumah tangga 55,4% dari PDB — lebih dari separuh ekonomi digerakkan belanja masyarakat.</p>" + srcTag(EXPENDITURE_SOURCE.source, EXPENDITURE_SOURCE.year) + "</article>";
  html += "</section>";
  html += '<section class="card wide"><h2>Perdagangan luar negeri, 2024</h2>';
  html += '<div class="stat-grid"><article class="stat-card"><p class="stat-label">Ekspor</p><p class="stat-value big">US$' + idNum(TRADE.exports, 2) + ' M</p><p class="stat-detail">Naik ' + idNum(TRADE.exportGrowth, 2) + "% dari 2023</p></article>";
  html += '<article class="stat-card"><p class="stat-label">Impor</p><p class="stat-value big">US$' + idNum(TRADE.imports, 2) + ' M</p></article>';
  html += '<article class="stat-card"><p class="stat-label">Surplus neraca dagang</p><p class="stat-value big">US$' + idNum(TRADE.surplus, 2) + ' M</p><p class="stat-detail">Surplus tahun keempat berturut-turut sejak 2021</p></article></div>';
  html += srcTag(TRADE.source, TRADE.year);
  html += "<h3>Komoditas ekspor utama</h3><div class=\"table-wrap\"><table><thead><tr><th>Komoditas</th><th>Nilai (US$ miliar)</th><th>Pangsa ekspor</th></tr></thead><tbody>";
  TOP_EXPORTS.forEach((t) => {
    html += "<tr><td>" + t.name + "</td><td>US$" + idNum(t.value, 2) + "</td><td>" + idNum(t.share, 2) + "%</td></tr>";
  });
  html += "</tbody></table></div>" + srcTag(TOP_EXPORTS_SOURCE.source, TOP_EXPORTS_SOURCE.year);
  html += "<p><strong>Tujuan ekspor utama:</strong> " + TOP_DESTINATIONS.map((d) => d.name).join(", ") + ". " + TOP_DESTINATIONS[0].note + ".</p>" + srcTag(TOP_DESTINATIONS_SOURCE.source, TOP_DESTINATIONS_SOURCE.year);
  html += "</section>";
  return html;
}

// ---- Masyarakat ----
export function renderPeople() {
  const hdiLine = lineChart(
    HDI_SERIES.map((d) => ({ label: String(d.year), value: d.value })),
    { label: "IPM Indonesia 2020–2024", unit: "", showValues: true, decimals: 2, min: 70 }
  );
  const unempLine = lineChart(
    UNEMPLOYMENT_SERIES.map((d) => ({ label: String(d.year), value: d.value })),
    { label: "Tingkat pengangguran terbuka 2020–2024", unit: "%", showValues: true, decimals: 2, min: 4 }
  );
  const povertyBars = barChart(
    POVERTY_SERIES.map((d) => ({ label: d.label, value: d.value, highlight: d.label === "Sep 2024" })),
    { label: "Tingkat kemiskinan 2022–2024", unit: "%", decimals: 2 }
  );
  const apsBars = hbarChart(
    SCHOOL_PARTICIPATION.map((s) => ({ label: s.group, value: s.value })),
    { label: "Angka partisipasi sekolah 2024", unit: "%", decimals: 2 }
  );
  let html = "";
  html += sectionHead(
    "Masyarakat",
    "Kesehatan membaik, sekolah makin lama, pengangguran menurun. IPM naik lima tahun berturut-turut dan kini berkategori Tinggi — tetapi rata-rata lama sekolah baru setara SMP, dan partisipasi sekolah jatuh tajam setelah usia SMA."
  );
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>Kesehatan</h2>';
  html += '<p class="big-num">74,15 <span>tahun</span></p><p>Harapan hidup saat lahir, 2024 (BPS) — naik 0,22 tahun dari 2023.</p>';
  HEALTH.forEach((h) => {
    html += statRow({ label: h.label, value: h.value, detail: h.unit, source: h.source, year: h.year });
  });
  html += "</article>";
  html += '<article class="card"><h2>IPM 2020–2024</h2>' + hdiLine + "<p>IPM naik dari 71,94 (2020) menjadi 75,02 (2024).</p>";
  HDI_COMPONENTS.forEach((c) => {
    html += statRow({ label: c.label, value: c.value, source: c.source, year: c.year });
  });
  html += "</article>";
  html += "</section>";
  html += '<section class="grid-2">';
  html += '<article class="card"><h2>Pendidikan</h2>';
  EDUCATION.forEach((e) => {
    html += statRow({ label: e.label, value: e.value, detail: e.detail, source: e.source, year: e.year });
  });
  html += "<h3>Partisipasi sekolah menurut umur, 2024</h3>" + apsBars + "<p>Hampir semua anak usia SD bersekolah (99,19%), tetapi hanya 74,64% remaja 16–18 tahun dan 29,01% pemuda 19–23 tahun yang masih bersekolah.</p>" + srcTag(SCHOOL_PARTICIPATION_SOURCE.source, SCHOOL_PARTICIPATION_SOURCE.year) + "</article>";
  html += '<article class="card"><h2>Ketenagakerjaan</h2>';
  LABOUR.forEach((l) => {
    html += statRow({ label: l.label, value: l.value, detail: l.detail, source: l.source, year: l.year });
  });
  html += "<h3>Pengangguran terbuka, 2020–2024</h3>" + unempLine + "<p>TPT turun dari 7,07% (2020, puncak pandemi) menjadi 4,91% (Agustus 2024). Tantangan berikutnya adalah kualitas pekerjaan: 57,95% pekerja masih berada di sektor informal.</p>" + srcTag(UNEMPLOYMENT_SERIES_SOURCE.source, UNEMPLOYMENT_SERIES_SOURCE.year) + "</article>";
  html += "</section>";
  html += '<section class="card wide"><h2>Kemiskinan terus menurun</h2>' + povertyBars +
    "<p>Persentase penduduk miskin September 2024 (8,57%) adalah yang terendah sejak data kemiskinan pertama kali dirilis BPS pada 1960.</p>";
  POVERTY_DETAIL.forEach((p) => {
    html += statRow({ label: p.label, value: p.value, detail: p.detail || "", source: p.source, year: p.year });
  });
  html += "</section>";
  return html;
}

// ---- Daerah ----
let regionSort = { key: "pop", dir: -1 };
let regionQuery = "";

export function renderRegions() {
  let html = "";
  html += sectionHead(
    "Daerah: 38 provinsi",
    "Klik judul kolom untuk mengurutkan, atau ketik di kotak pencarian untuk menyaring provinsi. Kepadatan dihitung dari populasi dibagi luas wilayah."
  );
  html += '<section class="card wide">';
  html += '<div class="region-tools"><label for="region-search">Cari provinsi atau ibu kota</label>' +
    '<input id="region-search" type="search" placeholder="Misal: Jawa, Papua, Medan…" value="' + regionQuery.replace(/"/g, "&quot;") + '">' +
    '<p id="region-count" class="region-count"></p></div>';
  html += '<div class="table-wrap"><table id="region-table"><thead><tr>' +
    '<th><button type="button" data-sort="name">Provinsi</button></th>' +
    '<th><button type="button" data-sort="capital">Ibu kota</button></th>' +
    '<th><button type="button" data-sort="island">Kepulauan</button></th>' +
    '<th class="num"><button type="button" data-sort="pop">Penduduk</button></th>' +
    '<th class="num"><button type="button" data-sort="area">Luas (km²)</button></th>' +
    '<th class="num"><button type="button" data-sort="density">Kepadatan (jiwa/km²)</button></th>' +
    "</tr></thead><tbody></tbody></table></div>";
  html += "<p>Provinsi terpadat: Jawa Barat (50,35 jt jiwa). Provinsi terluas: Kalimantan Tengah (153.444 km²). Provinsi terpadat per km²: DKI Jakarta (±16.165 jiwa/km²). Provinsi paling jarang: Papua Selatan (±5 jiwa/km²).</p>";
  html += srcTag(PROVINCES_SOURCE.pop.source + " (populasi) · " + PROVINCES_SOURCE.area.source + " (luas)", PROVINCES_SOURCE.pop.year);
  html += "</section>";
  return html;
}

function regionRows() {
  const q = regionQuery.trim().toLowerCase();
  let rows = PROVINCES.map((p) => ({
    name: p.name,
    capital: p.capital,
    island: p.island,
    pop: p.pop,
    area: p.area,
    density: p.pop / p.area,
  }));
  if (q) {
    rows = rows.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.capital.toLowerCase().includes(q) ||
        r.island.toLowerCase().includes(q)
    );
  }
  const key = regionSort.key;
  const dir = regionSort.dir;
  rows.sort((a, b) => {
    const av = a[key];
    const bv = b[key];
    if (typeof av === "string") return dir * av.localeCompare(bv, "id");
    return dir * (av - bv);
  });
  return rows;
}

export function paintRegionTable() {
  const tbody = document.querySelector("#region-table tbody");
  const count = document.querySelector("#region-count");
  const search = document.querySelector("#region-search");
  if (!tbody) return;
  const rows = regionRows();
  tbody.innerHTML = rows
    .map(
      (r) =>
        "<tr><td>" + r.name + "</td><td>" + r.capital + "</td><td>" + r.island +
        '</td><td class="num">' + idNum(r.pop) + '</td><td class="num">' + idNum(r.area) +
        '</td><td class="num">' + idNum(Math.round(r.density)) + "</td></tr>"
    )
    .join("");
  if (count) {
    count.textContent =
      "Menampilkan " + rows.length + " dari 38 provinsi" +
      (regionQuery.trim() ? ' untuk "' + regionQuery.trim() + '"' : "") +
      " · diurutkan menurut " + regionSort.key + (regionSort.dir === -1 ? " (menurun)" : " (menaik)");
  }
  document.querySelectorAll("#region-table th button").forEach((btn) => {
    const active = btn.getAttribute("data-sort") === regionSort.key;
    btn.textContent =
      btn.textContent.replace(/ [▲▼]$/, "") + (active ? (regionSort.dir === -1 ? " ▼" : " ▲") : "");
    btn.setAttribute("aria-sort", active ? (regionSort.dir === -1 ? "descending" : "ascending") : "none");
  });
  if (search && document.activeElement !== search) search.value = regionQuery;
}

export function bindRegionTable() {
  const search = document.querySelector("#region-search");
  if (search) {
    search.addEventListener("input", (e) => {
      regionQuery = e.target.value;
      paintRegionTable();
      const again = document.querySelector("#region-search");
      if (again) {
        again.focus();
        again.setSelectionRange(again.value.length, again.value.length);
      }
    });
  }
  document.querySelectorAll("#region-table th button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-sort");
      if (regionSort.key === key) {
        regionSort.dir = -regionSort.dir;
      } else {
        regionSort.key = key;
        regionSort.dir = key === "name" || key === "capital" || key === "island" ? 1 : -1;
      }
      paintRegionTable();
    });
  });
  paintRegionTable();
}

// ---- Sumber ----
export function renderSources() {
  let html = "";
  html += sectionHead(
    "Sumber",
    "Setiap angka di situs ini dan sumbernya. Angka tahun 2024 dipakai sebagai tahun acuan karena itu rilisan tahunan penuh terakhir saat situs ini disusun (November 2026)."
  );
  SOURCE_GROUPS.forEach((g) => {
    html += '<section class="card wide"><h2>' + g.title + "</h2><div class=\"table-wrap\"><table><thead><tr><th>Angka</th><th>Sumber</th><th>Tahun</th></tr></thead><tbody>";
    g.items.forEach((it) => {
      html += "<tr><td>" + it.figure + "</td><td>" + it.source + "</td><td>" + it.year + "</td></tr>";
    });
    html += "</tbody></table></div></section>";
  });
  html += '<section class="card wide"><h2>Tentang DataNusa</h2><p>DataNusa adalah situs ringkas yang mengumpulkan angka resmi Indonesia dalam satu tempat agar mudah dicari dan dibandingkan. Situs ini bukan situs resmi pemerintah dan tidak berafiliasi dengan BPS atau lembaga mana pun; seluruh angka dikutip dari publikasi resmi yang tercantum di atas. Apabila sebuah angka resmi diperbarui, halaman ini mengikuti rilisan terbarunya.</p></section>';
  return html;
}
