// Today's temperature is 293 kelvin
let kelvin = 0
// converts kelvin to celsius
let celsius = kelvin - 273
// converts celsius to fareheit
let fahrenheit = celsius * (9/5) + 32
// rounds the temperature
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`)

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees in Newton.`)
