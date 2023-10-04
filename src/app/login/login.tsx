import React from 'react';
import {
  Box,
  Spacer,
  Button,
  Text,
  Input,
  Flex,
  Checkbox,
  Center,
  Container,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'; // Import the CloseIcon

export default function Login() {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
    >
      <Box maxW="420px" p="20px" borderWidth="1px">
        <Text
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
          mb="20px"
        >
          NextUI Login
        </Text>
        <InputGroup>
          <Input
            borderColor="primary.500"
            size="lg"
            placeholder="Email"
            // Add any icon component here if needed
          />
          <InputRightElement>
            {/* CloseIcon acts as a clear button */}
            <CloseIcon />
          </InputRightElement>
        </InputGroup>
        <Spacer mt={1} />
        <InputGroup>
          <Input
            borderColor="primary.500"
            size="lg"
            placeholder="Password"
            mb="6px"
            // Add any icon component here if needed
          />
          <InputRightElement>
            <CloseIcon />
          </InputRightElement>
        </InputGroup>
        <Flex justify="space-between">
          <Checkbox>
            <Text fontSize="14px">Remember me</Text>
          </Checkbox>
          <Text fontSize="14px">Forgot password?</Text>
        </Flex>
        <Spacer mt={1} />
        <Button colorScheme="primary">Sign in</Button>
      </Box>
    </Container>
  );
}
