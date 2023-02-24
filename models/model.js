const mongoose = require("mongoose");

const FishingSchema = new mongoose.Schema({
    species:{
        type:String,
        required:[true,"Species is required"],    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    location:{
        type:String,
        required:[true,"Location is required"],
    },

    bait:{
        type:String,
        required:[true,"Bait is required"]
    },
},{timestamps:true})

const Fishing = mongoose.model ("fishing",FishingSchema)

module.exports= Fishing