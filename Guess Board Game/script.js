let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    if (this.innerHTML === "Start Game") {
      this.innerHTML = "Submit";
      this.style.backgroundColor = "red"
    } else {
      this.innerHTML = "Start Game";
      this.style.backgroundColor = "blue"
    }
  });

  btn.addEventListener("click", function(){
    var word = "H"
    if(input == word){
      para.innerHTML = "Congrats you WIN"
    } else {
      para.innerHTML = "You Lose!! Play Again"
    }
  })