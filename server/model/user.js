import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema ({
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
      mobile: {
        type:String,
        require: true
      }
})

const User = mongoose.model("Users",UserSchema)

export default User;