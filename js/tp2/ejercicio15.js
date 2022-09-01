// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena, cont=0;
cadena = prompt("ingrese un texto:");

for(let i=0; i<cadena.length; i++){
    let letra= cadena.charAt(i);
    if(letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
        cont= cont+1;
    }
}

console.log("la cantidad de vocales que tiene el texto es "+cont);