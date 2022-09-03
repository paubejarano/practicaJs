//3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
let cadena = "";
while (true) {
  
  let texto = prompt("ingrese una palabra:");

  if (texto === null) break;
  cadena = cadena + texto + "-";
}

console.log("esto es lo que se ingreso: " + cadena);
