var num_Utente = parseInt(prompt('Inserisci un numero fino al 10'));

var somma = 0;

for(var i = 1; i <= num_Utente; i++){
  somma += Math.pow(i,3);
}

console.log(somma)