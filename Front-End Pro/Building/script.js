'use strict'

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartment() {
    this.inhabitants = [];

    this.addResident = function(person) {
        this.inhabitants.push(person);
    };
}

function House(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;

    this.addApartment = function(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Cannot add more apartments. Maximum limit reached.");
        }
    };
}

const person1 = new Person("John", "Male");
const person2 = new Person("Alice", "Female");
const person3 = new Person("Bob", "Male");
const person4 = new Person('Abama', 'Male')

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1, person2);
apartment2.addResident(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);
