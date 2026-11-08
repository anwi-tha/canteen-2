
// Shopping Cart
let cart = [];


// 1. Add Food Item to Cart
function addToCart(name, price) {

    // Check whether the food item already exists
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity++;
    } 
    else {
        // Add new item to cart
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}


// 2. Display Cart Items
function displayCart() {

    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");

    // Clear previous cart display
    cartItems.innerHTML = "";

    let total = 0;

    // Check if cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "0";
        return;
    }

    // Display each item
    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;

        let itemDiv = document.createElement("div");

        itemDiv.className = "cart-item";

        let itemName = document.createElement("span");
        itemName.textContent =
            `${item.name} - ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.onclick = function () {
            removeFromCart(index);
        };

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(removeButton);

        cartItems.appendChild(itemDiv);
    });

    // Display total amount
    totalElement.textContent = total;
}


// 3. Remove Item from Cart
function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}


// 4. Place Order
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty! Please add food items.");
        return;
    }

    // Generate a simple order ID
    let orderID = Math.floor(1000 + Math.random() * 9000);

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    // Display order confirmation
    alert(
        "Order Placed Successfully!\n\n" +
        "Order ID: " + orderID + "\n" +
        "Total Amount: ₹" + total + "\n" +
        "Order Status: Pending"
    );

    // Empty the cart after placing order
    cart = [];

    displayCart();
}


// Display empty cart when page loads
displayCart();
