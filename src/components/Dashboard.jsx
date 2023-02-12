import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
  return (
    <Box display={"grid"} gridTemplateColumns={"20% 80%"}>
      <Flex
        flexDirection={"column"}
        bgColor={"#F0F2FF"}
        m={"2"}
        justifyContent="space-around"
        className="StartUp-menu"
      >
        <Flex justifyContent={"center"}>
          <Text className="StartUp-dashboard" fontSize={"3xl"}>Start-Ups</Text>
        </Flex>
        <Box>
          <VStack fontSize={"xl"} p={"4"} m={"4"}>
            <Box>
              <Text>Dashboard</Text>
            </Box>
            <Box>
              <Text>Deals</Text>
            </Box>
            <Box>
              <Text>Company Details</Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <VStack fontSize={"xl"} p={"4"} m={"4"}>
            <Box>
              <Text>Profile</Text>
            </Box>
            <Box>
              <Text>Logout</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      <Box>
        <Box p={"5"}>
          <Text fontWeight={"semibold"} fontSize={"3xl"}>Company Name</Text>
        </Box>

        <HStack
          spacing={"16"}
          justifyContent={"space-evenly"}
          p={"5"}
          m={"5"}
          className={"startUp-board"}
          boxShadow="lg"
        >
          <Flex direction={"column"}>
            <Image
              src="https://www.svgrepo.com/show/483409/handshake.svg"
              boxSize={"20"}
            />
            <Text>Deals Signed</Text>
          </Flex>
          <Flex direction={"column"}>
            <Image
              src="https://www.svgrepo.com/show/483226/money-euro-banknote.svg"
              boxSize={"20"}
            />
            <Text>Deals Financed</Text>
          </Flex>
          <Flex direction={"column"}>
            <Image
              src="https://www.svgrepo.com/show/483307/of-hand-clasping-money.svg"
              boxSize={"20"}
            />
            <Text>Incentive Earned</Text>
          </Flex>
          <Flex direction={"column"}>
            <Image
              src="https://www.svgrepo.com/show/410239/money-plant.svg"
              boxSize={"20"}
            />
            <Text>Incentive Potential</Text>
          </Flex>
        </HStack>

        <Box m={"5"}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ipsum. Nemo veniam, sequi iure rem maiores deserunt cupiditate sint
            nam exercitationem nostrum aut dolore molestias aliquid, earum
            corporis obcaecati ex? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nemo commodi perspiciatis adipisci error incidunt
            neque maiores inventore repudiandae, consequuntur voluptatum
            reprehenderit. Accusantium alias quaerat, nemo harum iste odio vitae
            explicabo? A fugiat sed quis iste perspiciatis eius alias ut at.
            Eius hic, tenetur veniam error distinctio nihil aperiam ipsum
            adipisci iure odio! Ipsa quas mollitia est reprehenderit a velit
            iste. Doloribus quisquam modi quod ipsam itaque eos odio asperiores.
            Labore ex similique doloribus, accusamus ratione laborum enim eum
            perspiciatis molestias quis. Reiciendis harum vitae quos accusamus,
            modi ipsum voluptatibus iste! Error accusantium quasi molestias
            impedit nam architecto, cupiditate neque explicabo pariatur.
          </Text>
        </Box>

        <Flex justifyContent={"center"} p={"5"} m={"5"}>
          <Button colorScheme={"messenger"}>Company Details</Button>
        </Flex>
      </Box>
    </Box>
  );
}
