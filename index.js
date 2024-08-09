// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number

let user = prompt("put a number in")
user = parseInt(user)
// Prompt the user for another number that is bigger than the first number and cast it to a number
let user1 = prompt("put a number bigger than the first")
user1 = propmt(user1)
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let x = user; x <= user1; x++){
  connsole.log(x)
}





// PART 2: Averaging an array
// Create an array of numbers 
let number = [1,2,3,3,5]

// Write a for loop that calculates the sum of the elements 

let total = 0

for(let y = 0; y <= number.length-1; y++){
  total += number[y]
  console.log(total)
}


// Using the sum, calculate the average of all the elements (sum divided by the length of the array)


