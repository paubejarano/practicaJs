//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("ingrese un texto: ");
let x = "";

for (let i = cadena.length; i <=cadena.length; i--) {
  let letra = cadena.charAt(i);
  console.log(letra);
  if(i<0) break;
  x=x+letra;
}
console.log(x);