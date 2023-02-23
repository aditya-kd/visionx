import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../otp-auth/firebase-config";
import {
  getAuth,
  RecaptchaVerifier,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
} from "firebase/auth";

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

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

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
      <Box
        display={["flex", "flex", "grid", "grid"]}
        gridTemplateColumns={"50% 50%"}
      >
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex borderRadius={"2xl"} bgColor={"blue.200"} p={"20"}>
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
      <Heading fontSize={"28px"}>Welcome to V!nest</Heading>
      <Text fontSize={"11px"} color={"grey"}>
        Welcome back! Please enter your details.
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const [verify, setVerify] = useState({
    verifyButton: false,
    verifyOtp: null,
    verification: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleMobile = (event) => {
    if (event === 10) {
      setVerify({
        verifyButton: true,
      });
    } else {
      setVerify({
        verifyButton: false,
      });
    }
  };

  const handleMobileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    handleMobile(event.target.value.length);
  };

  //firebase functionality

  const onCaptchVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const onSignInSubmit = () => {
    onCaptchVerify();

    const phoneNumber = "+91" + formData.mobile;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;

        setVerify({
          verifyOtp: true,
        });

        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("Error occured on Verification: ", error);
        setVerify({
          verifyOtp: false,
        });
      });
  };

  const verifyCode = () => {
    window.confirmationResult
      .confirm(formData.otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        alert("Verification Done");
        setVerify({
          verification: true,
        });
        // navigate("/dashboard");

        // ...
      })
      .catch((error) => {
        console.log(formData.otp);
        alert("Invalid Otp");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };


  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // console.log(data.user);
        // console.log(data.user.email);
        // console.log(data.user.displayName);
        alert("User registered");
        console.log(data.user.displayName, data.user.email);
        const url = "http://localhost:5000/register";
        fetch(url, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Acess-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: data.user.email,
            password: data.user.uid,
            mobile: data.user.phoneNumber,
          }),
        }).then((data) => {
          console.log(data);
          console.log("registered");
          navigate("/startupdetails");
        })


      }).catch((error) => {
        console.log(error);
      });
  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const url = "http://localhost:5000/register";
      fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Acess-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("user registered");
          verify.verifyOtp !== null ? navigate("/startupdetails") : alert("invalid OTP")
          console.log(data, "userRegister");
        });

      console.log("registered");
    } catch (error) {
      if (error.response.status === 402) {
        console.log(error.response.data.message);
        setError(true);
      }
    }
  };

  return (

    <Box m={6} textAlign="left">
      <form onSubmit={handleSubmit}>

        {/* Email Input Field */}

        <FormControl>
          <FormLabel>Email </FormLabel>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email || ""}
            color={"grey"}
            placeholder="Enter your email "
          />
        </FormControl>

        {/* Password Input Field */}

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password || ""}
            placeholder="Enter your password"
          />
        </FormControl>

        {/* Mobile Number Input Field */}

        <FormControl mt={4}>
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="number"
            name="mobile"
            onChange={handleMobileChange}
            value={formData.mobile || ""}
            placeholder="Enter your mobile number"
          />
          {verify.verifyOtp === true ? (
            <Alert status="success" mt={"1"}>
              <AlertIcon />
              OTP sent successfully!
            </Alert>
          ) : null}
          {verify.verifyOtp === false ? (
            <Alert mt={"1"} status="error">
              <AlertIcon />
              There was an error processing your request. Please try later.
            </Alert>
          ) : null}

        {/* Verify Button */}

        </FormControl>
        <Button
          backgroundColor={verify.verifyButton === true ? "blue" : "gray"}
          textColor={verify.verifyButton === true ? "white" : "lightgray"}
          cursor={verify.verifyButton === true ? "pointer" : "not-allowed"}
          mt={4}
          onClick={onSignInSubmit}
        >
          Verify
        </Button>

        {/* Verify OTP Button */}

        {verify.verifyOtp === true ? (
          <>
            <FormControl mt={4}>
              <FormLabel>OTP:</FormLabel>
              <Input
                type="text"
                name="otp"
                onChange={handleChange}
                placeholder="Enter your OTP"
              />
            </FormControl>
            <Button
              mt={3}
              backgroundColor="blue"
              textColor="white"
              onClick={verifyCode}
            >
              Verify OTP
            </Button>
          </>
        ) : null}


        {/* Sign In Button */}

        <Button
          type="submit"
          backgroundColor={verify.verification === true ? "blue" : "gray"}
          textColor={verify.verification === true ? "white" : "lightgray"}
          color={"white"}
          width="full"
          mt={4}
          onClick={handleSubmit}
          cursor={verify.verification === true ? "pointer" : "not-allowed"}
        >
          Sign In
        </Button>

        {/* Sign With Google Button */}

        <Button 
          border={"1px"}
          width="full"
          mt={4}
          onClick={handleClick}
          >
          <FcGoogle align={"center"} />
          <Text> Sign in with Google</Text>
        </Button>
        <div id="recaptcha-container"></div>
        <Stack isInline justifyContent="space-between" mt={4}>

          {/* Remember For 30 Days */}

          <Box>
            <Checkbox>
              {" "}
              <Text fontSize={"13px"}>Remember for 30 days</Text>
            </Checkbox>
          </Box>

          {/* Forgot Password Link */}

          <Box>
            <Link color="blue.500">
              <Text fontSize={"13px"}>Forgot password? </Text>
            </Link>
          </Box>
        </Stack>

        {/* Don't have an account? */}

        <Box textAlign="center" pt={4} pb={3} color={"grey"}>
          Don't have an account? <Link color="blue.500" href='/startup-signup'>Sign up</Link>
        </Box>
      </form>
      {error && (
        <Box>
          <Alert>
            <AlertTitle>Couldn't Sign In!</AlertTitle>
          </Alert>
        </Box>
      )}

      <div id="recaptcha-container"></div>
    </Box>
  );
};

export default App;
