var numero = 1;
var limited = 1000;
var potenza = 1;

while(numero < limited){
  console.log(numero)
  numero = Math.pow(2, potenza);
  potenza++;
}