
window.addEventListener("load",init);


const lavels = {
    easy:7,
    medium:3,
    hard : 2
}

const currentLabel = lavels.easy;


let time = currentLabel;
let score = 0;
let isPlaying;
let highScore = 0;


//Dom Selection 

const currentWord = document.querySelector("#current-word");
const wordInput = document.querySelector("#word-input");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highScoreDisplay = document.querySelector("#highscore");


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'the',
    'quick',
    'brown',
    'over',
    'jumps',
    'fox',
    'lazy',
    'dog',
    'love',
    'you',
    'I',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'

];

function init(){
    seconds.innerHTML = currentLabel;
    showWord(words);
    wordInput.addEventListener("input", startMatch);
    setInterval(countdown,1000);
    //check status
    setInterval(checkStatus,50);
}

function startMatch(){
    if( matchWords() ){
       //console.log("Match Word. Hurreh!!!");
       isPlaying = true;
       time = currentLabel + 1;
       showWord(words);
       wordInput.value = "";
       score++;
    }
   
    if(score=== -1)
    {
        scoreDisplay.innerHTML = 0;
    } else{
         scoreDisplay.innerHTML = score;
    }

    if(highScore < score){
        highScore = score;


        highScoreDisplay.innerHTML = highScore;

    }

   
   
}

function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML= "Correct";
        return true;
    } else{
        message.innerHTML = "";
        return false;
    }
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function  countdown(){
    if(time>0){
        time--;
    }
    else if(time===0)
    {
        isPlaying= false;
    }

    timeDisplay.innerHTML = time;
}
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = "Game is Over!! Start Typing Again";
        
        
        score = -1;
    }

}




