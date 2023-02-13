import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function ProductsPage() {
  return (
    <Box className="products-page">
      <Box
        display={"flex"}
        flexDirection="column"
        className="products-heading"
        p={"10"}
      >
        <Text fontSize={"4xl"}>What We Offer</Text>
        <Text fontSize={"xs"} fontWeight="400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          esse, aliquam quae sed tempore vel voluptatibus beatae rerum rem,
          explicabo sequi illo totam inventore, eum quidem. Vero tenetur qui
          culpa.
        </Text>
      </Box>

      <Box display={"flex"} flexDirection="row" id="product-cards">
        <ProductCards />
      </Box>

      <ProductCreatives />
      <ProductTrusties />
      <ClientReviews />
    </Box>
  );
}

const ProductCards = () => {
  return (
    <Box className="product-header-cards">
      <SimpleGrid
        spacing={4}
        columns={4}
        p={"10"}
        m={"10"}
        pt={"0"}
        mt={"0"}
        ml={"0"}
      >
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image
              src="/images/card-1.jpg"
              borderRadius={"2xl"}
              border={"2px"}
            />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Workflows That Work
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image
              src="/images/card-2.jpg"
              borderRadius={"2xl"}
              border={"2px"}
            />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                All-In-One Solution
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image
              src="/images/card-3.jpg"
              borderRadius={"2xl"}
              border={"2px"}
            />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Comprehensive Customer Support
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
        <Card variant={"filled"} borderRadius="3xl">
          <CardHeader>
            <Image
              src="/images/card-4.jpg"
              borderRadius={"2xl"}
              border={"2px"}
            />
          </CardHeader>
          <CardBody>
            <Box p={"1"}>
              <Text as={"b"} fontSize="2xl">
                Smart Automation Tools
              </Text>
            </Box>
            <Box p={"2"}>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                laborum odio accusantium ex deleniti voluptate pariatur
                consequatur fugit.
              </Text>
            </Box>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

const ProductCreatives = () => {
  return (
    <Box display={"flex"}>
      <SimpleGrid columns={2}>
        <Box p={"10"} m={"10"} mt={"0"}>
          <Image src="/images/creatives.jpg" />
        </Box>
        <Box className="creatives-right-half" p={"10"} m={"20"} mt="0">
          <Box fontSize={"3xl"} p={"8"}>
            <Text>Built for Creatives,</Text>
            <Text>by Creatives</Text>
          </Box>

          <Box p={"8"} pt={"0"}>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              velit adipisci sequi nam doloribus, incidunt omnis ab ex dicta,
              iste quo, eveniet obcaecati pariatur! Deserunt, corporis aliquid.
              Officiis, iste atque!
            </Text>
          </Box>

          <Flex m={["5", "10", "", "8"]} mt="auto">
            <Flex
              justifyContent={"center"}
              width={["32", "", "28", "28"]}
              mr="2"
              alignItems={"center"}
            >
              <Image
                src="https://www.svgrepo.com/show/352586/toolbox.svg"
                boxSize={"6"}
                mr="1"
              />
              <Text fontSize={"xs"}>All-In-One Toolkit</Text>
            </Flex>

            <Flex width={["32", "", "32", "32"]} alignItems={"center"} mr="2">
              <Image
                src="https://www.svgrepo.com/show/477682/box-2.svg"
                boxSize={"6"}
                mr="1"
              />
              <Text fontSize={"xs"}>Integrated File Sharing</Text>
            </Flex>

            <Flex width={["32", "", "32", "32"]} alignItems={"center"}>
              <Image
                src="https://www.svgrepo.com/show/308523/design-tools-ruler-pen-pencil.svg"
                boxSize={"6"}
                mr="1"
              />
              <Text fontSize={"xs"}>Total Design Freedom</Text>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const ProductTrusties = () => {
  return (
    <Flex direction={"column"} bgColor={"#FFD7EF"} className="product-trusties">
      <Box p={"10"} m={"10"}>
        <Box>
          <Text fontSize={"3xl"}>Trusted Among Industry Leaders</Text>
        </Box>
        <Box m={"8"} ml={"0"} width={"50%"}>
          <Text fontSize={"xs"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            eveniet facere mollitia magni voluptatem odit nam suscipit
            cupiditate velit voluptas nihil temporibus dolore blanditiis
            pariatur vitae, similique fugit veritatis!
          </Text>
        </Box>
      </Box>

      <Box className="industry-icons">
        <SimpleGrid columns={4} m={"20"} mt={"0"}>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/424909/meta-logo-facebook-2.svg"
              boxSize={"20"}
            />
            <Text>Meta</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/335749/hexagonal.svg"
              boxSize={"20"}
            />
            <Text>Delta Tech</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/445134/first-aid-kit-solid.svg"
              boxSize={"20"}
            />
            <Text>Tech Med</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/478519/cpu-3.svg"
              boxSize={"20"}
            />
            <Text>Power Core</Text>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={4} m={"20"}>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/495431/link-circle.svg"
              boxSize={"20"}
            />
            <Text>Strongest Link</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/422149/check-cog-wheel-gear.svg"
              boxSize={"20"}
            />
            <Text>COG Industry</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/432546/play-forward.svg"
              boxSize={"20"}
            />
            <Text>A.T. MOTION</Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Image
              src="https://www.svgrepo.com/show/231478/bond.svg"
              boxSize={"20"}
            />
            <Text>BOND</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

const ClientReviews = () => {
  return (
    <Flex flexDirection={"column"}>
      <Box p={"10"} m={"10"}>
        <Text fontSize={"3xl"}>What Our Clients Say</Text>
      </Box>

      <SimpleGrid columns={3} m={"10"} p={"10"} mt={"0"} pt={"0"}>
        <Card border={"2px"} borderRadius={"2xl"} m={"10"}>
          <CardHeader>•••</CardHeader>
          <Divider></Divider>
          <CardBody>
            <Box p={"5"}>
              <Text>
                "I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tel their friends how great you are."
              </Text>
            </Box>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"flex-end"}>
            <Flex flexDirection={"column"}>
              <Text as={"b"}>Deena Levies,</Text>
              <Text as={"b"}>Mission Bay</Text>
            </Flex>
          </CardFooter>
        </Card>
        <Card border={"2px"} borderRadius={"2xl"} m={"10"}>
          <CardHeader>•••</CardHeader>
          <Divider></Divider>
          <CardBody>
            <Box p={"5"}>
              <Text>
                "I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tel their friends how great you are."
              </Text>
            </Box>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"flex-end"}>
            <Flex flexDirection={"column"}>
              <Text as={"b"}>Tom Smithsenson,</Text>
              <Text as={"b"}>Parkmerced</Text>
            </Flex>
          </CardFooter>
        </Card>
        <Card border={"2px"} borderRadius={"2xl"} m={"10"}>
          <CardHeader>•••</CardHeader>
          <Divider></Divider>
          <CardBody>
            <Box p={"5"}>
              <Text>
                "I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tel their friends how great you are."
              </Text>
            </Box>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"flex-end"}>
            <Flex flexDirection={"column"}>
              <Text as={"b"}>Tilly Green,</Text>
              <Text as={"b"}>Hayes Valley</Text>
            </Flex>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};
