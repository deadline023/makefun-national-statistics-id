// Router hash DataNusa + pengendali tabel daerah (urut & saring).
import { beranda, penduduk, ekonomi, masyarakat, daerah, daerahTabel, sumber } from "./views.js";

const app = document.getElementById("app");
const stateDaerah = { urut: "pop", arah: -1, gugus: "Semua" };

const HALAMAN = {
  "": beranda, beranda,
  penduduk, ekonomi, masyarakat, sumber,
};

function render() {
  const rute = location.hash.replace(/^#\/?/, "").split("?")[0];
  document.querySelectorAll("nav a").forEach((a) => {
    a.classList.toggle("on", a.getAttribute("href") === "#/" + (rute || "beranda") || (rute === "" && a.getAttribute("href") === "#/beranda"));
  });
  if (rute === "daerah") {
    app.innerHTML = daerah(stateDaerah);
    ikatTabel();
  } else {
    app.innerHTML = (HALAMAN[rute] || beranda)();
  }
  window.scrollTo(0, 0);
}

function ikatTabel() {
  app.querySelectorAll("th[data-urut]").forEach((th) => {
    th.addEventListener("click", () => {
      const k = th.getAttribute("data-urut");
      if (stateDaerah.urut === k) stateDaerah.arah *= -1;
      else { stateDaerah.urut = k; stateDaerah.arah = k === "nama" ? 1 : -1; }
      document.getElementById("tabel-daerah").innerHTML = daerahTabel(stateDaerah);
      ikatTabel();
    });
  });
  app.querySelectorAll(".fbtn").forEach((b) => {
    b.addEventListener("click", () => {
      stateDaerah.gugus = b.getAttribute("data-gugus");
      app.innerHTML = daerah(stateDaerah);
      ikatTabel();
    });
  });
}

window.addEventListener("hashchange", render);
render();
