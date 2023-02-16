import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

export default function StartupDetails() {

  const [startupData,setStartupData] = useState({})


  const handleChange = (event) => {
    setStartupData({
      ...startupData,
      [event.target.name]: event.target.value,
      
    });
    // console.log(`${event.target.name}: ${event.target.value}`)
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(startupData);
    
    try {
      const url  = "http://localhost:5000/startups";
      fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Acess-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
        companyName:startupData.companyName,
        companyWebsite:startupData.companyWebsite,
        founderName: startupData.founderName,
        founderEmail: startupData.founderEmail,
        investment: startupData.investment,
        contact: startupData.contactNumber,
        capitalRequired: startupData.capitalRequired,
        yearFounded: startupData.yearfounder,
        fundingRecieved:startupData.IsfundingRecieved
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        alert("done")
        console.log(data, "done");
      })

      
      
    } catch (error) {
      alert("error is there")
      console.log(error);
      
    }
    console.log(startupData);
  }


  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Box
        display={"flex"}
        flexDirection="column"
        alignContent="center"
        justifyContent={"space-between"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Text fontSize={"3xl"}>Start-Ups</Text>
        </Box>
        <Flex justifyContent={"center"}>
          <Image
            src="https://www.svgrepo.com/show/297060/placeholder-leaf.svg"
            boxSize={"40"}
          />
        </Flex>
        <Box></Box>
      </Box>

      <Box>
        <Box m={"2"} bgColor={"#F0F2FF"}>
          <form action="" method="post">
            <Box className="basic-details">
              <Box p={"4"} m={"4"} mb={"0"} pb={"0"}>
                <Text fontSize={"2xl"}>Basic Details</Text>
              </Box>
              <SimpleGrid columns={2}>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Company Name</FormLabel>
                      <Input
                        name="companyName"
                        onChange={handleChange}
                        type={"name"}
                        variant={"ghost"}
                        placeholder="Your company Name"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Founder Name</FormLabel>
                      <Input
                        name="founderName"
                        onChange={handleChange}
                        type={"name"}
                        variant={"ghost"}
                        placeholder="Name of the founder"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel>Investment</FormLabel>
                      <RadioGroup>
                        <HStack  spacing={"5"}>
                          <Radio onChange={handleChange} name="investment"   bgColor={"white"} value="Equity">
                            Equity
                          </Radio>
                          <Radio onChange={handleChange}  name="investment"  bgColor={"white"} value="Debt">
                            Debt
                          </Radio>
                          <Radio onChange={handleChange} name="investment"  bgColor={"white"} value="Both">
                            Both
                          </Radio>
                        </HStack>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Stack>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Company Website</FormLabel>
                      <Input
                        name="companyWebsite"
                        onChange={handleChange}
                        variant={"ghost"}
                        type={"url"}
                        placeholder="Your Company Website"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Founder Email</FormLabel>
                      <Input
                        name="founderEmail"
                        onChange={handleChange}
                        variant={"ghost"}
                        type={"email"}
                        placeholder="xyz@email.com"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Contact Number</FormLabel>
                      <Input
                        name="contactNumber"
                        onChange={handleChange}
                        variant={"ghost"}
                        type={"number"}
                        placeholder="Your Contact"
                      />
                    </FormControl>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Box>

            <Box className="additional-details">
              <Box m={"4"} p={"4"} mt={"0"} mb={"0"}>
                <Text fontSize={"2xl"}>Additional Details about Company</Text>
              </Box>
              <SimpleGrid columns={2}>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl>
                      <HStack>
                        <FormLabel>Capital required</FormLabel>
                        <Input
                          name="capitalRequired"
                          onChange={handleChange}

                          variant={"ghost"}
                          type={"number"}
                          placeholder={"₹ 10,00,000"}
                        />
                      </HStack>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl >
                      <HStack>
                        <FormLabel>Funding received previously</FormLabel>
                        <Select onChange={handleChange} name="IsfundingRecieved" variant={"ghost"} placeholder="Select">
                          <option value={"Yes"}>Yes</option>
                          <option value={"No"}>No</option>
                        </Select>
                      </HStack>
                    </FormControl>
                  </Box>
                </Stack>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl>
                      <HStack>
                        <FormLabel>Year Founded</FormLabel>
                        <Input
                        name="yearfounder" onChange={handleChange} variant={"ghost"} type={"date"} />
                      </HStack>
                    </FormControl>
                  </Box>

                  <Box p={"4"} m={"4"}>
                    <VStack>
                      <Box>
                        <Link textDecoration={"underline"}>
                          Verify Email by clicking here*
                        </Link>
                      </Box>
                      <Box>
                        <Link textDecoration={"underline"}>
                          Verify Phone by clicking here*
                        </Link>
                      </Box>
                    </VStack>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Box>

            <Flex justifyContent="center" p={"4"} m={"4"}>
              <NavLink to={"/startupsucess"}>
                <Button onClick={handleSubmit} type="submit" colorScheme={"whatsapp"}>
                  Submit Details
                </Button>
              </NavLink>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
