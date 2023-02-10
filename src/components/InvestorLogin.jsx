import React, { useState } from "react";
import app from "./firebase-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth, RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

















const App = () => {
  
  return (
    <ColorModeProvider>
      <CSSReset />
      <LoginArea />
    </ColorModeProvider>
  );
};

const LoginArea = () => {
  return (
    <Box>
      <Box display={["flex", "flex", "grid", "grid"]} gridTemplateColumns={"50% 50%"}>
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex borderRadius={"2xl"} bgColor={"#F7C0BC"} p={"20"}>
            <Text color={"white"}>Service to our Customers</Text>
          </Flex>
        </Flex>

        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box
            borderWidth={1}
            px={4}
            width={["fit-content", "", "full", "full"]}
            maxWidth="500px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
            background={"white"}
          >
            <Box pt={6} pb={1}>
              <LoginHeader />
              <LoginForm />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading fontSize={"28px"}>Welcome to Vision-X</Heading>
      <Text fontSize={"11px"} color={"grey"}>
        Welcome back! Please enter your details.
      </Text>
    </Box>
  );
};



const LoginForm = () => {
const [formData, setFormData] = useState({});
const[otpButton, setOtpButton] = useState("disabled")
const[error , setError] = useState(false)



const handleChange = event => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
};










const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);
  try{

    const url ="http://localhost:5000/register"
    fetch(url, {
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        "Acess-Control-Allow-Origin":"*"
      },
      body:JSON.stringify ({
        email:formData.email,
        password:formData.password,
        mobile: formData.mobile
      })
    }).then((res) => res.json())
    .then((data) => {
      alert("user registered")
      console.log(data, "userRegister")

    })
    console.log("registered")

  }
  catch(error){

    if(error.response.status === 402){

      console.log(error.response.data.message)
      setError(true)
    }

  }



  
};



//firebase functionality

// const setButton = (length) => {
//   if(length === 10){
//     console.log(length)
//     setOtpButton("enabled")
//     console.log("function")
  
//   }
//   else{

//     setOtpButton("disabled")

//   }
  
// }
// const auth = getAuth(app)

// const onCaptchVerify = () => {
  
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//   'size': 'normal',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // ...
//   },
//   'expired-callback': () => {
//     // Response expired. Ask user to solve reCAPTCHA again.
//     // ...
//   }
// }, auth);
// }

// const signInSubmit = () => {
  
//   const phoneNumber = FormData.mobile;
//   const appVerifier = window.recaptchaVerifier;
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // ...
//       }).catch((error) => {
//         // Error; SMS not sent
//         // ...
//       });
//   }




  return (
    <Box m={6} textAlign="left">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email </FormLabel>
          <Input type="email" name="email" onChange={handleChange} value={formData.email} color={"grey"} placeholder="Enter your email " />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter your password" />
        </FormControl>

        
        <FormControl mt={4}>
          <FormLabel>Mobile Number</FormLabel>
          <Input type="text" name="mobile" onChange={handleChange} value={formData.mobile} placeholder="Enter your mobile number" />
        </FormControl>
        <Button disabled="true" type="submit" backgroundColor={otpButton === "enabled" ? "blue" : "gray"} color={"white"} width="full" mt={4}>
          Get OTP
        </Button>

          

        <Button type="submit" backgroundColor="blue" color={"white"} width="full" mt={4}>
          Sign In
        </Button>
       
        <Button border={"1px"} width="full" mt={4}>
          <FcGoogle align={"center"} />
          <Text> Sign in with Google</Text>
        </Button>
        <div id="recaptcha-container"></div>
        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>
              {" "}
              <Text fontSize={"13px"}>Remember for 30 days</Text>
            </Checkbox>
          </Box>
          <Box>
            <Link color="blue.500">
              <Text fontSize={"13px"}>Forgot password? </Text>
            </Link>
          </Box>
        </Stack>
        
        <Box textAlign="center" pt={4} pb={3} color={"grey"}>
          Don't have an account? <Link color="blue.500">Sign up</Link>
        </Box>


      </form>
      {error && 
      <Box>
        <Alert>
          <AlertTitle>Couldn't Sign In!</AlertTitle>
        </Alert>
      </Box>}
    </Box>
  );
};

export default App;
