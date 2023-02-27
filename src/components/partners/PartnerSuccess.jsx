import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function PartnerSuccess() {
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Flex
        textAlign={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Box>
          <Heading>Partners</Heading>
        </Box>
        <Box>
          <Image src="/images/partner-success.jpg" />
        </Box>
        <Box>
          <Text color={"GrayText"} fontSize={"3xl"}>V!nest</Text>
        </Box>
      </Flex>

      <Box>
        <Box width={"3xl"} p={"8"} m={"8"}>
          <Text as={"b"} fontSize={"4xl"}>
            We know you will bring out the best there is.
          </Text>
        </Box>
        <Box width={"3xl"} p={"8"} m={"8"}>
          <Box>
            <Text as={"b"} fontSize={"3xl"}>
              Thank you!
            </Text>
          </Box>
          <Box>
            <Text fontSize={"large"}>
              Your details have been saved successfully. You can now proceed
              further to the dashboard.
            </Text>
          </Box>
        </Box>
        <Flex width={"3xl"} my={"4"} justifyContent={"center"}>
          <NavLink to={"/partner-dashboard"}>
            <Button colorScheme={"messenger"}>Dashboard</Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
