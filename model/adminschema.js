const mongoose = require("mongoose");


const admin = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String,
      
    }
})

const Admin = new mongoose.model("admin", admin)
module.exports = Admin