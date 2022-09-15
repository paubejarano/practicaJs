// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = prompt("ingrese el primer numero");
const num2 = prompt("ingrese el segundo numero");
const num3 = prompt("ingrese el tercer numero");

if(num1 > num2 && num1 > num3){
    console.log("el primer numero es el mayor")
}
if(num2 > num1 && num2 > num3){
    console.log("el segundo numero es el mayor")
}
if(num3 > num1 && num3 > num2){
    console.log("el tercer numero es el mayor")
}
if(num1 === num2 && num1 === num3){
    console.log("los numeros ingresados son iguales")
}