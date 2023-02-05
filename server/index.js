import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";


//configurations

dotenv.config();
const app = express();


//database connection

const PORT = process.env.PORT || 6000;


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => 
        console.log(`server connected on ${PORT} and database connected`)
       
    )
}).catch((error) =>  console.log(`server did not connected on ${PORT} /n
 ${error}`))

 app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from VisionX!'
    })
  })


