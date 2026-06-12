function calculateResult() {
  try {
    let screen = document.getElementById("screen");
    screen.value = eval(screen.value);
    currentDisplay = screen.value; 
  } catch (error) {
    alert("Invalid Equation");
    clearDisplay();
  }
}
