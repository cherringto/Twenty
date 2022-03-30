function comparison(c, compWins, userWins, u) {

    var userWins = 0
    var compWins = 0

    if (c > 20) {

        userWins++;
        alert("You win! The computer went over 20!")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`);

    } else if (u > 20) {

        compWins++;
        ("You lost. You went over 20.")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`);

    } else if (c > u) {

        compWins++
        alert("You lost. The computer was closer to 20 than you.")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`)

    } else if (u > c) {

        userWins++
        alert("You won! You were closer to 20 than the computer!")
        alert(`You've won ${userWins} times and the computer has won ${compWins} times.`)

    }

    
    
}

function nameAsk() {
    var askName = prompt(`What is your name?`)
    alert(`Welcome to 20 ${askName}! You and the computer will take turns drawing numbers. The goal is to get as close to 20 as you can without going over. The computer will stop at 16. Press ok to play!`)
    return askName
}

nameAsk()

function ran() {
    var rn = Math.floor(Math.random() * 10) + 1
    return rn
}

function userFunction() { 
    
    var userRan;
    var userTotal = 0
     

    do {
    
            
        userRan = ran()
                 
        userTotal = userTotal + userRan;

        if (userTotal >= 20) {
            alert(userTotal)
            break
        }

        var draw = prompt(`You drew ${userRan}. Your total is ${userTotal}. Would you like another number? Press n to stop`)
      

    } while (draw != "n")
    
    return userTotal
}

var u = userFunction()

comparison()

function compFunction() { 
    
    var compRan;
    var compTotal = 0
     

    do {
    
            
        compRan = ran()
                 
        compTotal = compTotal + compRan;

        if (compTotal >= 16) {
            break
        }

        alert(`The computer drew ${compRan}. Its total is ${compTotal}.`)
      

    } while (compTotal < 16)
    
    return compTotal
          
}

var c = compFunction()

comparison()



function restart() {
    
    var restart = prompt("Would you like to play again? Type 'y' for yes and 'n' for no.")
    if (restart == "y") {
        game()
    }
    return restart

}

restart()