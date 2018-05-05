const dollarAmount = 3.19
const piggyBank = {
    "pennies": 0,
    "nickles": 0,
    "dimes": 0,
    "quarters": 0
};

let remainder = dollarAmount * 100

//how many times divisible by 5? 
let numPennies = Math.floor(remainder / 1)
// send value to piggybank "pennies"
piggyBank.pennies = numPennies
//get remainder of coins
remainder -= numPennies * 1

//how many times divisible by 5? 
let numNickles = Math.floor(remainder / 5)
// send value to piggybank "nickles"
piggyBank.nickles = numNickles
//get remainder of coins
remainder -= numNickles * 5

//how many times divisible by 5? 
let numDimes = Math.floor(remainder / 10)
// send value to piggybank "dimes"
piggyBank.dimes = numDimes
//get remainder of coins
remainder -= numDimes * 10

//how many times divisible by 25? 
let numQuarters = Math.floor(remainder / 25)
// send value to piggybank "quarters"
piggyBank.quarters = numQuarters
//get remainder of coins
remainder -= numQuarters * 25

console.log(piggyBank)
