import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
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
    <Box display={"grid"} gridTemplateColumns={"20% 80%"}>
      <Box>
        <Flex justifyContent={"center"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Financial Details
          </Text>
        </Flex>
      </Box>
      <Box>
        <TableContainer m={"10"} p={"5"} boxShadow={"lg"}>
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
                <Td>EBIDTA</Td>
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
          <NavLink to={"/upload-documents"}>
          <Button width={"52"} colorScheme={"messenger"}>
            Page 3
          </Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
