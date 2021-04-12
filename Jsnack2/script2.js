var parola1 = prompt('Inserire parola 1');
var parola2 = prompt('Inserire parola 2');

console.log('parola 1:' +parola1.length);
console.log('parola 2:' +parola2.length);

if(parola1.length > parola2.length){
  console.log('' + parola1 + ', ' + parola2)
}else if(parola2.length > parola1.length){
  console.log('' + parola2 + ', ' + parola1)
}else{
  alert('Entrambe parole sonno uguali!')
}