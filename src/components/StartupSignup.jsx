import React from 'react'
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
          <Flex borderRadius={"2xl"} bgColor={"blue.200"} p={"20"}>
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
  return (
    <Box my={4} textAlign='left'>
      <form>

      <Stack isInline justifyContent='space-between' mt={4}>
        <FormControl mr={4}>
          <FormLabel>First Name </FormLabel>
          <Input type='text' placeholder='Enter your first name' />
        </FormControl>

        <FormControl ml={4}>
          <FormLabel>Last Name </FormLabel>
          <Input type='text' placeholder='Enter your last name' />
        </FormControl>
        </Stack>

        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input type='password' placeholder='+91 941 234 5674' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type='password' placeholder='email@example.com' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Create a password</FormLabel>
          <Input type='password' placeholder='' />
        </FormControl>

        <Box color={'blue'} mt={4}>
          <UnorderedList>
            <ListItem>Cannot contain your name or email.</ListItem>
            <ListItem>At least 8 characters long.</ListItem>
            <ListItem>Must contain a number or symbol.</ListItem>
          </UnorderedList>
        </Box>

        <Button backgroundColor="blue" color={"white"} width='full' mt={4}>Sign Up</Button>
        
      </form>
    </Box>
  )
}

export default App