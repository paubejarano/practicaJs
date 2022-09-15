// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero;
let suma=0;


while(true){
    numero = prompt("ingrese un numero:");

    if(numero==null) break;
    numero= parseInt(numero);
     if(numero){
        suma= suma + parseInt(numero) ;
     }else{
        alert("no es un numero");
     }
}

console.log("la suma de los numeros ingresados es de: "+suma);