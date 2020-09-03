// 1

// == loose comparison: checks for value and behind the scenes converts one for comparison's sake
// === strict comparison: checks for value and type

// console.log(3 == "3") // true
// console.log(3 === "3") // false

// let a = 43
// console.log(a)

// a = 2
// console.log(a)

// 2

// let Anna = true

// console.log(Anna != true ? 'trueresult' : 'falseresult') //Option 1
// console.log(Anna == !true ? 'trueresult' : 'falseresult') //Option 2 (a bit clunky)
// console.log(!Anna ? 'trueresult' : 'falseresult') //Option 3

// let Lewes = 'Welder'
// console.log(Lewes ? 'trueLewes' : 'falseLewes') // true
// console.log(Lewes == true ? 'trueLewes' : 'falseLewes') // false

//3

let firstName, givenName

firstName = 'Stacey'
let name = givenName || 'John' || firstName

console.log(name)

// Saad: ""
// Bekh: "Stacey"
// Lewes: "Stacey"
