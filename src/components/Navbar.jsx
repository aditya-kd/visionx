import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <UnorderedList listStyleType={"none"} display={"flex"} className="navbar-ul">
        <ListItem p={'2'} className="navbar-li">
          <Link to={"/"}>
          <Text as={"b"} fontSize={'x-large'}>Vision-X</Text>
          </Link>
        </ListItem>
      </UnorderedList>
      <UnorderedList listStyleType={"none"} display={"flex"} className="navbar-ul">
        <Link to={"/start-ups"}>
        <li className="navbar-li" p={'2'}>Start-ups</li>
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
        <ListItem p={'2'}>
            <Button colorScheme={'messenger'}>Contact Us</Button>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
