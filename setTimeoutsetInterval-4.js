let id;
function lanciaDadi() {
  console.log("Lancio dei dadi in corso...");
   id= setInterval(() => {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.`);
  }, 2000);
 
 
}
setTimeout(()=>{
  
   lanciaDadi();
}, 2000);










//
