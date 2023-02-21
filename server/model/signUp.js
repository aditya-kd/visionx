import mongoose from 'mongoose';


const usersignUpSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide First name"],
        unique: false,
    },
    lastname: {
        type: String,
        required: [true, "Please provide First name"],
        unique: false,
    },
    mobile: {
        type: String,
        require: [true, "Please provide Mobile Number"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },

})

const Signup = mongoose.model("Signups",usersignUpSchema)

export default Signup;