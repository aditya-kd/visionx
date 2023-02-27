import React from "react";
import {
  ThemeProvider,
  theme,
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
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = () => {
  return (
    <Box>
      <Box display={"grid"} gridTemplateColumns={"60% 40%"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex borderRadius={"2xl"} mr={"100"} ml={"32"}>
            <Text fontSize={"30"} as={"b"}>
              Onboard with us to grow together as a team
            </Text>
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
            width="full"
            maxWidth="500px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
            background={"white"}
          >
            <Box p={6} pb={4}>
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
      <Heading fontSize={"30px"}>Welcome to WE-GenX</Heading>
      <Text fontSize={"13px"} color={"grey"}>
        Welcome back! Please enter your details.
      </Text>
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Box my={4} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Phone Number </FormLabel>
          <Input
            type="email"
            color={"grey"}
            placeholder="Enter your phone number "
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>OTP</FormLabel>
          <Input type="password" placeholder="Enter your OTP" />
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

        <Button backgroundColor="blue" color={"white"} width="full" mt={3}>
          Sign In
        </Button>
        <Button border={"1px"} width="full" mt={3}>
          <FcGoogle />
          Sign in with Google
        </Button>

        <Box textAlign="center" pt={5} color={"grey"}>
          Don't have an account?{" "}
          <Link href={"/partner-signup"} color="blue.500">
            Sign up
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default App;
