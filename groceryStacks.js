// Empty array for groceries. The max is 5
let groceryStack = [];

// checks if there's anything in the stack. If yes, it returns the last one. If not, just tells us it's empty.
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack's empty, nothing here.");
        return null;
    } else {
        return groceryStack[groceryStack.length - 1];  // Last thing in the stack
    }
}

// Adds a new item to the stack, unless it's full
function push(item) {
    if (groceryStack.length < 5) {
        groceryStack.push(item);  // add at the end of the stack
        console.log(`Added: ${item}`);
        printStack();  // Show what we've got so far
    } else {
        console.log("Stack's full. Can't take any more.");
    }
}

// rremoves the last item
function pop() {
    if (groceryStack.length === 0) {
        console.log("Nothing to remove. Stack's empty.");
    } else {
        let removedItem = groceryStack.pop();  // Take the last one off
        console.log(`Removed: ${removedItem}`);
        printStack();  // Show what's left
    }
}

// This just prints the stack so we can see what's in it
function printStack() {
    console.log("Current stack:", groceryStack.join(", "));
}

// Example run. Prompts the user for items 5 times
for (let i = 0; i < 5; i++) {
    let item = prompt("Enter a grocery item:");  // Ask for an item
    push(item);  // Toss it on the stack
}

pop();  // Removes
pop(); 
