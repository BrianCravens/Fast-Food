const getOrders = function() {
    return this.orders;
}

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
        console.log("Thanks for your order!")
    }
}

function comboMeal (sandwichType, fries, drinkSize){
    let combo = {};
    combo.sandwichType = sandwichType;
    combo.fries = fries;
    combo.drinkSize = drinkSize;
    return combo;



}

const chickenComboMeal = comboMeal("Chicken", true, "Large");
const burgerComboMeal = comboMeal("Beef", true, "Medium");
const veggieComboMeal = comboMeal("Panini", false, "Small");


// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(veggieComboMeal)

// Invoke the function to return the list of all orders
getOrders() 
// Output all orders to the console using console.table()
console.table(restaurant.orders)