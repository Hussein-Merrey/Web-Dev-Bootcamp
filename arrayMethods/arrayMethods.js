//Coding Exercise 47: Map Practise
const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
{ first: 'Harry', last: 'Potter' },
{ first: 'Hermione', last: 'Granger' },
{ first: 'Ron', last: 'Weasley' },
{ first: 'Rubeus', last: 'Hagrid' },
{ first: 'Minerva', last: 'McGonagall' },
{ first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (fname) {
    return fname.first;
})
console.log("First Names : " + firstNames);


//Coding Exercise 48: Arrow Function Exercise
const greet = (name) => {
    return "Hey " + name + "!"
}
console.log(greet("Hagrid"));
console.log(greet("Luna"));

//Coding Exercise 49:Filter Exercise
function validUserNames(usernames) {
    let filteredUserNames = usernames.filter(username => username.length < 10)
    return filteredUserNames;
}

console.log(validUserNames(["husseinMerrey", "Hassan", "MMbutto", "PrinceMwanyambe", "Huscko96"]));


//Coding Exercise 50:Some/Every Exercise
function allEvens(numbers) {
    const isAllEven = numbers.every(number => number % 2 === 0)
    return isAllEven;
}
console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
