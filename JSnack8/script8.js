var n_Utente = prompt('inserisci un numero a 4 cifre:');
console.log('Questo è il tuo numero: '+ n_Utente)

var somma = 0;

for(var i = 0; i < n_Utente.length; i++){
  somma += parseInt(n_Utente.charAt(i));
}

console.log(somma)