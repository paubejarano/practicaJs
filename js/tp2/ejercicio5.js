// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let dni;

while (true) {
  dni = prompt("ingrese su numero de dni: ");
  
  if (dni === null) break;

  dni = parseInt(dni);

  if (dni && dni >= 0 && dni <= 99999999) {
    let resto;
    resto = dni % 23;
    if (resto === 0) {
      console.log("la letra que le corresponde es T");
    } else if (resto === 1) {
      console.log("la letra que le corresponde es R");
    } else if (resto === 2) {
      console.log("la letra que le corresponde es W");
    } else if (resto === 3) {
      console.log("la letra que le corresponde es A");
    } else if (resto === 4) {
      console.log("la letra que le corresponde es G");
    } else if (resto === 5) {
      console.log("la letra que le corresponde es M");
    } else if (resto === 6) {
      console.log("la letra que le corresponde es Y");
    } else if (resto === 7) {
      console.log("la letra que le corresponde es F");
    } else if (resto === 8) {
      console.log("la letra que le corresponde es P");
    } else if (resto === 9) {
      console.log("la letra que le corresponde es D");
    } else if (resto === 10) {
      console.log("la letra que le corresponde es X");
    } else if (resto === 11) {
      console.log("la letra que le corresponde es B");
    } else if (resto === 12) {
      console.log("la letra que le corresponde es N");
    } else if (resto === 13) {
      console.log("la letra que le corresponde es J");
    } else if (resto === 14) {
      console.log("la letra que le corresponde es Z");
    } else if (resto === 15) {
      console.log("la letra que le corresponde es S");
    } else if (resto === 16) {
      console.log("la letra que le corresponde es Q");
    } else if (resto === 17) {
      console.log("la letra que le corresponde es V");
    } else if (resto === 18) {
      console.log("la letra que le corresponde es H");
    } else if (resto === 19) {
      console.log("la letra que le corresponde es L");
    } else if (resto === 20) {
      console.log("la letra que le corresponde es C");
    } else if (resto === 21) {
      console.log("la letra que le corresponde es K");
    } else if (resto === 22) {
      console.log("la letra que le corresponde es L");
    }
  } else {
    alert("ingrese un numero de dni valido!");
  }
}
