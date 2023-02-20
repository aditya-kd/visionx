import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function CompanyDetails() {
  return (
    <Box>
      <Flex m={"4"} justifyContent={"space-between"}>
        <Heading>Company Details</Heading>
        <NavLink to={"/partner-dashboard"}>
          <Button
            leftIcon={<ArrowBackIcon />}
            borderRadius={"3xl"}
            colorScheme={"messenger"}
          >
            Back to Dashboard
          </Button>
        </NavLink>
      </Flex>

      <Box m={"4"} bgColor={"#F0F2FF"}>
        <Box textAlign={"center"}>
          <Text fontSize={"2xl"}>Basic Details</Text>
        </Box>
        <SimpleGrid columns={2}>
          <VStack>
            <Box>
              <FormControl isRequired>
                <FormLabel>Company Name</FormLabel>
                <Input
                  width={"96"}
                  variant={"ghost"}
                  placeholder="Company Name"
                  name="companyName"
                  type={"text"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Founder Name</FormLabel>
                <Input
                  width={"96"}
                  variant={"ghost"}
                  placeholder="Founder Name"
                  name="FounderName"
                  type={"text"}
                />
              </FormControl>
            </Box>
          </VStack>
          <VStack>
            <Box>
              <FormControl isRequired>
                <FormLabel>Company Website</FormLabel>
                <Input
                  width={"96"}
                  variant={"ghost"}
                  placeholder="Company Website"
                  name="companyWebsite"
                  type={"url"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Founder Email</FormLabel>
                <Input
                  width={"96"}
                  variant={"ghost"}
                  placeholder="Founder Email"
                  name="founderEmail"
                  type={"email"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  width={"96"}
                  variant={"ghost"}
                  placeholder="Contact Number"
                  name="contactNumber"
                  type={"number"}
                />
              </FormControl>
            </Box>
          </VStack>
        </SimpleGrid>
        <Flex p={"4"} m={"4"} justifyContent={"center"}>
          <NavLink to={"/partner-deals"}>
            <Button colorScheme={"whatsapp"}>Add Details</Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
