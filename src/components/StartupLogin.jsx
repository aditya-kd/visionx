import React from "react";
import {
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const App = () => {
  return (
    <ColorModeProvider>
      <CSSReset />
      <LoginArea />
    </ColorModeProvider>
  );
};

const LoginArea = () => {
  return (
    <Box>
      <Box display={["flex", "flex", "grid", "grid"]} gridTemplateColumns={"50% 50%"}>
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex borderRadius={"2xl"} bgColor={"#81C7EF"} p={"20"}>
            <Text color={"white"}>Service to our Customers</Text>
          </Flex>
        </Flex>

        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box
            borderWidth={1}
            px={4}
            width={["fit-content", "", "full", "full"]}
            maxWidth="500px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
            background={"white"}
          >
            <Box pt={6} pb={1}>
              <LoginHeader />
              <LoginForm />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading fontSize={"28px"}>Welcome to Vision-X</Heading>
      <Text fontSize={"11px"} color={"grey"}>
        Welcome back! Please enter your details.
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Box m={6} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Email </FormLabel>
          <Input type="email" color={"grey"} placeholder="Enter your email " />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>
              {" "}
              <Text fontSize={"13px"}>Remember for 30 days</Text>
            </Checkbox>
          </Box>
          <Box>
            <Link color="blue.500">
              <Text fontSize={"13px"}>Forgot password? </Text>
            </Link>
          </Box>
        </Stack>

        <Button backgroundColor="blue" color={"white"} width="full" mt={4}>
          Sign In
        </Button>
        <Button border={"1px"} width="full" mt={4}>
          <FcGoogle align={"center"} />
          <Text> Sign in with Google</Text>
        </Button>

        <Box textAlign="center" pt={4} pb={3} color={"grey"}>
          Don't have an account? <Link color="blue.500">Sign up</Link>
        </Box>
      </form>
    </Box>
  );
};

export default App;
