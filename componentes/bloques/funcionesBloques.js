import { dataCheck, dataCruz } from "../../data/data.js";
import { actualizarLocalStorage } from "../../services/local_storage.js";
import { cargarMenu } from "../header/header.js";

export function agregarCruz(elemento) {
  dataCruz.push("x");
  eliminarBloque(elemento);
}

export function agregarCheck(elemento) {
  dataCheck.push("/");
  eliminarBloque(elemento);
}

export function eliminarBloque(elemento) {
  elemento.remove();
  actualizarLocalStorage();
  cargarMenu();
}
