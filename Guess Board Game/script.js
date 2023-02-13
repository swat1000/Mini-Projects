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
