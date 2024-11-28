const textEl = document.querySelector(".textarea");
const morseEl = document.querySelector(".morsearea");
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

// function textToMorse(input) {
//   for (let i = 0; i < Object.keys(morseCode).length; i++) {
//     if (Object.keys(morseCode)[input]) return Object.values(morseCode)[input];
//   }
// }
// textEl.addEventListener("keypress", (e) => {
//   morseEl.value += morseCode[e.key] + " ";
// });
textEl.addEventListener("keydown", (e) => {
  let input = e.key;
  if (morseCode[input]) {
    morseEl.value += morseCode[input] + " ";
  } else if (input === " ") {
    morseEl.value += " ";
  }
});
textEl.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    let morseInput = morseEl.value.trim().split(" ");
    morseInput.pop();
    morseInput = morseInput.join(" ");
    morseCode.value = morseInput;
  }
});
