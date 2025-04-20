import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";

function cargarDOM() {
  const root = document.getElementById("root");
  
  // Crear el contenedor del header
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <h3>Total X = <span id="x-count">0</span> &nbsp;&nbsp; Total / = <span id="check-count">0</span></h3>
  `;

  // Crear el contenedor de los bloques
  const grid = document.createElement("div");
  grid.id = "grid";
  grid.classList.add("grid");

  root.appendChild(header);
  root.appendChild(grid);

  // Cargar info
  cargarMenu();
  cargarBloques();
}

cargarDOM();
