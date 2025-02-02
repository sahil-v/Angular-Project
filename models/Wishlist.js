const mongoose = require('mongoose');

const wishlist = mongoose.Schema({
    "userId": String, // Reference to the user who added the product to the wishlist
    "productId": String, // Reference to the product added to the wishlist
    "productName": String, // Reference to the product added to the wishlist 
});
