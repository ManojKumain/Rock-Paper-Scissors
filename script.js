// Step 1: Create a function that generates computer choice
function getComputerChoice() {
    const choices = ['rock', "paper", 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);


// Step 2: Writing a function to get human choice
function getHumanChoice() {
    const choose = prompt("Enter your Choice");
    return choose;
}

const humanChoice = getHumanChoice();
console.log(humanChoice);