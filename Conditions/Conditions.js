//Coding Exercise:20 Coditional
let num = prompt("enter a number")
if (num % 2 === 0) {
    console.log("even");
};

//Code exercise 22
const phrase = "go";

if (phrase === "stop") {
    console.log("red");
}
else if (phrase === "slow") {
    console.log("yellow");
}
else if (phrase === "go") {
    console.log("green");
}
else {
    console.log("purple");
}


// Code exercise 23 Nested condition

const numb = 102;

if (numb <= 100) {
    if (numb >= 50) {
        console.log("HEY!");
    }
} else {
    if (numb < 103) {
        if (numb % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}