const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');

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

const User = mongoose.Schema({
    "_id": ObjectId, // Unique identifier for the user
  "firstName": String, // User's first name
  "lastName": String, // User's last name
  "email": String, // User's email (unique)
  "password": String, // Hashed password
  "address": String, // User's address
  "phoneNumber": String, // User's phone
  "DateOfBirth": String
});

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

const cetegory = mongoose.Schema({
    "name": String, // Name of the category (e.g., "Men's Watches")
    "description": String, // Description of the category
    "type": String, // Type of the category
    "type_id": String, 
    "userId": String, 
});

const wishlist = mongoose.Schema({
    "userId": String, // Reference to the user who added the product to the wishlist
    "productId": String, // Reference to the product added to the wishlist
    "productName": String, // Reference to the product added to the wishlist 
});

const review = mongoose.Schema({
    "_id": ObjectId, // Unique identifier for the review
  "userId": ObjectId, // Reference to the user who wrote the review
  "productId": ObjectId, // Reference to the product being reviewed
  "rating": Number, // Rating given by the user (e.g., 1 to 5)
  "reviewText": String, // The review text
  
});

const discount = mongoose.Schema({
    "_id": ObjectId, // Unique identifier for the discount/promotion
  "code": String, // Discount code (e.g., "SUMMER20")
  "description": String, // Description of the discount/promotion
  "discountType": String, // Type of discount (e.g., "percentage", "fixed")
  "discountValue": Number, // Value of the discount (e.g., 20 for 20% off)
  "validFrom": Date, // Start date of the promotion
  "validTo": Date, // End date of the promotion
  "isActive": Boolean, // Whether the discount is currently active
  
})