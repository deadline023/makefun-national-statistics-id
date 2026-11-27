// Penggambar grafik SVG buatan sendiri: batang, garis, batang mendatar,
// dan donat. Semua grafik membawa label sumbu, nilai di titik data, dan
// gridline — tidak ada grafik kosong tanpa angka.

export function fmt(n, dec = 2) {
  return n.toLocaleString("id-ID", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
export function fmtInt(n) {
  return n.toLocaleString("id-ID", { maximumFractionDigits: 0 });
}

const WARNA = ["#0b6e4f", "#e8a13a", "#2563eb", "#c2410c", "#7c3aed", "#64748b"];

// Batang vertikal. data: [{label, value}], opts: {tinggi, warna, format, sumbuY}
export function batang(data, opts = {}) {
  const w = 560, h = opts.tinggi || 250, padL = 46, padB = 26, padT = 22;
  const max = opts.maks || Math.max(...data.map((d) => d.value)) * 1.12;
  const min = opts.min || 0;
  const iw = w - padL - 8, ih = h - padB - padT;
  const langkah = iw / data.length;
  const y = (v) => padT + ih - ((v - min) / (max - min)) * ih;
  let g = "";
  for (let i = 0; i <= 4; i++) {
    const gv = min + ((max - min) * i) / 4, gy = y(gv);
    g += `<line x1="${padL}" y1="${gy}" x2="${w - 8}" y2="${gy}" class="grid"/><text x="${padL - 5}" y="${gy + 4}" class="ylab" text-anchor="end">${opts.format ? opts.format(gv) : fmt(gv, 0)}</text>`;
  }
  data.forEach((d, i) => {
    const bw = Math.min(52, langkah * 0.58), x = padL + langkah * i + (langkah - bw) / 2;
    g += `<rect x="${x}" y="${y(d.value)}" width="${bw}" height="${y(min) - y(d.value)}" rx="3" fill="${opts.warna || WARNA[0]}"/>`;
    g += `<text x="${x + bw / 2}" y="${y(d.value) - 5}" class="vlab" text-anchor="middle">${opts.format ? opts.format(d.value) : fmt(d.value)}</text>`;
    g += `<text x="${x + bw / 2}" y="${h - 8}" class="xlab" text-anchor="middle">${d.label}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}" class="chart" role="img">${g}</svg>`;
}

// Garis multi-seri. seri: [{nama, warna, titik: [[x, y], ...]}], opts: {format, min, maks}
export function garis(seri, opts = {}) {
  const w = 560, h = opts.tinggi || 250, padL = 46, padB = 26, padT = 16;
  const semua = seri.flatMap((s) => s.titik.map((t) => t[1]));
  const xs = seri[0].titik.map((t) => t[0]);
  let max = opts.maks !== undefined ? opts.maks : Math.max(...semua);
  let min = opts.min !== undefined ? opts.min : Math.min(...semua);
  const rentang = (max - min) || 1; max += rentang * 0.18; min -= rentang * 0.18;
  const iw = w - padL - 12, ih = h - padB - padT;
  const X = (i) => padL + (iw * i) / (xs.length - 1);
  const Y = (v) => padT + ih - ((v - min) / (max - min)) * ih;
  let g = "";
  for (let i = 0; i <= 4; i++) {
    const gv = min + ((max - min) * i) / 4, gy = Y(gv);
    g += `<line x1="${padL}" y1="${gy}" x2="${w - 12}" y2="${gy}" class="grid"/><text x="${padL - 5}" y="${gy + 4}" class="ylab" text-anchor="end">${opts.format ? opts.format(gv) : fmt(gv, 1)}</text>`;
  }
  xs.forEach((x, i) => { g += `<text x="${X(i)}" y="${h - 8}" class="xlab" text-anchor="middle">${x}</text>`; });
  seri.forEach((s, si) => {
    const jalur = s.titik.map((t, i) => `${i === 0 ? "M" : "L"}${X(i)},${Y(t[1])}`).join(" ");
    g += `<path d="${jalur}" fill="none" stroke="${s.warna || WARNA[si]}" stroke-width="2.5"/>`;
    s.titik.forEach((t, i) => {
      g += `<circle cx="${X(i)}" cy="${Y(t[1])}" r="3.4" fill="${s.warna || WARNA[si]}"/>`;
      g += `<text x="${X(i)}" y="${Y(t[1]) - 8}" class="vlab" text-anchor="middle">${opts.format ? opts.format(t[1]) : fmt(t[1])}</text>`;
    });
  });
  const legenda = seri.map((s, si) => `<span class="leg"><i style="background:${s.warna || WARNA[si]}"></i>${s.nama}</span>`).join("");
  return `<div class="legend">${legenda}</div><svg viewBox="0 0 ${w} ${h}" class="chart" role="img">${g}</svg>`;
}

// Batang mendatar. data: [{label, value}], opts: {format, warna, maks}
export function batangDatar(data, opts = {}) {
  const w = 560, barisH = 27, h = data.length * barisH + 8, padL = 178;
  const max = opts.maks || Math.max(...data.map((d) => d.value)) * 1.08;
  let g = "";
  data.forEach((d, i) => {
    const y = 6 + i * barisH, bw = ((w - padL - 56) * Math.max(d.value, 0)) / max;
    g += `<text x="${padL - 8}" y="${y + 14}" class="xlab" text-anchor="end">${d.label}</text>`;
    g += `<rect x="${padL}" y="${y}" width="${bw}" height="17" rx="3" fill="${opts.warna || WARNA[0]}"/>`;
    g += `<text x="${padL + bw + 6}" y="${y + 13}" class="vlab">${opts.format ? opts.format(d.value) : fmt(d.value)}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}" class="chart" role="img">${g}</svg>`;
}

// Donat. data: [{label, value}] — legenda di kanan berisi persen.
export function donat(data) {
  const total = data.reduce((a, d) => a + d.value, 0);
  const cx = 105, cy = 105, r = 82, ir = 50;
  let sudut = -Math.PI / 2, g = "";
  const arc = (a0, a1, rr) => {
    const x0 = cx + rr * Math.cos(a0), y0 = cy + rr * Math.sin(a0);
    const x1 = cx + rr * Math.cos(a1), y1 = cy + rr * Math.sin(a1);
    return [x0, y0, x1, y1, a1 - a0 > Math.PI ? 1 : 0];
  };
  data.forEach((d, i) => {
    const a1 = sudut + (d.value / total) * Math.PI * 2;
    const [x0, y0, x1, y1, besar] = arc(sudut, a1, r);
    const [u0, v0, u1, v1] = arc(sudut, a1, ir);
    g += `<path d="M${x0},${y0} A${r},${r} 0 ${besar} 1 ${x1},${y1} L${u1},${v1} A${ir},${ir} 0 ${besar} 0 ${u0},${v0} Z" fill="${WARNA[i % WARNA.length]}"/>`;
    sudut = a1;
  });
  const legenda = data.map((d, i) => `<div class="dleg"><i style="background:${WARNA[i % WARNA.length]}"></i><span>${d.label}</span><b>${fmt((d.value / total) * 100, 1)}%</b></div>`).join("");
  return `<div class="donut-wrap"><svg viewBox="0 0 210 210" class="chart donut" role="img">${g}</svg><div class="dlegs">${legenda}</div></div>`;
}
