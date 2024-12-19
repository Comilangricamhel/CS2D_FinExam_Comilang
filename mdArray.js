let names = prompt(`Genevieve, Juan, Luna, Gabriel, Elise`).split(`,`);
let ages = prompt(`24, 65, 21, 5, 9`).split(`,`);

// the restructured array
for (let i = 0; i < names.length; i++) {
    // remove whitespace from each name and age, and convert the age to a number
    let name = names[i].trim();       // Remove spaces from the name
    let age = parseInt(ages[i].trim()); // Convert age from a string to a number

    // add it to the restructuredArray
    restructuredArray.push([name, age]);
}

// Log the restructured array
for (let i = 0; i < restructuredArray.length; i++) {
    console.log(restructuredArray[i]);
}
