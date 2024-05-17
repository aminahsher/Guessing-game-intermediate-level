#!/usr/bin/env node
import inquirer from "inquirer";
const guessaNumber = Math.round((Math.random()*6+1))
const attempts = 1
const maxAttempts=5

for(let attempts =1; attempts<=maxAttempts; attempts++)
    {let answers = await inquirer.prompt([{
    type: "number",
    name:"userGuess",
    message: "Guess a number from 1 to 6",
    validate: function (userGuess) {
        if (userGuess<1 || userGuess>6){
            return "please enter a number between 1 to 6"
        }else if(isNaN (userGuess)){
            return"please enter a valid number"
        }else {return true}
    
    },
}]);
if(answers.userGuess=== guessaNumber){
    console.log("you guessed it right")
    break;
} else{
    console.log(`Try again! You have ${maxAttempts - attempts} attempts left`);

}}
