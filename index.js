// global scope variables
var changingNumber = 0
var list           = [' Jayden ', ' Max ', ' Angelika ']
var numbers        = [1, 2, 3, 4]

// declared i through let declaration
for (let i = 0; i < list.length; i++) {
  // i is accessible
  console.log(`list[${i}]`)
};

// i is NOT accessible
console.log(i)

// we can still call global variables
console.log(`${changingNumber} ${list} ${numbers}`)

// we can also still change the global variables
changingNumber = 1
console.log(changingNumber)

// declare const variable
const singer = ' Bruno Mars '

console.log(singer)

// attempt to redeclare
singer = ' Cardi B. '

// should throw err
console.log(singer)
