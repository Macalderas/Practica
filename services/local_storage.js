import { dataCheck, dataCruz } from "../data/data.js";

export function actualizarLocalStorage() {
  localStorage.setItem("dataCruz", JSON.stringify(dataCruz));
  localStorage.setItem("dataCheck", JSON.stringify(dataCheck));
}
