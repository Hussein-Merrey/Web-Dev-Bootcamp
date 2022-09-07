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

//Coding Exercise 39: isShortsWeather Function
function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    }
    else
        return false;
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

//Coding Exercise 40: lastElement Exercise
function lastElement(array) {
    if (array.length !== 0) {
        return array[array.length - 1];
    }
    else
        return null;
}
console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

//Coding Exercise 41: Capitalize Exercise
function capitalize(word) {
    let capitalized = word[0].toUpperCase() + word.slice(1);
    return capitalized;
}
console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));


//Coding Exercise 42: Sum of Array Exercise
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));




//Coding Exercise 43: Day of the Week Exercise
function returnDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wensday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return null;

    }
}
console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));


//Coding Exercise 43: Function Expression Exercise
const square = function (num) {
    return num * num;
}
console.log(square(4));
console.log(square(3));

//Coding Exercise 44: Methods Exercise
const Square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function (side) {
        return side * 4;
    }
}
console.log(Square.area(10));
console.log(Square.perimeter(10));

//Coding Exercise 45: Egg Laying Exercise
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1
        return "EGG"
    }
}
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);