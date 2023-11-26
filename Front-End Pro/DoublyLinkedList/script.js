'use strict'

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null
    }
}



class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        if (this.head === null) return true;
        return false;
    }

    getSize() {
        let temp = this.head;
        let count = 0;

        while (temp !== null) {
            count++;
            temp = temp.next;
        }

        console.log('Size of list: ' + count);
    }

    getHead () {
        console.log('Head of list: ' + this.head);
    }

    insertEnd(val) {
        let temp = new Node(val);

        if (this.head == null) {
            this.head = temp;
            this.tail = temp;
        }

        else {
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = this.tail.next;
        }
    }

    insertStart(val) {
        let temp = new Node(val);

        if (this.head == null) {
            this.head = temp;
            this.tail = temp;
        }

        else {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
    }

    insertAt(val, pos) {
        if (pos === 0) return this.insertStart(val);

        let index = pos;
        let curr = this.head;

        while (pos > 1) {
            pos -= 1;
            if (curr === null)
                return console.log(
                    "Incorrect Position! Index does not exist.",
                    pos,
                    curr.data
                );

            curr = curr.next;
        }

        let temp = new Node(val);

        temp.next = curr.next;
        temp.prev = curr;
        curr.next.prev = temp;
        curr.next = temp;
    }

    deleteAt(pos) {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        if (pos === 0) return this.deleteStart();

        let curr = this.head;

        while (pos > 0) {
            pos -= 1;

            if (curr == null)
                return console.log(
                    "Incorrect Position! Index does not exist."
                );

            curr = curr.next;
        }

        if (curr === this.tail) return this.deleteEnd();

        let previous = curr.prev;
        let next = curr.next;

        previous.next = next;
        next.prev = previous;

        let delValue = curr.data;
        curr = null;
        console.log("Removed element: " + delValue);
    }


    deleteStart() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        let curr = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        let delValue = curr.data;
        curr = null;
        console.log("Removed element: " + delValue);
    }

    deleteEnd() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }
        let curr = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        let delValue = curr.data;
        curr = null;
        console.log("Removed element: " + delValue);
    }

    deleteVal(val) {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }

        if (this.head.data === val)
            return this.deleteStart();
        let curr = this.head;

        while (curr && curr.data !== val) {
            curr = curr.next;

            if (curr == null)
                return console.log(
                    "Incorrect Value! Elements does not exist."
                );
        }

        if (curr === this.tail) return this.deleteEnd();

        let previous = curr.prev;
        let next = curr.next;

        previous.next = next;
        next.prev = previous;

        let delValue = curr.data;
        curr = null;
        console.log("Removed element: " + delValue);
    }

    search(x) {
        let temp = this.head;

        let pos = 0;

        while (temp.data !== x
        && temp.next != null) {

            pos++;

            temp = temp.next;
        }

        if (temp.data !== x) return -1;

        console.log('Found: ' + x);
        return (pos + 1);


    }

    toArray() {
        const res = [];
        let curr = this.head;

        while(curr) {
            res.push(curr.data);
            curr = curr.next;
        }
        return res;
    }
    display() {
        if (!this.isEmpty()) {
            let curr = this.head;
            while (curr !== null) {
                console.log(curr.data);
                curr = curr.next;
            }
        }
    }
}

const list1 = new DoublyLinkedList();

list1.insertStart('aboba');
list1.insertEnd(288);
list1.insertStart('Kavun');
list1.insertAt(28, 0)

list1.display();
list1.getSize();
list1.getHead();

list1.deleteAt(2);
list1.deleteVal(288); //Тут запара адовая вышла, пришлось поднимать ютуб, индусов, chatПомогитеТупомуУстроиться... но я справился :)

list1.search('Kavun');
list1.display();

const arrFromList = list1.toArray();
console.log(arrFromList);



