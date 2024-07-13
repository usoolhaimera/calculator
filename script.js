let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = "";

function updateDisplay(value) {
  string = value;
  display.value = string;
}

function handleInput(input) {
  if (input === "DEL") {
    string = string.substring(0, string.length - 1);
    updateDisplay(string);
  } else if (input === "AC") {
    string = "";
    updateDisplay(string);
  } else if (input === "=") {
    try {
      string = eval(string);
      updateDisplay(string);
    } catch {
      updateDisplay("Error");
      string = "";
    }
  } else {
    // Prevent consecutive operators
    const lastChar = string[string.length - 1];
    if (
      ["+", "-", "*", "/", "%"].includes(lastChar) &&
      ["+", "-", "*", "/", "%"].includes(input)
    ) {
      return;
    }
    string += input;
    updateDisplay(string);
  }
}

// Event listener for button clicks
buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789/*-+.%=BackspaceEnter";
  if (allowedKeys.includes(e.key)) {
    if (e.key === "Enter") {
      handleInput("=");
    } else if (e.key === "Backspace") {
      handleInput("DEL");
    } else {
      handleInput(e.key);
    }
  }
});
