//Use setTimeout to call the "showReminder" function after a 5 second delay.
//Before the 5 seconds expire, print on the console: "The reminder is being set".



console.log("Il promemoria è in fase di impostazione");
setTimeout(() => {
    mostraPromemoria()
}, 500);
function mostraPromemoria() {
  console.log("Promemoria: È ora di fare una pausa!");
}




/*console.log("Il promemoria è in fase di impostazione");

setTimeout(mostraPromemoria, 5000);

function mostraPromemoria() {
  console.log("E' passato 1 minuto dall'impostazione del promemoria!");
}
*/
