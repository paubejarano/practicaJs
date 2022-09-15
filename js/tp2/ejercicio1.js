//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad= Number(prompt("ingrese la edad:"));

if(edad>=18){
    console.log("puede conducir");
}else if(edad <18 && edad>0){
    console.log("no puede conducir");
}else {
    console.log("no es una edad valida");
}
    