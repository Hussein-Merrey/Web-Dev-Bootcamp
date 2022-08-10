//Codin Exercise:18 string methods
const message = "    TASTE THE RAINBOW!  ";
const whisper = message.toLowerCase().trim();
console.log(whisper);

//Coding Exercise:19 string methods
const word = "skateboard";
const facialHair = word.slice(5).replace("o", "e");
console.log(facialHair);


//Coding Exercise:20 String Template literal
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log(roll);



