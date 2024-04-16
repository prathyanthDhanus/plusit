const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    districtName : {
        type:String,
        
    },
    constituency:{
        type:String
        
    },
    assembly:{
        type:String
    }
});

const District = mongoose.model("District", districtSchema); 
module.exports = District;
