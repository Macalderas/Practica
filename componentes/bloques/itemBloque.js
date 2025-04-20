import { agregarCheck, agregarCruz } from "./funcionesBloques.js";

export function bloque() {
  const div = document.createElement("div");
  div.className = "bloque";

  const xBtn = document.createElement("button");
  xBtn.textContent = "X";
  xBtn.onclick = () => agregarCruz(div);

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "/";
  checkBtn.onclick = () => agregarCheck(div);

  div.appendChild(xBtn);
  div.appendChild(checkBtn);
  return div;
}
