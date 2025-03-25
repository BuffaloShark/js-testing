// // parameter
// function sumOfTwoNumbers (num1, num2){
//     return num1 + num2
// }
// //argument
// console.log(sumOfTwoNumbers(10, 10));


// Convert Celsius to Fahrenheit - MY SOLUTION
function cToF (C, F) {
    return F = C * 1.8 + 32
}

console.log(cToF(30));

// Convert Celsius to Fahrenheit - THEIR SOLUTION
function convertCelsiusToFahrenheit (celsius) {
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(10));

// Another solution using const and Arrow Function
const convertCelsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(10));