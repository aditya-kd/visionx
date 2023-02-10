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
import React from "react";
import {  NavLink } from "react-router-dom";

export default function StartupDetails() {
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
                        <HStack spacing={"5"}>
                          <Radio bgColor={"white"} value="Equity">
                            Equity
                          </Radio>
                          <Radio bgColor={"white"} value="Debt">
                            Debt
                          </Radio>
                          <Radio bgColor={"white"} value="Both">
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
                          variant={"ghost"}
                          type={"number"}
                          placeholder={"₹ 10,00,000"}
                        />
                      </HStack>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <HStack>
                        <FormLabel>Funding received previously</FormLabel>
                        <Select variant={"ghost"} placeholder="Select">
                          <option>Yes</option>
                          <option>No</option>
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
                        <Input variant={"ghost"} type={"date"} />
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
                <Button type="submit" colorScheme={"whatsapp"}>
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
