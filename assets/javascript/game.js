    console.log("its working");
    var wordList = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"];
    var computerChoice= [];
    var computerLetter;
    var choice;
    var progress = [];
    var wrong = [];
    var tries = 7;

function getWord(){
        choice = wordList[Math.floor(Math.random() * wordList.length)];
        computerChoice[0] = choice;
        progress.length = choice.length;
        if (progress.length > 0){
        for (var j = 0; j < progress.length ; j++) {
            progress[j] = "_";
        }
        }
        console.log(computerChoice);
    } 

    getWord();

    document.onkeyup = function(event){
    var guess= event.key;
    //if guess is equal to a letter in array (loop) push onto an array
    
    guess = guess.toUpperCase();

    document.querySelector("#game").innerHTML = guess;
    for (var i = 0; i < computerChoice[0].length; i++) {
        if (computerChoice[0][i] === guess) {
         computerLetter = computerChoice[0][i];
         progress[i] = computerLetter;
        console.log(guess);
    }     



    
    
    
    
    }
        if (guess !== computerLetter) {
            wrong.push(guess);
            tries--;
        }
         if (tries === 0) {
            getWord();
            tries = 7;
            wrong = [];
        }
        
}