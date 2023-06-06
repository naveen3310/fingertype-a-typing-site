// // let typingTime = document.querySelector(".typing-timer");
// // let [startingTime, pausedTime, pause, resetTime] = [
// //   typingTime.innerHTML,
// //   0,
// //   false,
// //   false,
// // ];

// // function countDown() {
// //   let stopWatch = setInterval(() => {
// //     if (!pause && startingTime > 0) {
// //       typingTime.innerHTML = startingTime;
// //       --startingTime;
// //     } else {
// //       typingTime.innerHTML = pausedTime;
// //       pausedTime = startingTime;
// //       clearInterval(stopWatch);
// //     }
// //   }, 1000);
// // }
// //here is code for coutDown
// function getData(selector) {
//   return document.querySelector(selector).innerHTML;
// }

// // Retrieve the initial data
// var retrievedData = getData("#data");
// console.log("Retrieved Data:", retrievedData);

// // Countdown timer
// var countdown = retrievedData;
// var countdownInterval;

// function startCountdown() {
//   countdownInterval = setInterval(function () {
//     console.log("Countdown:", countdown);
//     countdown--;

//     if (countdown < 0) {
//       clearInterval(countdownInterval);
//       console.log("Countdown finished!");
//     }
//   }, 1000);
// }

// // Play button functionality
// document.getElementById("play").addEventListener("click", function () {
//   startCountdown();
// });

// // Pause button functionality
// document.getElementById("pause").addEventListener("click", function () {
//   clearInterval(countdownInterval);
//   console.log("Countdown paused!");
// });
