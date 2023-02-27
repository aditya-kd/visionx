import mongoose from "mongoose";
import Signup from "../model/signUp";


export const register = async (req, res) => {
    try {

        const {
            firstName, 
            lastName, 
            mobileNumber,
            email,
            password
        } = req.body;

        await Signup.create({

        })
        res.send(200);

        
        
    } catch (error) {
        console.log(error);
        res.send(401)
        
    }
}

export const login = async(req,res) => {
    
}


//9821952810 :- Akash bhaiya