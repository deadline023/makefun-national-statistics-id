// main.js — router hash dan boot. Tanpa logika data: semua konten dari views.js.

import {
  renderHome,
  renderPopulation,
  renderEconomy,
  renderPeople,
  renderRegions,
  renderSources,
  bindRegionTable,
} from "./views.js";

const ROUTES = {
  "/": { title: "Beranda", render: renderHome },
  "/population": { title: "Penduduk", render: renderPopulation },
  "/economy": { title: "Ekonomi", render: renderEconomy },
  "/people": { title: "Masyarakat", render: renderPeople },
  "/regions": { title: "Daerah", render: renderRegions, after: bindRegionTable },
  "/sources": { title: "Sumber", render: renderSources },
};

function currentPath() {
  const hash = window.location.hash || "#/";
  const path = hash.slice(1) || "/";
  return ROUTES[path] ? path : "/";
}

function render() {
  const path = currentPath();
  const route = ROUTES[path];
  const app = document.getElementById("app");
  app.innerHTML = route.render();
  if (route.after) route.after();
  document.title = route.title + " — DataNusa · Statistik Indonesia";
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === "#" + path) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
