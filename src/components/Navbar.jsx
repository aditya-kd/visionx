import {
  Box,
  Button,
  ListItem,
  Text,
  UnorderedList,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Box
        justifyContent={"space-between"}
        className="navbar-lg"
        display={["none", "none", "flex", "flex"]}
      >
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          className="navbar-ul"
        >
          <ListItem p={"2"} className="navbar-li">
            <Link to={"/"}>
              <Text as={"b"} fontSize={"x-large"}>
                Vision-X
              </Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          className="navbar-ul"
        >
          <Link to={"/start-ups"}>
            <li className="navbar-li">Start-ups</li>
          </Link>
          <Link to={"/partners"}>
            <li className="navbar-li">Partners</li>
          </Link>
          <Link to={"/investors"}>
            <li className="navbar-li">Investors</li>
          </Link>
          <Link to={"/blog"}>
            <li className="navbar-li">Blog</li>
          </Link>
          <Link to={"/about"}>
            <li className="navbar-li">About</li>
          </Link>
          <ListItem p={"3"}>
            <Button
              bgColor={"#FFBF23"}
              color={"white"}
              size={"sm"}
              variant={"ghost"}
              _hover={{ bgColor: "#FFD369" }}
            >
              Contact Us
            </Button>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box
        className="nav-drawer"
        display={["flex", "flex", "none", "none"]}
        justifyContent={"space-between"}
      >
        <Flex m={"1"}>
          <Link to={"/"}>
            <Text as={"b"} fontSize={"x-large"} className={"navbar-ul"}>
              Vision-X
            </Text>
          </Link>
        </Flex>
        <Flex m={"1"}>
          <Button>
            <HamburgerIcon ref={btnRef} onClick={onOpen} />
          </Button>
  
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Vision-X</DrawerHeader>

              <DrawerBody>
                <UnorderedList
                  listStyleType={"none"}
                  className="navbar-ul"
                  textAlign={"center"}
                  onClick={onClose}
                >
                  <Link to={"/start-ups"}>
                    <li className="drawer-li">Start-ups</li>
                  </Link>
                  <Link to={"/partners"}>
                    <li className="drawer-li">Partners</li>
                  </Link>
                  <Link to={"/investors"}>
                    <li className="drawer-li">Investors</li>
                  </Link>
                  <Link to={"/blog"}>
                    <li className="drawer-li">Blog</li>
                  </Link>
                  <Link to={"/about"}>
                    <li className="drawer-li">About</li>
                  </Link>
                  <ListItem p={"2"}>
                    <Button
                      bgColor={"#FFBF23"}
                      color={"white"}
                      size={"sm"}
                      variant={"ghost"}
                      _hover={{ bgColor: "#FFD369" }}
                    >
                      Contact Us
                    </Button>
                  </ListItem>
                </UnorderedList>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Box>
  );
}
