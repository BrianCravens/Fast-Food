const getOrders = function() {
    console.log(restaurant.orders)
}

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
        console.log("Thanks for your order!")
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
getOrders() 
// Output all orders to the console using console.table()
console.table(restaurant.orders)