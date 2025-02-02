const mongoose = require('mongoose');

const product = mongoose.Schema({
  "_id": ObjectId, // Unique identifier for the user
  "name": String, // Name of the watch
  "description": String, // Detailed description of the watch
  "price": Number, // Price of the watch
  "category": String, // Category of the watch (e.g., "Men", "Women", "Sports")
  "brand": String, // Brand of the watch (e.g., "Rolex", "Casio")
  "images": [String], // Array of image URLs
  "stock": Number, // Available stock quantity
  "ratings": String,
});
