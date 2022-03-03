alert("Welcome to 20! You and the computer will take turns drawing numbers. The goal is to get as close to 20 as you can without going over. The computer will stop at 16. Press ok to play!");

var compWins = 0;

var userWins = 0;

do {

    var compTotal = 0;

    var userTotal = 0;


    do {
    
        if (compTotal < 16) { 
        
        alert("It is the computer's turn.");
        
        var compNum = Math.floor(Math.random() * 10) + 1;
        
        alert(`The computer drew ${compNum}.`);
        
        compTotal = compTotal + compNum;
    
        alert(`The computer's total is ${compTotal}`)
        
        } else if (compTotal > 20) {

            alert("You win! The computer went over 20.")
            break;

        } else if (compTotal >= 16) {
        
            alert(`The computer will stop at ${compTotal}.`)
            
        }
    
    
    
        if (userTotal > 20) {
    
        alert("Game over. You've gone over 20.")
        break;
        
        } else if (userTotal <= 20) {
    
    
        alert("Now it is your turn.");
        
        var draw = prompt("Do you want to draw? Type 'y' for yes and 'n' for no.");
        
        if (userTotal > 20) {
        
            alert("Game over. You've gone over 20.")
            
        
        } else if (draw == "y") {
        
            var userNum = 20;
            
            alert(`You drew ${userNum}.`);
            
            userTotal = userTotal + userNum;
        
            alert(`Your total is ${userTotal}`) 
            
        } else if (draw == "n") {
        
            alert(`You will stop at ${userTotal}.`)
            break;
        
        }
    
        }
        
    } while (draw == "y");

    do {

        if (compTotal <16) {

            alert("It is the computer's turn.");
        
            var compNum = Math.floor(Math.random() * 10) + 1;
        
            alert(`The computer drew ${compNum}.`);
        
            compTotal = compTotal + compNum;
    
            alert(`The computer's total is ${compTotal}`)
        
        } else if (compTotal > 20) {

            alert("You win! The computer went over 20!")
            break;

        } else if (compTotal >= 16) {
        
            alert(`The computer will stop at ${compTotal}.`)
            
        }

    } while (compTotal < 16)



    if (compTotal > 20) {

        userWins++;
        alert("You win! The computer went over 20!")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`);

    } else if (userTotal > 20) {

        compWins++;
        ("You lost. You went over 20.")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`);

    } else if (compTotal > userTotal) {

        compWins++
        alert("You lost. The computer was closer to 20 than you.")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`)

    } else if (userTotal > compTotal) {

        userWins++
        alert("You won! You were closer to 20 than the computer!")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`)

    }



    var restart = prompt("Would you like to play again? Type 'y' for yes and 'n' for no.")

} while (restart == "y");