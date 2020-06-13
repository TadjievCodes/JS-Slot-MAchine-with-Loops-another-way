// Constant Variables
const MAX = 4; // The MAX number that will be generated
const MIN = 1; // The MIN number that will be generated
const WINRATE = 3; // The amount the winnings are multiplied by

// TODO: 3. Create Variables
var cashOnHand = 1000;
var numberOfRoundsPlayed = 0; 
var numberOfWins = 0;
var numberOfLosses = 0;

var number1 = 0;
var number2 = 0;
var number3 = 0;


while (cashOnHand > 0) {

    var bet = parseInt(prompt("Place your Bet! \n Cash on Hand: $" + cashOnHand));

    if (bet < 0 || bet > cashOnHand) {
        alert("Wrong bet of $  " + bet + " Try again");
    } else {

        numberOfRoundsPlayed++;
        cashOnHand -= bet;

        number1 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
        number2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
        number3 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;


        if (number1 === number2 && number1 === number3) {
            alert("Round " + numberOfRoundsPlayed + ": " + number1 + " | " + number2 + " | " + " | " + number3 + " \n " + "You won " + (bet * WINRATE) + "!");
            numberOfWins++;
            cashOnHand += bet * WINRATE;
        } else {
            numberOfLosses++;

            alert("Round " + numberOfRoundsPlayed + ": " + number1 + " | " + number2 + " | " + " | " + number3 + " \n " + "Better Luck Next Time!");
        }

        if (cashOnHand > 0) {
            if (window.confirm("Play Again ?" + "\n" + "OK == YES" + "\n" + "CANCEL == NO") == false) {
                break;
            }
        }


    }


}

var outputMessage = "Number of Rounds played : " + numberOfRoundsPlayed + '<br>' + "Number of Wins : " + numberOfWins + '<br>' + "Number of Losses : " + numberOfLosses + '<br>' + "Remaining Cash on Hand : " + cashOnHand;
document.getElementById("display_1").innerHTML = outputMessage;