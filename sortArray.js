// Convert string into a array then get converted to integer
//let numbers = prompt(`Input Number: `).split(',').map(Number);
//let names = prompt(`Input Names: `).split(',');

//Same thing, but I just don't want to run this code on a browser
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = [`Zenvo`, `Erica`, `Jordie`, `Alicia`, 'Redon'];

//Merge arrays into a single array
let mix = numbers.concat(names);
console.log(`Wow they got mixed!: ${mix}`)

//sort the numbers in reverse numerical order
let sortedNum = numbers.sort(function(a, b){return b-a});
console.log(sortedNum);

//sort names alphabetically
let sortedNames = names.sort();
console.log(sortedNames);
