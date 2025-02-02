const mongoose = require('mongoose');

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