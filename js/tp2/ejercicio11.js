// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let edad1 = parseInt(prompt("ingrese la primer edad"));
let nombre1 = prompt("primer nombre?");
let edad2 = parseInt(prompt("ingrese la segunda edad"));
let nombre2 = prompt("segundo nombre?");
let edad3 = parseInt(prompt("ingrese la tercera edad"));
let nombre3 = prompt("tercer nombre?");

console.log(edad1 +"--->" +nombre1);
console.log(edad2 +"--->"+ nombre2);
console.log(edad3 +"--->"+ nombre3);

let mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
  console.log("el que tiene mayor edad es " + nombre1);
} else if (mayor === edad2) {
  console.log("el que tiene mayor edad es " + nombre2);
} else {
  console.log("el que tiene mayor edad es " + nombre3);
}
