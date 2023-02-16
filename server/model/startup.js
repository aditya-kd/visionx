import mongoose from "mongoose";


const startupSchema = new mongoose.Schema({

    companyName : {
        type: String,
        required: true,
        unique: true
    },
    companyWebsite: {
        type: String,
        required: true,
        unique: true
    },
    founderName: {
        type: String,
        required: true,
    },
    founderEmail: {
        type: String,
        required: true

    },
    investment:{
     type: String,
     required: true
     },
    contact: {
        type: Number,
        required: true

    },
    capitalRequired:{
        type: Number,
        required: true
    },
    yearFounded: {
        type: String,
        required: true
    },
    fundingRecieved: {
        type: String,
        required: true
    },
}
)


const Startups = mongoose.model("Startups", startupSchema)

export default Startups;