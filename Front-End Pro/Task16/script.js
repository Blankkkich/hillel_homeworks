'use strict'
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     displayHuman() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }
//
// class Car {
//     constructor(brand, model, year, licensePlate, owner) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.licensePlate = licensePlate;
//
//         if (owner.age >= 18) {
//             this.owner = owner;
//         } else {
//             console.log("Owner must be 18 years or older.");
//         }
//     }
//
//     displayInfo() {
//         console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
//         this.owner.displayInfo();
//     }
// }
//
//
//
// const person1 = new Human("John Doe", 25);
// const person2 = new Human("Jane Doe", 18);
//
// const car1 = new Car("Toyota", "Camry", 2022, "ABC123", person1);
// const car2  = new Car("Honda", "Accord", 2021, "XYZ789", person2);
//
// car1.displayInfo();
// car2.displayInfo();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = owner;

        if (owner.age < 18) {
            console.log("Owner must be 18 years or older.");
            this.owner = null;
        }
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        this.owner.displayInfo();
    }
}

const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Doe", 18);

const car1 = new Car("Toyota", "Camry", 2022, "ABC123", person1);
const car2 = new Car("Honda", "Accord", 2021, "XYZ789", person2);

car1.displayInfo();
car2.displayInfo();
