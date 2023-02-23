import { Box } from '@chakra-ui/react'
import React from 'react'
import { Flex, Text, Heading,Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi';

const DealSubmitted = () => {
  return (
    <Box>
      <Box>
        <Text fontSize={20} mx={4} mt={4} as={'b'}>Partners/Add Details</Text>
      </Box>
        <Box display={"grid"} gridTemplateColumns={"30% 70%"}>
      <Flex
        m={"4"}
        height={"100vh"}
        bgColor={"#F0F2FF"}
        fontSize={"2xl"}
        justifyContent={"space-between"}
        textAlign={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Text m={"2"}>Dashboard</Text>
        </Box>
        <Box>
          <Text m={"2"} as={"b"}>
            Deals Submitted
          </Text>
          <Text m={"2"}>Deals Ongoing</Text>
          <Text m={"2"}>Deals Financed</Text>
        </Box>
        <Box>
          <Text m={"2"}>Profile</Text>
          <Text m={"2"}>Log Out</Text>
        </Box>
      </Flex>

      <Flex
        m={"4"}
        height={"100vh"}
        bgColor={"#F0F2FF"}
        fontSize={"2xl"}
        justifyContent={"space-between"}
        textAlign={"center"}
        flexDirection={"column"}
      >
        <Image src='logo.png' alt='logo' mt={150} mx={300}/>
        <Box mb={'80px'}>
            <Text as={'b'} fontSize={20}>Deal Submitted</Text>
        </Box>
      </Flex>
        
        </Box>
      </Box>
  )
}

export default DealSubmitted
