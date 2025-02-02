const mongoose = require('mongoose');

const cetegory = mongoose.Schema({
    "name": String, // Name of the category (e.g., "Men's Watches")
    "description": String, // Description of the category
    "type": String, // Type of the category
    "type_id": String, 
    "userId": String, 
});