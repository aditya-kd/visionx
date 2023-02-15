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
     type: Object,
     of: Boolean
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
        type: Number,
        required: true
    },
    fundingRecieved: {
        type: Boolean,
        require: true
    },
}
)


const Startups = mongoose.model("Startups", startupSchema)

export default Startups;