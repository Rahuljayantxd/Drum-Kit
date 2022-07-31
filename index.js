var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var n = 0; n < numberOfDrumButtons; n++) {

  document.querySelectorAll(".drum")[n].addEventListener("click", function() {

    this.style.color = "white";

  });
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
