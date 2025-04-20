import { bloque } from './itemBloque.js';

export function cargarBloques() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      grid.appendChild(bloque());
    }
  }
  