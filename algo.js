

function Algo (name, age, statutes) {
    console.log(`My name is ${name}, I'am ${age}, and ${statutes}`)
}
Algo ("Hajar BENDHIBA", 25, "I'am a full stuck developper student at Gomycode")




var Algo=["Hajar BENDHIBA", 25, "I'am a full stuck developper student at Gomycode"]

console.log("The length of the array is : ", Algo.length)

Algo.unshift('Hi')
console.log(Algo)

Algo.push('.')
console.log(Algo)

delete Algo[2]
console.log(Algo)

Algo[2]="25 years old"
console.log(Algo)
