import React from 'react'
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Footer from './Footer';

const App = () => {
  return (
    <Box>
      <Box textAlign='center' paddingTop={"10px"}
           alignItems={"center"}
           width='full'
           maxWidth='full'
           justifyContent={"center"} >
       <strong>
       <Center fontSize={30}>Get Ready To Maximize You Productivity</Center>
        <Center fontSize={30}>
         With Our Workflow Solutions 
         </Center>
       </strong>
     <Button backgroundColor="black" color={"white"} width='flex' m={6}>Get Started</Button>
      <Center><Image src="/images/place-holder.png" width={'flex'}  ></Image></Center>
     <Footer/>
     </Box>
    </Box>
  )
}


export default App

