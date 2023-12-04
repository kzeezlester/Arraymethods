/*Dato l'oggetto { name: "John", age: 30 }
 crea una funzione che simula un'operazione 
 asincrona, come il recupero dei dati da un'API. 
 -Implementare una callback per gestire i dati recuperati.
  -Utilizzare setTimeout per simulare il ritardo dell'operazione.*/
  
  
function fetchDataFromAPI(callback) {
  setTimeout(() => {
    let data =
    {
      name: "John",
      age: 30
    }
    callback(data); 
  }, 1000);
 
}

function handleData(data) {

   console.log(data)
  }

fetchDataFromAPI(handleData);