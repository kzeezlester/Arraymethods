//Partendo dall'esercizio Le Callback - 5, 
//includi la gestione degli errori. Se la funzione di callback genera un
//errore, catturalo e gestiscilo.
//Modificare la funzione performOperation per gestire 
//l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
   let sum = a + b;
   if(typeof a == 'number' || typeof b == 'number'){
      callback(sum, 'it is number');
   }else{
      callback(new Error('this is not a number'), sum);
   }
}

function displayResult(result) {

   return console.log(result);
}

performOperation(5, 3,displayResult);



