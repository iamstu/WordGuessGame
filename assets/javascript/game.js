    console.log("its working");
    var wordList = ["CONTRA", "DOOM", "XCOM", "METROID", "MARIO", "PORTAL", "HALFLIFE", "JSRF", "BRAID", "FALLOUT", "FABLE", "EARTHBOUND"];
    var computerChoice= [];
    var computerLetter;
    var choice;
    var progress = [];
    var wrong = [];
    var tries = 7;
    var wins = 0;
    var losses = 0;
    var answer;
    var guessedWords= [];
    var prevWord;
    var remaining = wordList.length - guessedWords.length;
    //to make a new word to guess
function getWord(){
        
        //pick random from the list array and set it to choice var the assign to the computer choice array
        choice = wordList[Math.floor(Math.random() * wordList.length)];
        computerChoice[0] = choice;
        //make array that is length of computer's word then( as long as there is a value) set items in array to a blank
        progress.length = choice.length;
        if (progress.length >= 0){
        for (var j = 0; j < progress.length ; j++) {
            progress[j] = "_";
            
        }
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#word").innerHTML = "Word: " + progress;
        document.querySelector("#tries").innerHTML = "Tries Left: " + tries;
        document.querySelector("#remaining").innerHTML = "Words Left to Guess: " + remaining;
        }
        console.log(computerChoice);
    } 

    getWord();
    //on a key up set a var equal to said key
    document.onkeyup = function(event){
    var guess= event.key;
    //set the value to the same format as the word list (ie upper case)
    guess = guess.toUpperCase();

    //check the guess against each letter in the computer's word
    for (var i = 0; i < computerChoice[0].length; i++) {
        if (computerChoice[0][i] === guess) {
            //set the letter to a var and make it equal the value at the same index in progress
         computerLetter = computerChoice[0][i];
         progress[i] = computerLetter;
         document.querySelector("#word").innerHTML = "Word: " + progress;
        console.log(guess);

        for (x = 0; x < progress.length; x++){
            answer = answer + progress[x];
        }
    }     



    
    
    
    
    }
    //if not there deduct from tries and add letter to the wrong list (not in that order)
        if (guess !== computerLetter) {
            wrong.push(guess);
            document.querySelector("#wrong").innerHTML = "Wrong Letters: " + wrong;
            tries--;
            document.querySelector("#tries").innerHTML = "Tries Left: " + tries;
        }

        

        if (answer === choice){
            for (var y = 0; y <guessedWords.length; y++) {
                if (" " + answer === guessedWords[y]){
                    prevWord = " " + answer;
                }
            }
            if (prevWord === (" " + answer)) {
                getWord();
           wrong = [];
           wins++;
           tries = 7;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#tries").innerHTML = "Tries Left: " + tries;
            document.querySelector("#wrong").innerHTML = "Wrong Letters: " + wrong;
            document.querySelector("#guessed-words").innerHTML = "Words Guessed: " + guessedWords;
            }
            else {
            guessedWords.push(" " + answer);
            remaining = wordList.length - guessedWords.length;
            document.querySelector("#remaining").innerHTML = "Words Left to Guess: " + remaining;
           getWord();
           wrong = [];
           wins++;
           tries = 7;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#tries").innerHTML = "Tries Left: " + tries;
            document.querySelector("#wrong").innerHTML = "Wrong Letters: " + wrong;
            document.querySelector("#guessed-words").innerHTML = "Words Guessed: " + guessedWords;
            }
        }
        else {
            answer = "";
        }
        //if tries are 0 get another word, reset tries and wrong letter list, rinse and repeat
         if (tries === 0) {
            getWord();
            wrong = [];
            losses++;
            tries = 7;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector("#tries").innerHTML = "Tries Left: " + tries;
            document.querySelector("#wrong").innerHTML = "Wrong Letters: " + wrong;
        }
        
}