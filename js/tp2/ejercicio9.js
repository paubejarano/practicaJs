// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
let c=1;

for (let i = 1; i <= 500; i++) {
  if (i % 4 != 0 && i % 9 != 0) {
    console.log(i);
  } else if (i % 4 === 0) {
    console.log(i+ " (Multiplo de 4)");
  } else if (i % 9 === 0) {
    console.log(i + " (Multiplo de 9)");
  }
  
  if(c%5===0){
    console.log("----------------------");
  }
  c++;
}
