let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiButton = document.querySelector("#multi");
let divButton = document.querySelector("#div");

let resultDiv = document.querySelector("#result");

function addition(x, y) {
    console.log(x + y);
    return x + y;
}

plusButton.addEventListener("click", function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    // addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
});

minusButton.addEventListener("click", function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    // addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
});

multiButton.addEventListener("click", function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    // addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
});

divButton.addEventListener("click", function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    // addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
});