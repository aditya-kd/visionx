import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Page2() {
  return (
    <Box>
      <Box m={"4"}>
        <Heading>Financials</Heading>
        <SimpleGrid columns={2}>
          <Box m={"2"} p={"4"} boxShadow={"lg"}>
            <Image src="/images/charts/chart-1.jpg" />
          </Box>
          <Box m={"2"} p={"4"} boxShadow={"lg"}>
            <Image src="/images/charts/char-2.jpg" />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2}>
          <Box m={"2"} p={"4"} boxShadow={"lg"}>
            <Image src="/images/charts/chart-1.jpg" />
          </Box>
          <Box m={"2"} p={"4"} boxShadow={"lg"}>
            <Image src="/images/charts/chart-3.jpg" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
