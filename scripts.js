
let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here

// watch for keyboard input
document.addEventListener("keyup", (event) => {
    const keyName = event.key; // https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values#numeric_keypad_keys
    if (new RegExp("[0-9]").test(keyName)) { // check if key pressed is a number
        appendToDisplay(keyName) // append to display
    }
        

})