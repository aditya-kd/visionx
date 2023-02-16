import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function StartupDetails() {
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Box
        mt={"4"}
        display={"flex"}
        flexDirection="column"
        alignContent="center"
        justifyContent={"space-between"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <strong>
            <Text fontSize={"3xl"}>Investment Banking</Text>
          </strong>
        </Box>
        <Flex justifyContent={"center"}>
          <Image
            src="https://www.svgrepo.com/show/422585/coin-color-currency.svg"
            boxSize={"40"}
            ml={250}
            mr={250}
          />
        </Flex>
        <Box justifyContent={"center"} textAlign={"center"} mb={"20"}>
          <Text fontSize={"3xl"} color={"grey"}>
            We-GenX
          </Text>
        </Box>
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
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type={"name"}
                        variant={"ghost"}
                        placeholder="John Doe"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Company Name</FormLabel>
                      <Input
                        type={"name"}
                        variant={"ghost"}
                        placeholder="Natural Kart"
                      />
                    </FormControl>
                  </Box>

                    <Box className="additional-details">
                      <SimpleGrid column={1} >
                        <Stack pt={5} >
                          <Box >
                            <FormControl>
                              <HStack>
                                <FormLabel>Type of Investor:</FormLabel>
                                <Select variant={"ghost"} placeholder="Select">
                                <option>Yes</option>
                                <option>No</option>
                              </Select>
                            </HStack>
                          </FormControl>
                        </Box>

                        <Box>
                          <FormControl>
                            <HStack>
                              <FormLabel mr={12}>Sector:</FormLabel>
                              <Select variant={"ghost"} placeholder="Select">
                                <option>Yes</option>
                                <option>No</option>
                              </Select>
                            </HStack>
                          </FormControl>
                        </Box>
                      </Stack>
                    </SimpleGrid>
                  </Box>
                </Stack>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Company Website</FormLabel>
                      <Input
                        variant={"ghost"}
                        type={"url"}
                        placeholder="www.naturalkart.com"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Founder Email</FormLabel>
                      <Input
                        variant={"ghost"}
                        type={"email"}
                        placeholder="email@example.com"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Contact Number</FormLabel>
                      <Input
                        variant={"ghost"}
                        type={"number"}
                        placeholder="9412345678"
                      />
                    </FormControl>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Box>

            <Box pl={"30px"}>
              <Box pb={4}>
                <Link textDecoration={"underline"}>
                  Verify Email by clicking here*
                </Link>
              </Box>
              <Box>
                <Link textDecoration={"underline"}>
                  Verify Phone by clicking here*
                </Link>
              </Box>
            </Box>

            <Flex justifyContent="center" p={"4"} m={"4"}>
              <NavLink to={"/investor-success"}>
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
