let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var userimg_div = document.getElementById("userimg");
var computerimg_div = document.getElementById("computerimg");
var userimage_img = document.getElementById("userimage");
var computerimage_img = document.getElementById("computerimage");



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";
}

function win(user, computer) {
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} beats  ${convertToWord(computer)}. <br> You win!`;
    userChoice_div.classList.add('green-glow');
    scoreBoard_div.classList.remove('green-glow','red-glow','gray-glow');
    scoreBoard_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} loses  ${convertToWord(computer)}. <br> You lost!`;
    userChoice_div.classList.add('red-glow');
    scoreBoard_div.classList.remove('green-glow','red-glow','gray-glow');
    scoreBoard_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);



}
function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)} equals  ${convertToWord(computer)}.<br> It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    scoreBoard_div.classList.remove('green-glow','red-glow','gray-glow');
    scoreBoard_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
   
        
    switch(userChoice){
        case "r": userimage_img.src = "images/rock2.png";
        break;
        case "p": userimage_img.src = "images/paper2.png";
        break;
        case "s": userimage_img.src = "images/scissor2.png";
        break;
    }
    switch(computerChoice){
        case "r": computerimage_img.src = "images/rock2.png";
        break;
        case "p": computerimage_img.src = "images/paper2.png";
        break;
        case "s": computerimage_img.src = "images/scissor2.png";
        break;
    }
    
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();






















