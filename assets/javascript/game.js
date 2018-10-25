$(document).ready(function () {

    var numberGuess = document.getElementById("numberGuess");
    var total = document.getElementById("total");
    var crystals = [document.getElementById("diamond"), document.getElementById("grey"), document.getElementById("yellow"), document.getElementById("purple")];
    var results = document.getElementById("blink");
    var values = [];
    var num1 = 0;
    var wins = 0;
    var losses = 0;
    var computerGuess = (Math.floor((Math.random() * 120) + 19));

    //Random number to match

    function randomNumGuess() {
        computerGuess = (Math.floor((Math.random() * 120) + 19));
        $(numberGuess).text(computerGuess);
    };

    //Random number for each crystal

    function randomCrystalValue() {
        for(i = 0; i < 4; i++) {
            values.push(Math.floor((Math.random() * 12) + 1));
        };
    };

    //Reset function
    function reset() {
        num1 = 0;
        values = [];
        $(total).text(num1)
        randomCrystalValue();
        randomNumGuess();
    };

    randomNumGuess();
    randomCrystalValue();

    //On.click function
    $(crystals[0]).on("click", function (){

        console.log("You've been clicked!");
        num1 = num1 + values[0];
        $(total).text(num1);

        if (num1 > computerGuess) {
            $(results).text("Better luck next time!").fadeOut().fadeIn().fadeOut();
            losses++;
            var grab = document.getElementById("losses");
            grab.innerHTML = "Losses: " + losses;
            reset();
        }
        else if (num1 === computerGuess) {
            $(results).text("Winner Winner Chicken Dinner!").fadeOut().fadeIn().fadeOut();
            wins++;
            var grab = document.getElementById("wins");
            grab.innerHTML = "Wins: " + wins;
            reset();
        }
    });

    $(crystals[1]).on("click", function (){

        console.log("You've been clicked!");
        num1 = num1 + values[1];
        $(total).text(num1);

        if (num1 > computerGuess) {
            $(results).text("Better luck next time!").fadeOut().fadeIn().fadeOut();
            losses++;
            var grab = document.getElementById("losses");
            grab.innerHTML = "Losses: " + losses;
            reset();
        }
        else if (num1 === computerGuess) {
            $(results).text("Winner Winner Chicken Dinner!").fadeOut().fadeIn().fadeOut();
            wins++;
            var grab = document.getElementById("wins");
            grab.innerHTML = "Wins: " + wins;
            reset();
        }
    });

    $(crystals[2]).on("click", function (){
        console.log("You've been clicked!");
        num1 = num1 + values[2];
        $(total).text(num1);
        if (num1 > computerGuess) {
            $(results).text("Better luck next time!").fadeOut().fadeIn().fadeOut();
            losses++;
            var grab = document.getElementById("losses");
            grab.innerHTML = "Losses: " + losses;
            reset();
        }
        else if (num1 === computerGuess) {
            $(results).text("Winner Winner Chicken Dinner!").fadeOut().fadeIn().fadeOut();
            wins++;
            var grab = document.getElementById("wins");
            grab.innerHTML = "Wins: " + wins;
            reset();
        }
    });

    $(crystals[3]).on("click", function (){
        console.log("You've been clicked!");
        num1 = num1 + values[3];
        $(total).text(num1);
        if (num1 > computerGuess) {
            $(results).text("Better luck next time!").fadeOut().fadeIn().fadeOut();
            losses++;
            var grab = document.getElementById("losses");
            grab.innerHTML = "Losses: " + losses;
            reset();
        }
        else if (num1 === computerGuess) {
            $(results).text("Winner Winner Chicken Dinner!").fadeOut().fadeIn().fadeOut();
            wins++;
            var grab = document.getElementById("wins");
            grab.innerHTML = "Wins: " + wins;
            reset();
        }
    });

});