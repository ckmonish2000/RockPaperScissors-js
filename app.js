var userScore=0;
var computerScore=0;
let UserScore_span=document.getElementById("user-score");
let computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector("scoreBoard");
const result=document.querySelector(" p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function convert(letter){
    if(letter=="r"){
        return " rock ";
    }
    if(letter=="p"){
        return " paper ";
    }
    if(letter=="s"){
        return " scissors "
    }
}
function wins(user , computer){
userScore++;
UserScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
result.innerHTML= convert(user) + " beats " + convert(computer) + " you win !!! ";
document.getElementById(user).classList.add("green-glow");
setTimeout(function(){ document.getElementById(user).classList.remove('green-glow')},1000);
}
function loose(user, computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    UserScore_span.innerHTML=userScore;
    result.innerHTML= `${convert(computer)}  beats  ${ convert(user)}  you loooooose :`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow')},1000);
}
function draw(user , computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    UserScore_span.innerHTML=userScore;
    result.innerHTML= `its a draw`;
    document.getElementById(user).classList.add("blue-glow");
    setTimeout(function(){ document.getElementById(user).classList.remove('blue-glow')},1000);
    
}
function game(choices){
    
    const computerchoice=getComputerChoice();

    switch(choices+computerchoice){
        case "rs":
        case "pr":
        case "sp":
        wins(choices, computerchoice);
        break;
         
        case "rp":
        case "ps":
        case "sr":
       loose(choices, computerchoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(choices, computerchoice);
        break;
    }
}

function getComputerChoice(){
    const compchoices=['r','p','s'];
    var i=Math.floor(Math.random()*3);
    return compchoices[i];

}


function main(){
rock_div.addEventListener('click',function(){
    game('r');
})
paper_div.addEventListener('click',function(){
    game('p');
})
scissors_div.addEventListener('click',function(){
    game('s');
})
}


main();