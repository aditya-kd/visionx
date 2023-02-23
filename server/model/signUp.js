import mongoose from 'mongoose';


const usersignUpSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide First name"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide First name"],
    },
    mobile: {
        type: String,
        require: [true, "Please provide Mobile Number"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],

    },
    type: {
        type: String,
        required: true
    },

})

const Signup = mongoose.model("Signups", usersignUpSchema)

export default Signup;