const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector("h3");

let outputString = "";

function convert() {
  outputString = "";
  let inputString = input.value;
  console.log(inputString);
  for (let index = 0; index < inputString.length; index++) {
    let tempChar = inputString[index];
    if (tempChar == "s") {
      outputString += "z";
    } else if (tempChar == "f") {
      outputString += "v";
    } else if (tempChar == "t") {
      outputString += "d";
    } else if (tempChar == "v") {
      outputString += "b";
    } else if (tempChar == "p") {
      outputString += "b";
    } else if (tempChar == "k") {
      outputString += "g";
    } else if (tempChar == "š") {
      outputString += "ž";
    } else if (tempChar == "č") {
      outputString += "dž";
    } else if (tempChar == "ž") {
      outputString += "z";
    } else if (tempChar == "ć") {
      outputString += "dj";
    } else {
      outputString += tempChar;
    }
  }
  output.innerText = outputString;
}

button.addEventListener("click", convert);
