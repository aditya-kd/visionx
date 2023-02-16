import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor={"black"}>
      <Box display={"flex"} backgroundColor={"#FFBF23"}>
        <Box ml={6} display={"flex"} pt={"60px"}>
          <Image src="/images/wedu.png" height={"50px"}></Image>
          <Box textAlign={"left"}>
            <Text ml={2}>
              <strong> WEDU</strong>
            </Text>
            <Text ml={2} pb={"60px"}>
              {" "}
              Communicate. Collabrate. Create
            </Text>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} backgroundColor={"#FFBF23"} mb={19}>
        <Box ml={85} display={"flex"}>
          <Box textAlign={"left"}>
            <Heading fontSize={20}>Contact</Heading>
            <Text pt={7}>500 Terry Francois Street</Text>
            <Text>San Francisco, CA 94158</Text>
            <Text pt={7}>General Inquiries: </Text>
            <Text>123-456-7890</Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          backgroundColor={"#FFBF23"}
          pt={"50px"}
          pb={"60px"}
        >
          <Box ml={85} display={"flex"}>
            <Box textAlign={"left"}>
              <Text>Sales:</Text>
              <a href="https://mail.google.com/" target="_blank">
                <Text _hover={{ color: "black" }}>info@mysite.com</Text>
              </a>
              <Text pt={7}>Customer Care: </Text>
              <a href="https://mail.google.com/" target={"_blank"}>
                <Text _hover={{ color: "black" }}>info@mysite.com</Text>
              </a>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} backgroundColor={"#FFBF23"} pb={"60px"}>
          <Box ml={100} display={"flex"}>
            <Box textAlign={"left"}>
              <Heading fontSize={20}>Quick Links</Heading>
              <Box pt={7}></Box>
              <Text as="u">Terms & Conditions</Text>
              <Box pt={7}></Box>
              <Text as="u">Privacy Policy </Text>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} backgroundColor={"#FFBF23"} pb={"60px"}>
          <Box ml={100} display={"flex"}>
            <Box textAlign={"left"}>
              <Heading fontSize={20}>Follow</Heading>
              <Text pt={7}>Sign up to get the latest news</Text>
              <Text> on our product.</Text>
              <br />

              <Text pb={"6px"}>Email*</Text>
              {/* button */}
              <Subscribe />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} backgroundColor={"#FFBF23"} pb={"60px"}>
          <Box ml={"20"} display={"flex"} mr={"60px"}>
            <Box textAlign={"left"}>
              <a href="https://www.linkedin.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  LinkedIn
                </Heading>
              </a>
              <br />
              <a href="https://www.facebook.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  Facebook
                </Heading>
              </a>
              <br />
              <a href="https://www.youtube.com/" target={"_blank"}>
                <Heading fontSize={20} _hover={{ color: "black" }}>
                  YouTube
                </Heading>
              </a>
              <br />
            </Box>
          </Box>
        </Box>
      </Box>
      <Center display={"flex"}>
        <Text color={"white"} pb={1}>
          © 2035 WeDu. Powered and secured by <Box as="u">Wix </Box>
        </Text>
      </Center>
    </Box>
  );

  function Subscribe() {
    return (
      <InputGroup size="md">
        <Input borderColor={"black"} pr="1.75rem" borderWidth={2} />
        <InputRightElement width="4.5rem">
          <Button
            h="2.5rem"
            size="sm"
            backgroundColor={"black"}
            color={"white"}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }
};

export default Footer;
