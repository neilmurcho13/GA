// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

// window.alert('TEST');

// window.confirm('TEST');



while (true) {

let result = null; 

let number1 = prompt("Please enter the first number");
number1 = parseFloat(number1); 

let number2 = prompt("Please enter the second number or leave blank for square root"); 
number2 = parseFloat(number2); 

let operator = prompt("Do you want to add, substract, divide or multiply the numbers? Please type either: + - / * or expo (for exponential)")


// let test = number2 + number2; 
// console.log(test); 

if (operator === '+') {
result = number1 + number2; 
}

else if (operator === '-') {
result = number1 - number2; 
}

else if (operator === '/') {
    result = number1 / number2; 

} else if (operator === '*') {
    result = number1 * number2; 

} else if (operator === 'expo') {
        result = Math.pow(number1, number2);
        operator = 'to the power of' 
    
} else  window.alert('Calculation fail');

window.alert("Your calculation will be " + number1 + " " + operator + " " + number2);

window.alert(result);
// window.alert(number1 + operator + number2);

}
