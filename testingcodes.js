let name = 'Mike'
let temperature = 20
temperature = temperature + 2
console.log(temperature)

// Converting temperatures

// C to F formula:
// F = C * 1.8 + 32

let celsius = 10
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit)

let bool = '1' === 1
console.log(bool)



let cash = 30
let price = 40
let difference = cash - price

if (cash > price) {
    console.log (`you paid extra - here is $${difference} change`)
}
else if (cash === price) {
    console.log('you paid the exact correct price')
}
else {
    console.log (`not enough, you still owe $${difference * -1}`)
}




// && operator


let cash = 50
let price = 40
let isStoreOpen = true

if (cash >= price && isStoreOpen === true) {
    console.log ('print the receipt')
}
//=== true is unneccesary when using && or ||


// || operator

let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price || isStoreOpen) {
    console.log ('print the receipt')
}
// !isStoreOpen would mean the opposite, ie store is closed



// Ternary Operator

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribed = true
let loggedIn = true

let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
console.log(str);