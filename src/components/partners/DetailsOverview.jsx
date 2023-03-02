
import { Box, Text, Flex, SimpleGrid, Button, Divider } from "@chakra-ui/react";
import React from "react";
import { FiCheckCircle } from 'react-icons/fi';
import {BsDashCircle} from 'react-icons/bs';
import { GrUploadOption } from 'react-icons/gr';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { IoIosArrowDropright } from 'react-icons/io';

const MoreDetails = () => {
  return (
    <Box>
        <Box>
            <Flex m={2}>
                <Button borderColor={'blue'} color={'white'} width={'fit-content'} backgroundColor={'blue'} mr={2}>Financial Details</Button>
                <Button borderColor={'blue'} width={'fit-content'} color={'blue'}>Upload Documents</Button>
            </Flex>
        </Box>

    <Box ml={140} display={'grid'} gridTemplateColumns={"150% 0%"}>
      <Box>
        <Box>
          <Box boxShadow={"lg"}>
            <SimpleGrid columns={9} row={2}>
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
              <Box textAlign={"center"}  pt={6} pb={"12"} ml={'20'} className={'Bank-Statement'}>
                <Text as={"b"} ><FiCheckCircle color={'green'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'MIS'}>
                <Text as={"b"} ><FiCheckCircle color={'green'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Provisions'}>
                <Text as={"b"} ><BsDashCircle color={'orange'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Audited-Financials'}>
                <Text as={"b"} ><FiCheckCircle color={'green'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Sales-Register'}>
                <Text as={"b"} ><GrUploadOption color={'green'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Valuation-Report'}>
                <Text as={"b"} ><AiOutlineCloseCircle color={'red'} size={'30'}/></Text>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} ml={'20'} className={'Funding-Rounds'}>
                <Text as={"b"} ><BsDashCircle color={'orange'} size={'30'}/></Text>
              </Box>
              <Box className="Future-Rejection"></Box>
            </SimpleGrid>
          </Box>
        </Box>

        <Box>
          <Box boxShadow={"lg"}>
            <SimpleGrid columns={9} row={2}>
              <Box textAlign={"center"} pt={"12"} pb={'4'} >
                <Text as={"b"}>Type</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} pb={'4'}  >
                <Text >KYC</Text>
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
              <Box textAlign={"center"} pt={'6'} pb={"12"} >
                <Text as={"b"}>Upload Status</Text>
              </Box>
              <Box textAlign={"center"}  pt={6} pb={"12"} className={'KYC'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}  className={'MIS'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}  className={'Provisions'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}  className={'Audited-Financials'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}  className={'Sales-Register'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"} className={'Valuation-Report'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}  className={'Funding-Rounds'}>
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>
              <Box textAlign={"center"} pt={6} pb={"12"}   className="Future-Rejection">
                <Button as={"b"} backgroundColor={'white'} ><GrUploadOption size={'30'}/></Button>
              </Box>

             
            </SimpleGrid>
          </Box>
        </Box>



        <Box>
          <Box boxShadow={"lg"}>
            <SimpleGrid columns={11}>
              <Box textAlign={"center"} pt={"12"} pb={'4'} >
                <Text as={"b"}>Data</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} pb={'4'}  >
                <Text >Jan'23</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Dec'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Nov'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Oct'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >Sep'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} >
                <Text >Aug'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}   >
                <Text >July'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >Jun'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"}  >
                <Text >May'22</Text>
              </Box>
              <Box textAlign={"center"} pt={"12"} ml={50} >
                <IoIosArrowDropright size={'30'} />
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
              <Divider/>
              <Divider/>
              <Box textAlign={"center"} pt={'3'} pb={"3"} >
                <Text >MIS</Text>
              </Box>
              <Box className="MIS-Jan'22"></Box>
              <Box className="MIS-Dec'22"></Box>
              <Box className="MIS-Nov'22"></Box>
              <Box className="MIS-Oct'22"></Box>
              <Box className="MIS-Sep'22"></Box>
              <Box className="MIS-Aug'22"></Box>
              <Box className="MIS-Jul'22"></Box>
              <Box className="MIS-Jun'22"></Box>
              <Box className="MIS-May'22"></Box>
              <Box className="MIS-Apr'22"></Box>
              
              <Box textAlign={"center"} pt={'3'} pb={"3"} >
                <Text >Bank statement</Text>
              </Box>
              <Box className="Bank-Jan'22"></Box>
              <Box className="Bank-Dec'22"></Box>
              <Box className="Bank-Nov'22"></Box>
              <Box className="Bank-Oct'22"></Box>
              <Box className="Bank-Sep'22"></Box>
              <Box className="Bank-Aug'22"></Box>
              <Box className="Bank-Jul'22"></Box>
              <Box className="Bank-Jun'22"></Box>
              <Box className="Bank-May'22"></Box>
              <Box className="Bank-Apr'22"></Box>

              <Box textAlign={"center"} pt={'3'} pb={"3"} >
                <Text >Audited Financials</Text>
              </Box>
              <Box className="Audited-Jan'22"></Box>
              <Box className="Audited-Dec'22"></Box>
              <Box className="Audited-Nov'22"></Box>
              <Box className="Audited-Oct'22"></Box>
              <Box className="Audited-Sep'22"></Box>
              <Box className="Audited-Aug'22"></Box>
              <Box className="Audited-Jul'22"></Box>
              <Box className="Audited-Jun'22"></Box>
              <Box className="Audited-May'22"></Box>
              <Box className="Audited-Apr'22"></Box>

              <Box textAlign={"center"} pt={'3'} pb={"6"} >
                <Text >Sales Register</Text>
              </Box>
              <Box className="Sales-Jan'22"></Box>
              <Box className="Sales-Dec'22"></Box>
              <Box className="Sales-Nov'22"></Box>
              <Box className="Sales-Oct'22"></Box>
              <Box className="Sales-Sep'22"></Box>
              <Box className="Sales-Aug'22"></Box>
              <Box className="Sales-Jul'22"></Box>
              <Box className="Sales-Jun'22"></Box>
              <Box className="Sales-May'22"></Box>
              <Box className="Sales-Apr'22"></Box>

              

            </SimpleGrid>
          </Box>
        </Box>

        <Flex justifyContent={"center"} mt={'4'}>
          <Button colorScheme={"whatsapp"}>
            Add Deals
          </Button>
        </Flex>
      </Box>
        </Box>
    </Box>
  )
}

export default MoreDetails
