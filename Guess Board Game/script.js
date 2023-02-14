const wordList = [
    {word:"air",hint:"type of pollution"},
    {word:"python",hint:"a programming language"},
    {word:"jpeg",hint:"an image format"},
    {word:"server",hint:"related to computer system"},
    {word:"water",hint:"to be saved and used"},
    {word:"mouse",hint:"part of computer"}
]

const inputs = document.querySelector(".inputs");
resetBtn = document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
typingInput = document.querySelector(".typing-input");

function randomWord(){
    //getting Random object from list
    let randObj = wordList[Math.floor(Math.random()*wordList.length)];
    //getting word of random object
    let word = randObj.word;
    console.log(word)

    let html = "";
    for(let i = 0; i < word.length; i++){
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)){
       console.log(key);
       if(word.includes(key)){ // if user letter is found in word
         for(let i = 0; i < word.length; i++){
            if(word[i] === key){
                inputs.querySelectorAll("input")[i].value = key;
            }
         }
       } else {
        console.log("letter not found")
       }
    }
}

resetBtn.addEventListener("click", randomWord());
typingInput.addEventListener("input", initGame);