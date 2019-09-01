"use strict";

document.querySelector(".overlay").addEventListener("click", animation);
let i = 0;
let text = document.querySelector("#typewriter")
  .textContent; /*Import text from HTML document*/
let trim = text.trim(); /*Remove all trailling occurrences*/
let string = trim.split(""); /*Split all letters*/
let sound1 = document.getElementById("typekey1");
let sound2 = document.getElementById("typekey2");

function animation() {
  console.log("Overlay is gone");
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("#typewriter").textContent =
    " "; /*Makes  HTMLtext hidden*/
  type();
}

function type() {
  document
    .querySelector("#typewriter")
    .append(string[i]); /*Go to next element in string*/
  let speed = Math.floor(
    Math.random() * 300 + 200
  ); /*random interval of speeds*/
  setTimeout(letter, speed);
  console.log(speed);
  if (speed < 300) {
    sound1.play();
    /* Lavet af Simon Christiansen */
    console.log("Lyd 1");
  } else {
    sound2.play();
    console.log("Lyd 1");
  }
}

function letter() {
  if (i < string.length - 1) {
    i++;
    type();
    console.log(i);
  } else {
    console.log("Typing is done");
  }
}

// "use strict";
// document.querySelector(".overlay").addEventListener("click", animation);

// function animation() {
//   console.log("Overlay is gone");
//   document.querySelector(".overlay").style.display = "none";
//   type();
// }

// function type() {
//   console.log("Function type is called");
//   let text = document.querySelector("#typewriter")
// Lavet af Simon Christiansen
//     .textContent; /*Import text from HTML document*/
//   document.querySelector("#typewriter").textContent =
//     " "; /*Makes  HTMLtext hidden*/
//   let trim = text.trim(); /*Remove all trailling occurrences*/
//   let string = trim.split(""); /*Split all letters*/
//   let speed = Math.floor(
//     Math.random() * 413 + 200
//   ); /*random interval of speeds*/

//   for (let i = 0; i <= string.length - 1; i++) {
//     /*for loop that repeats itself untill statement is reached;*/
//     setTimeout(function() {
// Another Version with for statement, missing random math part
//       document
//         .querySelector("#typewriter")
//         .append(string[i]); /*Go to next element in string*/
//       console.log(i);
//       console.log(speed);
//     }, i * speed);
//   }
// }
