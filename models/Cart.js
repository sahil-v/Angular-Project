const mongoose = require('mongoose');

const cart = mongoose.Schema({
    "userId": ObjectId, // Reference to the user
  "items": [
    {
      "productId": ObjectId, // Reference to the product
      "quantity": Number, // Quantity of the product in the cart
      "price": Number // Price of the product at the time of adding to cart
    }
  ],
});