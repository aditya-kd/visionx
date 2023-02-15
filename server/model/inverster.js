import mongoose from "mongoose";


const investorSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true,
        unique: true
    },
    companyWebsite: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true,
    },
    investorType: {
        type: String,
        required: true

    },
    founderEmail:{
     type: String, 
     required: true
     },
    contact: {
        type: Number,
        required: true

    },
    sector:{
        type: String,
        required: true
    },
  


})



const Investor = mongoose.model("Investors", investorSchema)

export default Investor;