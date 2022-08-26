//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const num= prompt("ingrese un numero:");

if(num%2===0 || num%3===0 || num%5===0 || num%7===0){
    if(num%2===0){
        console.log("el numero es divisible por 2");
    }
    if(num%3===0){
        console.log("el numero es divisible por 3");
    }
    if(num%5===0){
        console.log("el numero es divisible por 5");
    }
    if(num%7===0){
        console.log("el numero es divisible por 7")
    }
}else{
    console.log("el numero ingresado NO es divisible por 2, 3, 5 o 7");
}