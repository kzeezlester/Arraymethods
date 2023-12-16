
function caricamentoDati() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
      }, 2000);
    });
  }

async function ottieniDati() {
    const dati = await caricamentoDati();
    console.log(dati);
  }
  ottieniDati()