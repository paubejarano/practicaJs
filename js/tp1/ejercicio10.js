//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const num= prompt("ingrese un numero:");

if(num%2===0 || num%3===0 || num%5===0 || num%7===0){
    console.log("el numero ingresado es divisible por 2, 3, 5 o 7");
}else{
    console.log("el numero ingresado NO es divisible por 2, 3, 5 o 7");
}
