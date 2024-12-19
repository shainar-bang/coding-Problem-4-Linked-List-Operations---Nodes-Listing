class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;

    }

    print() {
        let current = this.head;
        const items = [];
        while (current) {
            items.push(current.value);
            current = current.next;

        }
        console.log(items);
    }
}

const items = new LinkedList();
items.append("Data Structures - Array");
items.append("Variable Type - Integer");
items.append("Sorthing Algorithm - Bubble Sort");
items.print();
