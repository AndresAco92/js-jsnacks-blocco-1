var arrayN = [1,2,3,4,5,6,7,8,9,10];
console.log('Primi numeri: '+ arrayN)

var somma = 0;

for( var i = 1; i < 10; i++){
  somma += arrayN[i];
}

console.log('Questa è la somma: '+ somma)
console.log('Questa è la media: '+ somma / 10);
