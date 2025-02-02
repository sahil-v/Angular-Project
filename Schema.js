const mongoose = require('mongoose')
const { Schema } = mongoose.Schema({
    
        "user_ID": ObjectId,
        "user_name": "string",
        "user_email": "string",
        "user_password": "string", 
        "user_role": "string", 
        "user_phone": "number",
        "user_address":"string",      
})