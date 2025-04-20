import { dataCruz, dataCheck } from "../../data/data.js";

export function cargarMenu() {
  document.getElementById("x-count").textContent = dataCruz.length;
  document.getElementById("check-count").textContent = dataCheck.length;
}
