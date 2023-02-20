import { AddIcon } from "@chakra-ui/icons";
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
import { NavLink } from "react-router-dom";

export default function PartnerDeals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
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

      <Box>
        <Flex justifyContent={"space-between"}>
          <Heading m={"4"}>Partner Name</Heading>
          <NavLink to={"/ib-dashboard"}>
            <Button leftIcon={<AddIcon />} m={"4"} colorScheme={"messenger"}>
              Add Deals
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
                          <Text fontWeight={"bold"}>
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
                            Compensation asked:
                          </Text>
                          <Text mr={"1"}>Equity</Text>
                          <Text as={"b"}>30%</Text>
                        </Flex>
                      </HStack>
                      <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                        <Flex>
                          <Text mr={"1"} as={"b"}>
                            Compensation given:
                          </Text>
                          <Text mr={"1"}>Equity</Text>
                          <Text as={"b"}>23%</Text>
                        </Flex>
                      </HStack>
                      <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                        <Flex>
                          <Text mr={"1"} as={"b"}>
                            Date:
                          </Text>
                          <Text>25th July, 2021</Text>
                        </Flex>
                      </HStack>
                      <HStack p={"1"} m={"1"} justifyContent={"space-between"}>
                        <Flex>
                          <Text mr={"1"} as={"b"}>
                            Other details
                          </Text>
                        </Flex>
                        <Button
                          borderRadius={"2xl"}
                          width={"28"}
                          colorScheme={"messenger"}
                        >
                          Details
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
    </Box>
  );
}
