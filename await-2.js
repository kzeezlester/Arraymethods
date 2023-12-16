



function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
    });
  }

async function launchSpaceVehicle() {
    try {
      const moduleA = await caricaModulo("A");
      console.log(moduleA);
      const moduleB = await caricaModulo("B");
      console.log(moduleB);
      const moduleC = await caricaModulo("C");
      console.log(moduleC);
      console.log("Spacecraft ready for launch!");
    } catch (err) {
      console.log(err);
    }
  }
  launchSpaceVehicle()