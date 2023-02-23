import React, { useState } from 'react'
import {
  ThemeProvider,
  theme,
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
  Grid
} from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlinePhone } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const LoginArea = () => {
  return (
    <Box >
      <Box
        display={["flex", "flex", "grid", "grid"]}
        gridTemplateColumns={"50% 50%"}
      >
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex borderRadius={"2xl"} bgColor={"#F7C0BC"} p={"20"}>
            <Text color={"white"}>Service to our Customers</Text>
          </Flex>
        </Flex>


        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
          <Box
            borderWidth={1}
            px={4}
            width='full'
            maxWidth='500px'
            borderRadius={4}
            textAlign='center'
            boxShadow='lg'
            background={"white"}
          >
            <Box p={6} pb={4}>
              <LoginHeader />
              <LoginForm />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading fontSize={'30px'}>Welcome to WE-GenX</Heading>
      <Text fontSize={'13px'} color={"grey"}>
        Welcome back! Please enter your details.
      </Text>
    </Box>
  )
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {


      const url = "http://localhost:5000/signup";
      fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Acess-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
          type: "Investor",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Investor registered");
          navigate("/investor-details")
          console.log(data, "userRegister");
        });

      console.log("Investor registered");
    }

    catch (error) {


      if (error.response.status === 402) {
        console.log(error)
        console.log(error.response.data.message);
        setError(true);
      }
    }
  };



  return (
    <Box my={4} textAlign='left'>
      <form onSubmit={handleSubmit}>

        <Stack isInline justifyContent='space-between' mt={4}>
          <FormControl mr={4}>
            <FormLabel>First Name </FormLabel>
            <Input
              type='text'
              name='firstname'
              onChange={handleChange}
              value={formData.firstname || ""}
              placeholder='Enter your first name' />
          </FormControl>

          <FormControl ml={4}>
            <FormLabel>Last Name </FormLabel>
            <Input
              type='text'
              name='lastname'
              onChange={handleChange}
              value={formData.lastname || ""}
              placeholder='Enter your last name' />
          </FormControl>
        </Stack>

        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type='text'
            name='mobile'
            onChange={handleChange}
            value={formData.mobile || ""}
            placeholder='+91 941 234 5674' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name='email'
            onChange={handleChange}
            value={formData.email || ""}
            placeholder='email@example.com' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Create a password</FormLabel>
          <Input
            type='password'
            name='password'
            onChange={handleChange}
            value={formData.password || ""}
            placeholder='Enter Your Password' />
        </FormControl>

        <Box color={'blue'} mt={4}>
          <UnorderedList>
            <ListItem>Cannot contain your name or email.</ListItem>
            <ListItem>At least 8 characters long.</ListItem>
            <ListItem>Must contain a number or symbol.</ListItem>
          </UnorderedList>
        </Box>

        <Button
          type='submit'
          onClick={handleSubmit}
          backgroundColor="blue"
          color={"white"}
          width='full'
          mt={4}
        >Sign Up
        </Button>

      </form>
    </Box>
  )
}

export default App