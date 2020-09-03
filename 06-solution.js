// Logical operators: &&, ||, !
let dogIsBetter = true
let catIsBetter = false
console.log(dogIsBetter && catIsBetter) //a: false
console.log(dogIsBetter || catIsBetter) //b: true
console.log(!(dogIsBetter && catIsBetter)) //c: true

// Comparative Operators: >, <, >=, ==, etc.
// Mathematical equations will automatically
// happen before and after the comparative operator

let atoms = 1000
let sandGrains = 10000
let starsInSky = 1000000

console.log(atoms > starsInSky && atoms > sandGrains) //a: false
console.log(atoms < starsInSky && atoms < sandGrains) //a: true
console.log(atoms != sandGrains) //b: true
console.log(starsInSky < sandGrains || starsInSky > atoms) //c: true
console.log(atoms == starsInSky || atoms != sandGrains) //d: true
console.log(atoms >= 10 && sandGrains <= 10) //e: false
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100) //f: true

// == in English: "is the same as..."  : French "la meme"
// != in English: "is different to"    : French "difference"
