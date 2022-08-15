//Coding Exercise 35: Heart Fuction Exercise
function printHeart() {
    console.log("<3")
}
printHeart()

//Coding Exercise 36: Rant Exercise
function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant("I hate beets")

//Coding Exercise 37: Multiple Args Exercise
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 5)
isSnakeEyes(4, 5)

//Coding Exercise 38: Return Value Practise
function multiply(x, y) {
    return x * y
}
console.log(multiply(2, 3))
console.log(multiply(9, 9))
console.log(multiply(5, 4));



