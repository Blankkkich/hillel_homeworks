class Hamburger {
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};
    static STAFFING_CHEESE = {price: 10, calories: 20};
    static STAFFING_SALA = {price: 20, calories: 50};
    static STAFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SPICE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    constructor(size, staffing) {
        this.size = size;
        this.staffing = staffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this;
    }

    calcKcal() {
        let calories = this.size.calories + this.staffing.calories;
        this.toppings.forEach(topping => calories += topping.calories);
        return calories;
    }

    calcPrice() {
        let price = this.size.price + this.staffing.price;
        this.toppings.forEach(topping => price += topping.price);
        return price;
    }
}


const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STAFFING_CHEESE, Hamburger.TOPPING_MAYO);
hamburger
    .addTopping(Hamburger.TOPPING_SPICE)
    .addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.calcKcal());
console.log(hamburger.calcPrice());
