import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Page3() {
  return (
    <Box>
      <Box m={"4"}>
        <Heading>About Company</Heading>
        <Text my={"2"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          deserunt dolorem repellat eum harum itaque qui aut autem! In officia
          inventore unde velit debitis iusto tempore modi aliquid itaque
          reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam, deserunt dolorem repellat eum harum itaque qui aut autem!
          In officia inventore unde velit debitis iusto tempore modi aliquid
          itaque reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam, deserunt dolorem repellat eum harum itaque qui aut
          autem! In officia inventore unde velit debitis iusto tempore modi
          aliquid itaque reiciendis?
        </Text>
        <Box my={"4"}>
          <Flex>
            <Text mr={"3"} color={"gray"}>
              Founded by:
            </Text>
            <Text>Anirudh Pathak, Jatin Patel</Text>
          </Flex>
          <Flex>
            <Text mr={"3"} color={"gray"}>
              Year:
            </Text>
            <Text>2016</Text>
          </Flex>
        </Box>
        <Box>
          <Heading size={"lg"}>Use of Funds</Heading>
          <Image
            boxSize={"60"}
            src="https://www.svgrepo.com/show/488326/pie-chart-ui.svg"
          />
        </Box>
      </Box>
    </Box>
  );
}
