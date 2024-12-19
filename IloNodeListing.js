class Node {
    constructor(value) {
        this.value = value;  // Store the value passed in
        this.next = null;    // The next node starts as null (nothing after it yet)
    }
}

//  class manages the linked list itself
class LinkedList {
    constructor() {
        this.head = null;  // At the beginning, the list is empty
    }

    // this method adds a new value to the end of the list
    append(value) {
        const newNode = new Node(value);  // Creates a node with a value

        if (!this.head) {                 // If list is empty
            this.head = newNode;          // Make the new node the first node
        } else {
            let current = this.head;      // Start at the first node
            while (current.next) {        // Keep going until we find the last node
                current = current.next;
            }
            current.next = newNode;       // Add the new node at the end of the list
        }

        this.print();  // Call the print function to show the updated list
    }

    // This method prints out the current state of the list
    print() {
        let current = this.head;  // Start at the first node
        let list = '';            // This will store the string version of the list

        while (current) {         // Go through each node
            list += current.value + (current.next ? ' -> ' : '');  // Add to the string
            current = current.next;  // Move to the next
        }
        console.log(list);  // Print the final list
    }
}

// new linked list
const list = new LinkedList();

// Add items to the list
list.append("Data Structures – Array");
list.append("Variable Type – Integer");
list.append("Sorting Algorithm – Bubble Sort");
