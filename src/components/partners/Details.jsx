import {
    Box,
    Button,
    Flex,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import React from "react";
  import { NavLink } from "react-router-dom";
  
  export default function FinancialDetails() {
    return (
      <Box >
        <Box>
          <Flex m={2} >
            <Button borderColor={'blue'} color={'blue'} mr={2} width={'fit-content'}>Financial Details</Button>
            <Button borderColor={'blue'} backgroundColor={'blue'}  width={'fit-content'} color={'white'}>Upload Documents</Button>
          </Flex>
        </Box>
        <Box ml={140}>
          <TableContainer  my={'4'} mx={'10'} p={"5"} boxShadow={"lg"}>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>
                    <Flex justifyContent={"center"}>Year 2</Flex>
                  </Th>
                  <Th>
                    <Flex justifyContent={"center"}>Year 1</Flex>
                  </Th>
                  <Th>
                    <Flex justifyContent={"center"}>Year 0</Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontWeight={"bold"}>ARR</Td>
                  <Td>
                    <Input variant={"filled"} placeholder={"Lacs/Cr/Mil"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight={"bold"}>NP (Net Profit)</Td>
                  <Td>
                    <Input variant={"filled"} placeholder={"Lacs/Cr/Mil"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Gross Profit</Td>
                  <Td>
                    <Input variant={"filled"} placeholder={"Lacs/Cr/Mil"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Marketing Expense</Td>
                  <Td>
                    <Input variant={"filled"} placeholder={"Lacs/Cr/Mil"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>EBITA</Td>
                  <Td>
                    <Input variant={"filled"} placeholder={"Lacs/Cr/Mil "} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                  <Td>
                    <Input variant={"filled"} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent={"center"}>
            <NavLink to={"/partner-deals"}>
              <Button width={"52"} colorScheme={'whatsapp'}>
                Save Details
              </Button>
            </NavLink>
          </Flex>
        </Box>
      </Box>
    );
  }
  