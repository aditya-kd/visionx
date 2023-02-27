import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import ProductsPage from "./ProductsPage";

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} className="landing-page">
        <Box className="left-half" width={["100%", "", "", "50%"]}>
          <Box
            className="page-heading"
            fontSize={["md", "", "3xl"]}
            m={["", "", "10", "10"]}
            mb={"0"}
            p={["10", "", "10", "10"]}
          >
            <Text>Communicate</Text>
            <Text>Collaborate.Create.</Text>

            <Box className="page-content">
              <Text fontSize={["", "", "md"]} m="4" ml={"0"}>
                Vision-X provides and effective and powerful way to manange your
                products
              </Text>
              <Button
                bgColor={"black"}
                color="#fff"
                mt={"8"}
                _hover={{ bgColor: "rgba(0, 0, 0, 0.64)" }}
              >
                Get Started
              </Button>
            </Box>
          </Box>

          <Flex
            className="page-footer"
            m={["5", "10", "10", "10"]}
            mt="auto"
            p={["", "", "10", "10"]}
          >
            <Flex width={["32", "28", "28", "28"]} alignItems="center">
              <Image
                src="https://www.svgrepo.com/show/445341/security-verified-solid.svg"
                boxSize={"6"}
                mr="1"
              />
              <Text fontSize={"xs"}>Speed & Security</Text>
            </Flex>
            <Flex width={["32", "28", "28", "28"]} alignItems="center">
              <Image
                src="https://www.svgrepo.com/show/435947/server-cloud.svg"
                boxSize={"5"}
                mr="1"
              />
              <Text fontSize={"xs"}>Flexibility & Scalability</Text>
            </Flex>
            <Flex width={["32", "28", "28", "28"]} alignItems="center">
              <Image
                src="https://www.svgrepo.com/show/340031/collaborate.svg"
                boxSize={"6"}
                mr="1"
              />
              <Text fontSize={"xs"}>Better Collaboration</Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          className="right-half"
          width={"50%"}
          display="flex"
          flexDirection={"column"}
        >
          <Box display={"flex"} justifyContent="center" alignContent={"center"}>
            <Image
              src="/placeholder-pin-svgrepo-com.png"
              boxSize={"-webkit-fit-content"}
              m={["", "", "10", "10"]}
              p={["", "", "10", "10"]}
            />
          </Box>
          <Box display={["none", "", "flex"]} justifyContent="flex-end">
            <Box
              m={["", "", "10", "10"]}
              bgColor="#FFBF23"
              p={"3"}
              borderRadius="full"
              position={"fixed"}
              _hover={{ cursor: "pointer" }}
              onClick={onOpen}
            >
              <BsFillChatLeftTextFill onClick={onOpen} />
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Contact Us</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Your name</FormLabel>
                      <Input ref={initialRef} placeholder="Full name" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Your Message</FormLabel>
                      <Input placeholder="Enter your Message" size={"lg"} />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={["column", "row", "row", "row"]}
        className="second-half"
        width={"100%"}
        bgColor="#FFBF23"
      >
        <Box
          fontSize={"3xl"}
          p={["12", "24", "24", "24"]}
          pl={["", "", "20", "20"]}
        >
          <Text>With the Right Software, Great Things Can Happen</Text>
        </Box>

        <Box p={["12", "24", "24", "24"]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque quisquam vitae officia, porro reprehenderit maiores aut
            ex cumque necessitatibus at commodi consectetur sed amet unde totam
            distinctio fuga libero!
          </Text>
        </Box>
      </Box>
      <ProductsPage />
    </Box>
  );
}
