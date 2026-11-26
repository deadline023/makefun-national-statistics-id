// charts.js — pembangun grafik SVG dari data.
// Semua grafik digambar sendiri sebagai SVG: tanpa pustaka, tanpa gambar jadi.

const TEAL = "#0f5257";
const TEAL_LIGHT = "#2a7f7a";
const AMBER = "#e8a13a";
const AMBER_DARK = "#c07f1d";
const INK = "#22302f";
const MUTED = "#6b7a78";
const GRID = "#e3ddd0";
const GREEN = "#3e7d5a";
const RED = "#b0523c";

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function niceMax(max) {
  const pow = Math.pow(10, Math.floor(Math.log10(max)));
  const n = max / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}

function fmtNum(value, decimals) {
  return value.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Grafik batang vertikal.
export function barChart(series, options) {
  const o = options || {};
  const width = o.width || 640;
  const height = o.height || 300;
  const padL = 58;
  const padR = 12;
  const padT = 26;
  const padB = 34;
  const values = series.map((d) => d.value);
  const max = niceMax(Math.max.apply(null, values) * 1.08);
  const min = o.min !== undefined ? o.min : 0;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const slot = innerW / series.length;
  const barW = Math.min(46, slot * 0.62);
  const y = (v) => padT + innerH * (1 - (v - min) / (max - min));
  let parts = [];
  parts.push(
    '<svg viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' +
      esc(o.label || "Grafik batang") + '" class="chart">'
  );
  for (let i = 0; i <= 4; i++) {
    const gv = min + ((max - min) * i) / 4;
    const gy = y(gv);
    parts.push(
      '<line x1="' + padL + '" y1="' + gy.toFixed(1) + '" x2="' + (width - padR) +
        '" y2="' + gy.toFixed(1) + '" stroke="' + GRID + '" stroke-width="1"/>'
    );
    parts.push(
      '<text x="' + (padL - 8) + '" y="' + (gy + 4).toFixed(1) +
        '" text-anchor="end" font-size="11" fill="' + MUTED + '">' +
        esc(fmtNum(gv, o.decimals || 0)) + "</text>"
    );
  }
  series.forEach((d, i) => {
    const x = padL + i * slot + (slot - barW) / 2;
    const top = y(Math.max(d.value, min));
    const color = d.highlight ? AMBER : d.color || TEAL;
    parts.push(
      '<rect x="' + x.toFixed(1) + '" y="' + top.toFixed(1) + '" width="' +
        barW.toFixed(1) + '" height="' + Math.max(1, padT + innerH - top).toFixed(1) +
        '" rx="3" fill="' + color + '"><title>' + esc(d.label) + ": " +
        esc(fmtNum(d.value, o.decimals || 0)) + " " + esc(o.unit || "") + "</title></rect>"
    );
    parts.push(
      '<text x="' + (x + barW / 2).toFixed(1) + '" y="' + (top - 6).toFixed(1) +
        '" text-anchor="middle" font-size="11" font-weight="600" fill="' + INK + '">' +
        esc(fmtNum(d.value, o.decimals || 0)) + "</text>"
    );
    parts.push(
      '<text x="' + (padL + i * slot + slot / 2).toFixed(1) + '" y="' + (height - 12) +
        '" text-anchor="middle" font-size="11" fill="' + MUTED + '">' + esc(d.label) + "</text>"
    );
  });
  parts.push("</svg>");
  return parts.join("");
}

// Grafik garis dengan titik dan label nilai.
export function lineChart(series, options) {
  const o = options || {};
  const width = o.width || 640;
  const height = o.height || 300;
  const padL = 58;
  const padR = 18;
  const padT = 26;
  const padB = 34;
  const values = series.map((d) => d.value);
  let max = Math.max.apply(null, values);
  let min = Math.min.apply(null, values);
  if (o.min !== undefined) min = o.min;
  if (o.max !== undefined) max = o.max;
  const span = max - min || 1;
  max = max + span * 0.12;
  min = min - span * 0.12;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const x = (i) => padL + (innerW * i) / (series.length - 1);
  const y = (v) => padT + innerH * (1 - (v - min) / (max - min));
  const decimals = o.decimals !== undefined ? o.decimals : 1;
  let parts = [];
  parts.push(
    '<svg viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' +
      esc(o.label || "Grafik garis") + '" class="chart">'
  );
  for (let i = 0; i <= 4; i++) {
    const gv = min + ((max - min) * i) / 4;
    const gy = y(gv);
    parts.push(
      '<line x1="' + padL + '" y1="' + gy.toFixed(1) + '" x2="' + (width - padR) +
        '" y2="' + gy.toFixed(1) + '" stroke="' + GRID + '" stroke-width="1"/>'
    );
    parts.push(
      '<text x="' + (padL - 8) + '" y="' + (gy + 4).toFixed(1) +
        '" text-anchor="end" font-size="11" fill="' + MUTED + '">' +
        esc(fmtNum(gv, decimals)) + "</text>"
    );
  }
  const points = series.map((d, i) => x(i).toFixed(1) + "," + y(d.value).toFixed(1)).join(" ");
  parts.push(
    '<polyline points="' + points + '" fill="none" stroke="' + TEAL +
      '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>'
  );
  if (o.second) {
    const s2 = o.second;
    const points2 = s2.map((d, i) => x(i).toFixed(1) + "," + y(d.value).toFixed(1)).join(" ");
    parts.push(
      '<polyline points="' + points2 + '" fill="none" stroke="' + AMBER_DARK +
        '" stroke-width="2.5" stroke-dasharray="6 4" stroke-linejoin="round" stroke-linecap="round"/>'
    );
  }
  series.forEach((d, i) => {
    parts.push(
      '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(d.value).toFixed(1) +
        '" r="4" fill="#fff" stroke="' + TEAL + '" stroke-width="2"><title>' +
        esc(d.label) + ": " + esc(fmtNum(d.value, decimals)) + " " + esc(o.unit || "") + "</title></circle>"
    );
    if (o.showValues) {
      parts.push(
        '<text x="' + x(i).toFixed(1) + '" y="' + (y(d.value) - 10).toFixed(1) +
          '" text-anchor="middle" font-size="11" font-weight="600" fill="' + INK + '">' +
          esc(fmtNum(d.value, decimals)) + "</text>"
      );
    }
    parts.push(
      '<text x="' + x(i).toFixed(1) + '" y="' + (height - 12) +
        '" text-anchor="middle" font-size="11" fill="' + MUTED + '">' + esc(d.label) + "</text>"
    );
  });
  parts.push("</svg>");
  return parts.join("");
}

// Grafik donat dengan legenda.
export function donutChart(slices, options) {
  const o = options || {};
  const size = o.size || 260;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 14;
  const inner = r * 0.62;
  const total = slices.reduce((s, d) => s + d.value, 0);
  const palette = [TEAL, AMBER, TEAL_LIGHT, "#8fb8a8", "#d98e1d", "#5b6e6c"];
  let angle = -Math.PI / 2;
  let parts = [];
  parts.push(
    '<svg viewBox="0 0 ' + size + " " + size + '" role="img" aria-label="' +
      esc(o.label || "Grafik donat") + '" class="chart donut">'
  );
  slices.forEach((d, i) => {
    const frac = d.value / total;
    const a0 = angle;
    const a1 = angle + frac * Math.PI * 2;
    angle = a1;
    const large = frac > 0.5 ? 1 : 0;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const xi1 = cx + inner * Math.cos(a1);
    const yi1 = cy + inner * Math.sin(a1);
    const xi0 = cx + inner * Math.cos(a0);
    const yi0 = cy + inner * Math.sin(a0);
    const color = d.color || palette[i % palette.length];
    parts.push(
      '<path d="M ' + x0.toFixed(1) + " " + y0.toFixed(1) + " A " + r + " " + r +
        " 0 " + large + " 1 " + x1.toFixed(1) + " " + y1.toFixed(1) + " L " +
        xi1.toFixed(1) + " " + yi1.toFixed(1) + " A " + inner + " " + inner +
        " 0 " + large + " 0 " + xi0.toFixed(1) + " " + yi0.toFixed(1) +
        ' Z" fill="' + color + '"><title>' + esc(d.label) + ": " +
        esc(fmtNum(d.value, 2)) + "%</title></path>"
    );
  });
  parts.push(
    '<text x="' + cx + '" y="' + (cy - 4) + '" text-anchor="middle" font-size="26" font-weight="700" fill="' + INK + '">' +
      esc(o.center || "") + "</text>"
  );
  parts.push(
    '<text x="' + cx + '" y="' + (cy + 18) + '" text-anchor="middle" font-size="12" fill="' + MUTED + '">' +
      esc(o.centerSub || "") + "</text>"
  );
  parts.push("</svg>");
  let legend = '<ul class="legend">';
  slices.forEach((d, i) => {
    const color = d.color || palette[i % palette.length];
    legend +=
      '<li><span class="swatch" style="background:' + color + '"></span>' +
      esc(d.label) + " — <strong>" + esc(fmtNum(d.value, 2)) + "%</strong></li>";
  });
  legend += "</ul>";
  return '<div class="donut-wrap">' + parts.join("") + legend + "</div>";
}

// Grafik batang horizontal (untuk peringkat / perbandingan).
export function hbarChart(rows, options) {
  const o = options || {};
  const width = o.width || 640;
  const rowH = o.rowHeight || 34;
  const padL = o.labelWidth || 190;
  const padR = 70;
  const height = rows.length * rowH + 16;
  const max = Math.max.apply(null, rows.map((d) => d.value)) * 1.05;
  const decimals = o.decimals !== undefined ? o.decimals : 1;
  let parts = [];
  parts.push(
    '<svg viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' +
      esc(o.label || "Grafik batang horizontal") + '" class="chart">'
  );
  rows.forEach((d, i) => {
    const y = 8 + i * rowH;
    const barLen = ((width - padL - padR) * d.value) / max;
    const color = d.highlight ? AMBER : d.color || TEAL;
    parts.push(
      '<text x="' + (padL - 10) + '" y="' + (y + 15) +
        '" text-anchor="end" font-size="12" fill="' + INK + '">' + esc(d.label) + "</text>"
    );
    parts.push(
      '<rect x="' + padL + '" y="' + (y + 4) + '" width="' + Math.max(2, barLen).toFixed(1) +
        '" height="16" rx="3" fill="' + color + '"><title>' + esc(d.label) + ": " +
        esc(fmtNum(d.value, decimals)) + " " + esc(o.unit || "") + "</title></rect>"
    );
    parts.push(
      '<text x="' + (padL + barLen + 8).toFixed(1) + '" y="' + (y + 17) +
        '" font-size="12" font-weight="600" fill="' + INK + '">' +
        esc(fmtNum(d.value, decimals)) + "</text>"
    );
  });
  parts.push("</svg>");
  return parts.join("");
}

export const CHART_COLORS = { teal: TEAL, amber: AMBER, green: GREEN, red: RED };
