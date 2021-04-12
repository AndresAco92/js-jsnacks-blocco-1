 var somma= 0;

for(var i = 0; i < 10; i++){
  var numbUtente = parseInt(prompt('Inserisci il numero:'));
  console.log('' + numbUtente)
  somma += numbUtente;
}

console.log('il risultato è: ' + somma)