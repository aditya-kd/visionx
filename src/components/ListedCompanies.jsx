import { AddIcon, ChatIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  RadioGroup,
  Radio,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { IoFilter, IoSearchCircle } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ListedCompanies() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Heading m={"4"}>Listed Companies</Heading>
        <NavLink to={"/ib-dashboard"}>
        <Button
          rightIcon={<FaRegArrowAltCircleRight />}
          m={"4"}
          colorScheme={"messenger"}
        >
          Dashboard
        </Button>
        </NavLink>
      </Flex>
      <Box>
        <InputGroup m={"4"} width={"auto"}>
          <InputLeftElement
            children={
              <Icon color={"blue"} fontSize={"5xl"} as={IoSearchCircle} />
            }
          />
          <Input variant={"filled"} placeholder=" Find your match here..." />
          <InputRightElement
            width={"24"}
            children={
              <Button
                onClick={onOpen}
                width={"20"}
                leftIcon={<IoFilter color="black" fontSize={"large"} />}
                variant={"solid"}
                bgColor={"white"}
                border={"1px"}
                borderColor={"blue"}
                borderRadius={"3xl"}
              >
                <Text color={"black"}>Filters</Text>
              </Button>
            }
          />
        </InputGroup>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Box width={"96"}>
                  <Text as={"b"}>Selected Filters</Text>
                  <Flex justifyContent={"space-evenly"}>
                    <Button size={"xs"} m={"1"}>
                      Filter 1
                    </Button>
                    <Button size={"xs"} m={"1"}>
                      Filter 2
                    </Button>
                    <Button size={"xs"} m={"1"}>
                      Filter 3
                    </Button>
                    <Button size={"xs"} m={"1"}>
                      Filter 4
                    </Button>
                  </Flex>
                  <HStack>
                    <Input width={"40"} placeholder={"Search Here..."} />
                    <Button colorScheme={"messenger"}>Save</Button>
                    <Button variant={"outline"}>Reset All</Button>
                  </HStack>
                </Box>
                <Divider />
                <Box width={"96"}>
                  <SimpleGrid columns={2}>
                    <Box m={"4"}>
                      <Text as={"b"}>Compensation</Text>
                      <RadioGroup>
                        <HStack spacing={2} p={"2"} boxShadow={"lg"}>
                          <Radio value="equity">Equity</Radio>
                          <Radio value="debt">Debt</Radio>
                        </HStack>
                      </RadioGroup>
                    </Box>
                    <Box m={"4"}>
                      <Text as={"b"}>Equity</Text>
                      <Box>
                        <Slider
                          aria-label="slider-ex-6"
                          onChange={(val) => setSliderValue(val)}
                        >
                          <SliderMark value={25} {...labelStyles}>
                            25%
                          </SliderMark>
                          <SliderMark value={50} {...labelStyles}>
                            50%
                          </SliderMark>
                          <SliderMark value={75} {...labelStyles}>
                            75%
                          </SliderMark>
                          <SliderMark
                            value={sliderValue}
                            textAlign="center"
                            bg="blue.500"
                            color="white"
                            mt="-10"
                            ml="-5"
                            w="12"
                          >
                            {sliderValue}%
                          </SliderMark>
                          <SliderTrack>
                            <SliderFilledTrack />
                          </SliderTrack>
                          <SliderThumb />
                        </Slider>
                      </Box>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Divider />
                <Box width={"96"}>
                  <Text as={"b"}>Markets</Text>
                  <FormControl>
                    <Input placeholder="Search here..." />
                    <FormHelperText>POPULAR</FormHelperText>
                  </FormControl>
                  <VStack>
                    <Flex width={"96"} justifyContent={"space-between"}>
                      <Text as={"b"}>Healthcare</Text>
                      <AddIcon />
                    </Flex>
                    <Flex width={"96"} justifyContent={"space-between"}>
                      <Text as={"b"}>E-Commerce</Text>
                      <AddIcon />
                    </Flex>
                    <Flex width={"96"} justifyContent={"space-between"}>
                      <Text as={"b"}>Education</Text>
                      <AddIcon />
                    </Flex>
                    <Flex width={"96"} justifyContent={"space-between"}>
                      <Text as={"b"}>Enterprise Software</Text>
                      <AddIcon />
                    </Flex>
                    <Flex width={"96"} justifyContent={"space-between"}>
                      <Text as={"b"}>Ed-tech</Text>
                      <AddIcon />
                    </Flex>
                  </VStack>
                </Box>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Apply
              </Button>
              <Button variant="ghost">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <TableContainer>
        <Table>
          <Thead></Thead>
          <Tbody>
            <Tr>
              <Box boxShadow={"lg"} m={"4"} p={"4"}>
                <SimpleGrid columns={2}>
                  <Box borderRight={"1px"} borderColor={"gray.200"}>
                    <Flex>
                      <Image
                        m={"4"}
                        mt={8}
                        boxSize={"16"}
                        src="https://www.svgrepo.com/show/300619/placeholder-map-locator.svg"
                      />
                      <Box mt={"4"}>
                        <Text fontSize={"xl"} fontWeight={"bold"}>
                          High-performance automation tooling
                        </Text>
                        <Text as={"sub"}>10-15 Employees</Text>
                        <Flex mt={"4"}>
                          <Text mr={"1"} as={"b"}>
                            Founded:
                          </Text>
                          <Text>2012</Text>
                        </Flex>
                      </Box>
                    </Flex>
                    <Flex m={"4"}>
                      <Text mr={"1"} as={"b"}>
                        Compensation Form:{" "}
                      </Text>
                      <Text>Equity 30%</Text>
                    </Flex>
                  </Box>

                  <Box>
                    <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                      <Flex>
                        <Text mr={"1"} as={"b"}>
                          ARR:
                        </Text>
                        <Text>74</Text>
                      </Flex>
                      <Button
                        borderRadius={"2xl"}
                        bgColor={"black"}
                        textColor={"white"}
                        width={"28"}
                        leftIcon={<EmailIcon />}
                      >
                        Contact
                      </Button>
                    </HStack>
                    <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                      <Flex>
                        <Text mr={"1"} as={"b"}>
                          Profit:
                        </Text>
                        <Text>89</Text>
                      </Flex>
                      <Button
                        borderRadius={"2xl"}
                        bgColor={"black"}
                        textColor={"white"}
                        width={"28"}
                        leftIcon={<ChatIcon />}
                      >
                        Message
                      </Button>
                    </HStack>
                    <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                      <Flex>
                        <Text mr={"1"} as={"b"}>
                          Growth Rate:
                        </Text>
                        <Text>89%</Text>
                      </Flex>
                      <Button
                        borderRadius={"2xl"}
                        width={"28"}
                        colorScheme={"messenger"}
                      >
                        View Details
                      </Button>
                    </HStack>
                  </Box>
                </SimpleGrid>
              </Box>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
