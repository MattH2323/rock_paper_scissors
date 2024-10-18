console.log("Hello world!");

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()*100)%3);
    switch(randomNumber){
        case(0): return "rock";
        case(1): return "paper";
        case(2): return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Insert:").toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
    }
    throw new TypeError("Illegal input detected");
    
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("This round is a tie!")
        return;
    }
    if ((humanChoice == "rock" && computerChoice == "scissors")||
    (humanChoice == "paper" && computerChoice == "rock")||
    (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You won this round!");
        return "human";
    }
    if((computerChoice == "rock"  && humanChoice == "scissors")||
    (computerChoice == "scissors"  && humanChoice == "paper")||
    (computerChoice == "paper"  && humanChoice == "rock")){
        console.log("You lost this round!");
        return "computer";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if(roundWinner === "human"){
            humanScore++;
        }
        else if(roundWinner === "computer"){
            computerScore++;
        }
    }
    if(humanScore == computerScore){
        console.log("It's a tie!");
    }
    else{
        const finalWinner = humanScore > computerScore ? "you": "computer";
        console.log("The winner is " + finalWinner);
    }
}