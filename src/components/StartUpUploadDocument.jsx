import { Box, Text, Flex,  SimpleGrid, Button, Divider,  Heading } from "@chakra-ui/react";
import React from "react";

const MoreDetails = () => {
  return (
    <Box>
        <Box display={'Grid'} gridTemplateColumns={'15% 90%'}>
            <Flex m={2} mr={20}>
                <Heading fontSize={24} mx={2} mt={20}>Upload Document</Heading>
            </Flex>

    <Box display={'grid'} gridTemplateColumns={"150%"} bgColor={"#F0F2FF"}>
      <Box bgColor={"#F0F2FF"}>
        <Box  mx={4} my={4}>
            <Text fontSize={20} as={'b'}> Standard Document</Text>
        </Box>
        <Box >

          <Box boxShadow={"lg"} ml={10}>
            <SimpleGrid columns={9} bgColor={'white'}>
              <Box textAlign={"center"} pt={"12"} pb={'4'} >
                <Text as={"b"}>Type</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} pb={'4'}  >
                <Text >Bank Statement</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >MIS</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Provisions</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Audited Financials</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >Sales Register</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Valuation Report</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >Funding Rounds</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Future Rejection</Text>
              </Box>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Box textAlign={"center"} pt={'6'} pb={"12"}  >
                <Text as={"b"}>Upload Status</Text>
              </Box>
              <Box textAlign={"center"}  pt={6} pb={"12"} ml={'20'} className={'Bank-Statement'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'MIS'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Provisions'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Audited-Financials'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Sales-Register'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Valuation-Report'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Funding-Rounds'}></Box>
              <Box className="Future-Rejection"></Box>
            </SimpleGrid>
          </Box>

          <Box boxShadow={"lg"} mt={4} ml={10}>
            <SimpleGrid columns={9} bgColor={'white'}>
              <Box textAlign={"center"} pt={"12"} pb={'4'} >
                <Text as={"b"}>Type</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} pb={'4'}  >
                <Text >Bank Statement</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >MIS</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Provisions</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Audited Financials</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >Sales Register</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Valuation Report</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >Funding Rounds</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Future Rejection</Text>
              </Box>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Box textAlign={"center"} pt={'6'} pb={"12"}  >
                <Text as={"b"}>Upload Status</Text>
              </Box>
              <Box textAlign={"center"}  pt={6} pb={"12"} ml={'20'} className={'Bank-Statement'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'MIS'}>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Provisions'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Audited-Financials'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Sales-Register'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Valuation-Report'}></Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Funding-Rounds'}></Box>
            </SimpleGrid>
          </Box>

          <Box textAlign={'center'} mb={10} mt={16}>
            <Button colorScheme="whatsapp" variant="solid" size="lg" >Submit Details</Button>
          </Box>

        </Box>
        </Box>
      </Box>
        </Box>
    </Box>
  )
}

export default MoreDetails
