var timer = 10;
var score = 0;
var hitvalue = 0;
function bubbleMaker() {
  var bubble = "";
  for (var i = 0; i < 105; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = bubble;
}

function runTimer() {
  var timerStart = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerStart);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Is Over</h1>`;
    }
  }, 1000);
}

function getHitValue() {
  hitvalue = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitvalue;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

function startTheGame() {
  document.querySelector(".pbtm").addEventListener("click", function (data) {
    var clickedNumber = Number(data.target.textContent);
    if (timer > 0 && hitvalue == clickedNumber) {
      increaseScore();
      getHitValue();
      bubbleMaker();
    } else if (timer > 0 && hitvalue != clickedNumber) {
      alert("OOPS Seems like you clicked the wrong number");
    }
  });
}

bubbleMaker();
runTimer();
getHitValue();
startTheGame();
