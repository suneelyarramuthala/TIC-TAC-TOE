var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let message = document.querySelector(".message");
let ones = document.querySelector("#oneS");
let twos = document.querySelector("#twoS");
let scoreone = 0;
let scoretwo = 0;
let count = 0;
let oneimg = 0;
let twoimg = 0;
let threeimg = 0;
let fourimg = 0;
let fiveimg = 0;
let siximg = 0;
let sevenimg = 0;
let eightimg = 0;
let nineimg = 0;
let tl;
let tm;
let tr;
let ml;
let mm;
let mr;
let bl;
let bm;
let br;

console.log(document.querySelector("#oneimg").getAttribute("src"));

start.addEventListener("click", resetGame);
function resetGame() {
  document.querySelector("#oneimg").setAttribute("src", "");
  document.querySelector("#twoimg").setAttribute("src", "");
  document.querySelector("#threeimg").setAttribute("src", "");
  document.querySelector("#fourimg").setAttribute("src", "");
  document.querySelector("#fiveimg").setAttribute("src", "");
  document.querySelector("#siximg").setAttribute("src", "");
  document.querySelector("#sevenimg").setAttribute("src", "");
  document.querySelector("#eightimg").setAttribute("src", "");
  document.querySelector("#nineimg").setAttribute("src", "");
  message.innerHTML = "Player One's turn to paly";
  count = 0;
  oneimg = 0;
  twoimg = 0;
  threeimg = 0;
  fourimg = 0;
  fiveimg = 0;
  siximg = 0;
  sevenimg = 0;
  eightimg = 0;
  nineimg = 0;
  tl = undefined;
  tm = undefined;
  tr = undefined;
  ml = undefined;
  mm = undefined;
  mr = undefined;
  bl = undefined;
  bm = undefined;
  br = undefined;
}
reset.addEventListener("click", () => {
  scoreone = 0;
  scoretwo = 0;
  ones.innerHTML = scoreone;
  twos.innerHTML = scoretwo;
});

one.addEventListener("click", () => {
  if (oneimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#oneimg").setAttribute("src", "img/cross.png");
      console.log(count);
      console.log(count % 2);
      count++;
      tl = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#oneimg").setAttribute("src", "img/circle.png");
      count++;
      tl = 0;
    }
    oneimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
two.addEventListener("click", () => {
  if (twoimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#twoimg").setAttribute("src", "img/cross.png");
      count++;
      tm = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#twoimg").setAttribute("src", "img/circle.png");
      count++;
      tm = 0;
    }
    twoimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
three.addEventListener("click", () => {
  if (threeimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#threeimg").setAttribute("src", "img/cross.png");
      count++;
      tr = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#threeimg").setAttribute("src", "img/circle.png");
      count++;
      tr = 0;
    }
    threeimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
four.addEventListener("click", () => {
  if (fourimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#fourimg").setAttribute("src", "img/cross.png");
      count++;
      ml = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#fourimg").setAttribute("src", "img/circle.png");
      count++;
      ml = 0;
    }
    fourimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
five.addEventListener("click", () => {
  if (fiveimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#fiveimg").setAttribute("src", "img/cross.png");
      count++;
      mm = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#fiveimg").setAttribute("src", "img/circle.png");
      count++;
      mm = 0;
    }
    fiveimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
six.addEventListener("click", () => {
  if (siximg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#siximg").setAttribute("src", "img/cross.png");
      count++;
      mr = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#siximg").setAttribute("src", "img/circle.png");
      count++;
      mr = 0;
    }
    siximg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
seven.addEventListener("click", () => {
  if (sevenimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#sevenimg").setAttribute("src", "img/cross.png");
      count++;
      bl = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#sevenimg").setAttribute("src", "img/circle.png");
      count++;
      bl = 0;
    }
    sevenimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
eight.addEventListener("click", () => {
  if (eightimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#eightimg").setAttribute("src", "img/cross.png");
      count++;
      bm = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#eightimg").setAttribute("src", "img/circle.png");
      count++;
      bm = 0;
    }
    eightimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
nine.addEventListener("click", () => {
  if (nineimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#nineimg").setAttribute("src", "img/cross.png");
      count++;
      br = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#nineimg").setAttribute("src", "img/circle.png");
      count++;
      br = 0;
    }
    nineimg = 1;
  }
  if (count % 2 == 0) {
    message.innerHTML = "Player One's turn to paly";
  } else {
    message.innerHTML = "Player Two's turn to paly";
  }
  setTimeout(p2, 100);
});
function p2() {
  if (tl == 0 && tm == 0 && tr == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (ml == 0 && mm == 0 && mr == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (bl == 0 && bm == 0 && br == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tl == 0 && ml == 0 && bl == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tm == 0 && mm == 0 && bm == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tr == 0 && mr == 0 && br == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tl == 0 && mm == 0 && br == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tr == 0 && mm == 0 && bl == 0) {
    alert("player two won!");
    scoretwo += 1;
    setTimeout(resetGame, 1000);
  }
  if (tl == 1 && tm == 1 && tr == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (ml == 1 && mm == 1 && mr == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (bl == 1 && bm == 1 && br == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (tl == 1 && ml == 1 && bl == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (tm == 1 && mm == 1 && bm == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (tr == 1 && mr == 1 && br == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (tl == 1 && mm == 1 && br == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  if (tr == 1 && mm == 1 && bl == 1) {
    alert("player one won!");
    scoreone += 1;
    setTimeout(resetGame, 1000);
  }
  ones.innerHTML = scoreone;
  twos.innerHTML = scoretwo;
}
