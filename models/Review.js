const mongoose = require('mongoose');

const review = mongoose.Schema({
    "_id": ObjectId, // Unique identifier for the review
  "userId": ObjectId, // Reference to the user who wrote the review
  "productId": ObjectId, // Reference to the product being reviewed
  "rating": Number, // Rating given by the user (e.g., 1 to 5)
  "reviewText": String, // The review text
  
});
