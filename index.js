// Code your solutions in this file
// function printBadges(names) {
//   for (let i = 0; i < names.length; i++)
//   console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
//   return names
// }

// function tailsNeverFails() {
//   let tails = 0
//   while (Math.random() >= 0.5) {
//     // tails += 1
//     tails ++
//   }
//   return `You got ${tails} tails in a row!`
// }

function writeCards(names, event) {
  let newArray = []
  for (i = 0; i < names.length; i++) {
    newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }
  return newArray;
}

function countdown(integer) {
  while (integer >= 0) {
    console.log(integer)
    integer--;
  }
}