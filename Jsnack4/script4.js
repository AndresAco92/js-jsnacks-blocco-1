var array = ['giovanna', 'marco', 'alex', 'alessio', 'jhon'];

var nomeUtente = prompt('Ciao sono Gatsby, inserisci tuo nome;');

var festa = false;

for(var i = 0; i < array.lenght; i++){
  var list = array[i];
  if(nomeUtente === list){
  festa = true;
  }
}

if(festa){
  console.log('Gastby dice: Puoi partecipare alla festa!');
}else{
  console.log('Gastby dice: Non sei stato invitato sorry!');
}