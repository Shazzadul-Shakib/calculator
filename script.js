// Many more to go


// Operations here
function pmOperation(pm) {
  const inputField = document.getElementById('input');
  const result = document.getElementById('result');
  let needIndex = inputField.value.split(pm);
  if (pm == '+') {
    const resultM = parseFloat(needIndex[0]) + parseFloat(needIndex[1]);
    result.value = resultM;
  }
  else if(pm == '-'){
    const resultM = parseFloat(needIndex[0]) - parseFloat(needIndex[1]);
    result.value = resultM;
    }
  else if(pm == 'x'){
    const resultM = parseFloat(needIndex[0]) * parseFloat(needIndex[1]);
    result.value = resultM;
    }
  else if(pm == '÷'){
    const resultM = parseFloat(needIndex[0]) / parseFloat(needIndex[1]);
    result.value = resultM;
    }
}
// For all clear the input and result
function allClear() {
  const inputField = document.getElementById('input');
  inputField.value = '';
  const result = document.getElementById('result');
  result.value = '';
}

// For backspace
function backSpace() {
  const inputField = document.getElementById('input');
  let inputFieldValue = inputField.value;
  inputFieldValue = inputFieldValue.substr(0, inputFieldValue.length - 4);
  document.getElementById('input').value = inputFieldValue;
}
// Master function here for click events
function getData(event) {
  const data = event.target.innerText;
  const inputField = document.getElementById('input');
  const newData = inputField.value + event.target.innerText;
  // click  not equal to "="
  if (data != "=") {
    inputField.value = newData;
     if (data == "AC") {
      allClear();
    }
    else if (data == "DEL") {
      backSpace();
    }
  }
// Click equal to "="
  else {
    const plus = inputField.value.includes("+");
    const minus = inputField.value.includes("-");
    const multiply = inputField.value.includes("x");
    const division = inputField.value.includes("÷");
    if (plus == true) {
      pmOperation('+');
    }
    else if (minus == true) {
      pmOperation('-');
    }
    else if (multiply == true) {
      pmOperation('x');
    }
    else if (division == true) {
      pmOperation('÷');
    }
  }
}