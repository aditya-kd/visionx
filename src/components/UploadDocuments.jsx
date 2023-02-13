import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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

export default function UploadDocuments() {
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Box>
        <Flex justifyContent={"center"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Upload Documents
          </Text>
        </Flex>
      </Box>

      <Box>
        <Box m={"2"} bgColor={"#F0F2FF"}>
          <form action="" method="post">
            <Box className="basic-details">
              <Box p={"4"} m={"4"} mb={"0"} pb={"0"}>
                <Text fontSize={"2xl"}>Standard Documents</Text>
              </Box>
              <SimpleGrid columns={2}>
                <Stack direction={"column"} p={"4"} m={"4"}>
                  <Box>
                    <FormControl isRequired>
                      <Flex>
                        <FormLabel>Bank Statements</FormLabel>
                        <Text as={"i"}>(Tenure: 24 Months)</Text>
                      </Flex>
                      <Input
                        type={"name"}
                        variant={"ghost"}
                        placeholder="Enter Bank Statements"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <Flex>
                        <FormLabel>Provisions</FormLabel>
                        <Text as={"i"}>(Tenure: 24 Months)</Text>
                      </Flex>
                      <Input
                        type={"number"}
                        variant={"ghost"}
                        placeholder="Provisions"
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
                      <Flex>
                        <FormLabel>MIS</FormLabel>
                        <Text as={"i"}>(Tenure: 12 Months)</Text>
                      </Flex>
                      <Input
                        variant={"ghost"}
                        type={"Text"}
                        placeholder="MIS"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <Flex>
                        <FormLabel>Audited Financials</FormLabel>
                        <Text as={"i"}>(Tenure: 24 Months)</Text>
                      </Flex>
                      <Input
                        variant={"ghost"}
                        type={"text"}
                        placeholder="Financials"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <Flex>
                        <FormLabel>Sales Register</FormLabel>
                        <Text as={"i"}>(Tenure: 12 Months)</Text>
                      </Flex>
                      <Input
                        variant={"ghost"}
                        type={"text"}
                        placeholder="Sales"
                      />
                    </FormControl>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Box>

            <Box className="additional-details">
              <Box m={"4"} p={"4"} mt={"0"} mb={"0"}>
                <Text fontSize={"2xl"}>Additional Documents For Equity</Text>
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
              <Button type="submit" colorScheme={"whatsapp"}>
                Submit Details
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
