/*Create a function called "countdown" which will decrease the 
countdown by 1 unit and display the time remaining in the console.
Use setInterval to call the countdown function every second.
Displays the message "Countdown in progress..." at the beginning.
When the countdown reaches 0, displays a message indicating that the countdown has ended.
let tempoRimanente = 10;*/

let tempoRimanente = 10;

function contoAllaRovescia() {

    let countdown = setInterval(function () {
        console.log('Countdown in progress...');
        if (tempoRimanente > 0) {
            console.log(tempoRimanente);
            tempoRimanente--;
        } else if (tempoRimanente ==0) {
            console.log('Countdown as end...');
            
        }
        return tempoRimanente;
    }, 1000);

    
}

console.log(contoAllaRovescia());