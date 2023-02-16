import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import User from './model/user.js';
import cors from "cors";
import bcrypt from "bcrypt"
import Startups from './model/startup.js';
import Investor from './model/inverster.js';





//configurations


dotenv.config();

const app = express();

app.use(cors());




app.use(express.json())
//database connection

const PORT = process.env.PORT || 6000;




 app.get('/', async (request, response) => {
    response.status(200).send({
      message: 'Hello from VisionX!'
    })
  })


app.get("/register", async (request,response) => {
  response.status(201).send({
    message: "hello register"
  })
})
  

// register endpoint
app.post("/register", async (req, res) => {
 
  const {email, password, mobile} = req.body;

  const hashpassword = await bcrypt.hash(password, 10)


  try{

    

    await User.create({
      email,
      password: hashpassword,
      mobile
      
    });
    res.send({status:"ok"})
    


  }

  catch(Error) {

    res.send({status: "error"})
  }


});
app.get("/startups", async (request,response) => {
  response.status(201).send({
    message: "hello startup"
  })
})

app.post("/startups",async(req,res) => {
  const {companyName ,companyWebsite,founderName,founderEmail,investment,contact,capitalRequired,yearFounded,
    fundingRecieved} = req.body;

    try {

      await Startups.create({

        companyName,
        companyWebsite,
         founderName,
         founderEmail,
         investment,
         contact,
         capitalRequired,
         yearFounded,
        fundingRecieved

      })
      res.send({status: 201})
      
    } catch (error) {
    
      res.send({status: 401})
      console.log(error);

      
    }
})


app.post("/investors",async(req,res) => {
  const { fullName,
    companyName ,
    companyWebsite,
    investorType,
    founderEmail,
    contact,sector} = req.body;

    try {

      await Investor.create({

        fullName,
        companyName ,
        companyWebsite,
        investorType,
        founderEmail,
        contact,
        sector
      })
      res.send({status: 201})
      
    } catch (error) {
       
      console.log(error);
      res.send({status: 401})

      
    }
})



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => 
      console.log(`server connected on ${PORT} and database connected`)
     
  )
}).catch((error) =>  console.log(`server did not connected on ${PORT} /n
${error}`))


