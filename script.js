let display = document.getElementById("display");

// Add value to display
function appendValue(value) {

    // Auto-convert symbols to JS operators
  if (value === "×") value = "*";
  if (value === "÷") value = "/";
  

  if (display.value === "Error") {
    display.value = "";
  }

  display.value += value;
}

function clearDisplay(){

    display.value="";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
