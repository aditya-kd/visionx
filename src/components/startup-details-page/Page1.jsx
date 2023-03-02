import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Progress,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdCall } from "react-icons/io";

export default function Page1() {
  return (
    <Box>
      <Box m={"4"}>
        <Button
          borderRadius={"3xl"}
          variant={"outline"}
          colorScheme={"messenger"}
        >
          Back
        </Button>
      </Box>
      <Flex m={"4"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Box bgColor={"#FF9A23"} boxSize={"10"}></Box>
          <Box m={"2"}>
            <Text as={"b"}>Company Name</Text>
            <Flex alignItems={"center"}>
              <Image
                src="https://www.svgrepo.com/show/501060/web.svg"
                boxSize={"4"}
              />
              <Text>Website</Text>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Button variant={"outline"} colorScheme={"gray"}>
            Category
          </Button>
        </Box>
      </Flex>
      <Box m={"4"}>
        <Heading my={"4"} size={"lg"}>Analysis Score</Heading>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Box
              justifyItems={"center"}
              bgColor={"#4A65F517"}
              boxSize={"32"}
              borderRadius={"100%"}
            >
              <Text mt={"10"} ml={"10"} color={"#4A65F5"} fontSize={"3xl"}>
                54%
              </Text>
            </Box>
            <Box>
              <VStack mx={"8"}>
                <Box width={"72"}>
                  <Text>Item 1:</Text>
                  <Progress value={50} />
                </Box>
                <Flex width={"72"}>
                  <Text>Item 2:</Text>
                  <Text>75%</Text>
                </Flex>
                <Flex width={"72"}>
                  <Text>Item 3:</Text>
                  <Text>33%</Text>
                </Flex>
              </VStack>
            </Box>
          </Flex>
          <Box boxShadow={"lg"} p={"2"} m={"2"} borderRadius={"2xl"} bgColor={"#FF9A230A"}>
            <VStack>
              <Text as={"b"} fontSize={"large"}>Contact</Text>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme={"messenger"}
                variant={"outline"}
                borderRadius={"3xl"}
              >
                Write message
              </Button>
              <Button
                leftIcon={<IoMdCall />}
                colorScheme={"whatsapp"}
                variant={"outline"}
              >
                Make a call
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box m={"4"}>
        <Heading my={"4"} size={"lg"}>Primary</Heading>
        <SimpleGrid columns={2}>
            <Box borderRight={"1px"} borderColor={"gray.300"}>
                <VStack>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 1:</Text>
                        <Text as={"b"}>25</Text>
                    </Flex>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 2:</Text>
                        <Text as={"b"}>₹ 74,000</Text>
                    </Flex>
                    <Flex width={"56"}justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 3:</Text>
                        <Text as={"b"}>23.01</Text>
                    </Flex>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 4:</Text>
                        <Text as={"b"}>Equity</Text>
                    </Flex>
                </VStack>
            </Box>
            <Box>
                <VStack>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 5:</Text>
                        <Text as={"b"}>No</Text>
                    </Flex>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 6:</Text>
                        <Text as={"b"}>12.00</Text>
                    </Flex>
                    <Flex width={"56"}justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 7:</Text>
                        <Text as={"b"}>17.01</Text>
                    </Flex>
                    <Flex width={"56"} justifyContent={"space-between"}>
                        <Text mr={"4"} color={"gray"}>Item 8:</Text>
                        <Text as={"b"}>10 Years</Text>
                    </Flex>
                </VStack>
            </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
