let currentDisplay = "";

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById("screen").value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  document.getElementById("screen").value = "";
}
