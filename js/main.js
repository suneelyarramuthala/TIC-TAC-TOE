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

start.addEventListener("click", () => {
  document.querySelector("#oneimg").setAttribute("src", "");
  document.querySelector("#twoimg").setAttribute("src", "");
  document.querySelector("#threeimg").setAttribute("src", "");
  document.querySelector("#fourimg").setAttribute("src", "");
  document.querySelector("#fiveimg").setAttribute("src", "");
  document.querySelector("#siximg").setAttribute("src", "");
  document.querySelector("#sevenimg").setAttribute("src", "");
  document.querySelector("#eightimg").setAttribute("src", "");
  document.querySelector("#nineimg").setAttribute("src", "");
});
reset.addEventListener("click", () => {});

one.addEventListener("click", () => {
  if (oneimg == 0) {
    if (count % 2 == 0) {
      document.querySelector("#oneimg").setAttribute("src", "img/cross.png");
      count++;
      tl = 1;
    } else if (count % 2 !== 0) {
      document.querySelector("#oneimg").setAttribute("src", "img/circle.png");
      count++;
      tl = 0;
    }
    oneimg = 1;
  }
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
});
