import para from "./paragraph.js";

let count = 0;
let errorCount = 0;
let appendTagSize = 0;
let thisIsAnotherCount = 0;
let startingValue = 0;
let endingValue = 150;
let even;
let time = 10;
let isTimerStarted = false;
let splitPara = 10;
let backward;
let text_para = para;
let text_color = "#dd3f31";
let docText = document.getElementsByClassName("typing-text")[0];
const timerBtns = document.querySelectorAll(".btn-menu-setting-timer");
const space_bar = document.querySelector(".space-bar");

//for typing word formatting start
let appendTag = [];

const storeText = text_para.split("");
console.log(storeText[count]);

function increasePara() {
  //remove old tags
  const elements = document.querySelectorAll(".removeStyle");
  elements.forEach((element) => {
    element.remove();
  }); //removing text para from body

  while (appendTag.length) {
    appendTag.pop();
  } //removing text from appendTag array
  appendTagSize = 0; //verify it again
  paraGenerator();
}

function paraGenerator() {
  //yha par ho rhi hai galti meru su
  for (let numb = 0; numb <= endingValue; numb++) {
    if (count < storeText.length) {
      appendTag[
        numb
      ] = `<span class="_${numb}  removeStyle">${storeText[count]}</span>`;
      if (numb < endingValue) count++;
      else {
        count -= 150;
      }
    } else {
      console.log("end of para");
    }
  }

  document.getElementsByClassName("typing-text")[0].innerHTML =
    appendTag.join(""); //adding all text from array to innerHTML
  even = document.getElementsByClassName("typing-text")[0].textContent;
  //adding body text from body to even variable;
}
paraGenerator();
//typing word formatting end

//navbar
// function setting_menu() {
//   document.getElementsByClassName("score-card")[0].style.display = "none";
// }

//function for previting default's

//net speed
function netSpeed(totalTypedEntry, timeTaken, incorrectTypedEntry) {
  let timeInMin = timeTaken / 60;
  return Math.round(
    (totalTypedEntry / 5 - incorrectTypedEntry / 5) / timeInMin
  );
}
//gross speed
function grossSpeed(totalTypedEntry, timeTaken) {
  let timeInMin = timeTaken / 60;
  return Math.round(totalTypedEntry / 5 / timeInMin);
}
//accuracy
function accuracy(totalTypedEntry, incorrectTypedEntry) {
  return (
    // Math.floor((totalTypedEntry - incorrectTypedEntry) / totalTypedEntry) * 100
    Math.round(
      ((totalTypedEntry - incorrectTypedEntry) * 100) / totalTypedEntry
    )
  );
}
//for slider at present time
function activeLetter() {
  document.getElementsByClassName(
    "_" + appendTagSize
  )[0].style.textShadow = `1px 0 ${shadowColor}, -1px 0 ${shadowColor}, 0 1px ${shadowColor}, 0 -1px ${shadowColor},1px 1px ${shadowColor}, -1px -1px ${shadowColor}, 1px -1px ${shadowColor}, -1px 1px ${shadowColor}`;

  if (storeText[appendTagSize] == " ") {
    space_bar.classList.toggle("space-show");
  } else if (space_bar.classList.contains("space-show")) {
    space_bar.classList.remove("space-show");
  }

  if (count > 0) {
    exitLetter();
  } else {
    console.log("it is starting character");
  }
}
//starting slider
activeLetter();

//previous slider letter
function exitLetter() {
  document.getElementsByClassName("_" + (appendTagSize - 1))[0].style.color =
    "#f49991e9";
  document.getElementsByClassName(
    "_" + (appendTagSize - 1)
  )[0].style.textShadow = "none";
}

//reset or restart
document.querySelector(".restart").addEventListener("click", reset);
document.querySelector(".reset-pause").addEventListener("click", reset);
//reset function
function reset() {
  //score-card
  document.getElementsByClassName("score-card")[0].style.display = "none";
  count = 0;
  thisIsAnotherCount = 0;
  errorCount = 0;
  appendTagSize = 0;
  isTimerStarted = false;

  //function call
  paraGenerator();
  activeLetter();
  //time interval
  //set time again
  setTimerInUi(time);
}

//event listener for setting page
timerBtns.forEach((timerBtn) => {
  timerBtn.addEventListener("click", setTimeOfTyping);
});
function setTimeOfTyping(e) {
  reset();
  time = e.target.getAttribute("data-time");
  setTimerInUi(time);
  isTimerStarted = false;
  document.querySelector(".setting").classList.add("setting_container");
  document.querySelector(".setting").classList.remove("show");
}
// setting time end

//set timer in ui
function setTimerInUi(v) {
  document.querySelector("#data").innerHTML = v;
}
//end
//stopwatch
let countdownInterval;
function startCountdown() {
  let copyTime = time;
  countdownInterval = setInterval(function () {
    if (copyTime >= 0) {
      setTimerInUi(copyTime--);
    } else {
      clearInterval(countdownInterval);
      endCard();
    }
  }, 1000);
}
//end of stopwatch

// Listen for the keypress event on the window object
window.addEventListener(
  "keypress",
  function (e) {
    var audio = new Audio("./clickaudio.mp3");
    audio.play();
    audio.volume = 0.15;
    if (!isTimerStarted) {
      startCountdown();
      isTimerStarted = true;
    }

    console.log(even[0] + " this is even count");
    // Get the current character to check against
    let spellCheck = even.substring(appendTagSize, appendTagSize + 1);
    console.log(spellCheck + " this is spellchecker");

    if (e) {
      let correctKey = spellCheck === e.key;

      if (thisIsAnotherCount != text_para.length) {
        if (appendTagSize < appendTag.length) {
          console.log("in first if");
          // this is for target completion
          if (correctKey && thisIsAnotherCount < text_para.length) {
            appendTagSize++; //for increasing size of append tag count
            count++; //how many characters actually user input
            thisIsAnotherCount++;
            appendTag.length > appendTagSize ? activeLetter() : false; //yha par hi increasePara() call kar skte hai hum
            // text_para.length > count ? activeLetter() : false;
          } else {
            errorCount++;
          }
        } else {
          console.log("in first else");
          increasePara();
        }
      } else {
        endCard();
      }
    }
  },
  false
);

// end reponse
//this logic is for score in the end
function endCard() {
  document.getElementsByClassName("score-card")[0].style.display = "flex";
  //net speed
  document.getElementsByClassName("net-speed")[0].innerHTML = netSpeed(
    count + 1,
    time,
    errorCount
  );
  //gross speed
  document.getElementsByClassName("gross-speed")[0].innerHTML = grossSpeed(
    count + 1,
    time
  );
  //accuracy
  document.getElementsByClassName("accuracy")[0].innerHTML = accuracy(
    count + 1,
    errorCount
  );
}
