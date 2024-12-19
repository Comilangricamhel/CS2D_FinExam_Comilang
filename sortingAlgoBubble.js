// to hold the numbers
let arr = [];

// Prompt user to add the numbers to the array
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
    arr.push(num);  // Add the user input to array
}

console.log("Unsorted:", arr);

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {  // Go through the array n-1 times
        for (let j = 0; j < n - i - 1; j++) {  // Compare close items
            console.log(`Comparing: ${arr[j]} and ${arr[j+1]}`);  // Log the comparison
            if (arr[j] > arr[j + 1]) {  // check if the left is bigger to swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);  // prints the swap
            }
        }
    }
    return arr;
}

//runs bubbleSort function and log the final sorted array
let sortedArray = bubbleSort(arr);
console.log("Sorted Array:", sortedArray);
