rotulo1.innerHTML = "Ingrese la base: ";
rotulo2.innerHTML = "Ingrese la altura: ";
let datoBase = document.getElementById("datoBase");
let datoAltura = document.getElementById("datoAltura");
let btnArea = document.getElementById("btnArea");
btnArea.addEventListener("click", () => {
  let area: number = datoBase.value * datoAltura.value ;
  console.log("El area del rectangulo es", area);
});