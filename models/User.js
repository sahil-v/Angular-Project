const mongoose = require('mongoose');

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
