// Declare two variables 
let raceCar = prompt(`Write whatever: `);
let recorder = prompt(`Do another one: `);

function reverser(str){
    //turn the string into an array, then get reversed, then join again as a string
    return str.split(``).reverse().join(``);
}

console.log(`Original: ${raceCar}`);
console.log(`Reversed: `, reverser(raceCar));

//The second one
console.log(`Original: ${recorder}`);
console.log(`Reversed: `, reverser(recorder));
