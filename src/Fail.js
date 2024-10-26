// Fail.js
import React from "react";
import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    Progress,
    Icon,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Image,
    ChakraProvider
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

const Fail = () => {
    return (
        <ChakraProvider>
            <Box p={8} bg="white" borderRadius="lg" boxShadow="lg" maxW="900px" mx="auto">
                {/* Alert */}
                <Alert status="error" mb={6} borderRadius="md">
                    <AlertIcon />
                    <AlertTitle mr={2}>Oh no!</AlertTitle>
                    <AlertDescription>Something went wrong with your payment.</AlertDescription>
                </Alert>

                <HStack justify="space-between" align="center">
                    {/* Left Side: Text and Progress */}
                    <VStack spacing={4} align="flex-start">
                        <Text fontSize="2xl" fontWeight="bold">
                            You're almost there!
                        </Text>
                        <Text color="gray.500">
                            Sorry, we had an issue confirming your payment. Please try again.
                        </Text>

                        {/* Progress bar */}
                        <HStack spacing={4} w="full" align="center">
                            <HStack>
                                <Icon as={WarningIcon} color="green.500" />
                                <Text>Sites selected</Text>
                            </HStack>
                            <HStack>
                                <Progress value={50} size="sm" colorScheme="green" w="40px" />
                                <Text>Payment pending</Text>
                            </HStack>
                            <HStack>
                                <Progress value={0} size="sm" colorScheme="gray" w="40px" />
                                <Text>Processing report</Text>
                            </HStack>
                        </HStack>

                        {/* Buttons */}
                        <HStack spacing={4} mt={6}>
                            <Button colorScheme="green">Pay with PayPal</Button>
                            <Button variant="outline" colorScheme="green">
                                Back Home
                            </Button>
                        </HStack>
                    </VStack>

                    {/* Right Side: Image */}
                    <Image
                        src="/fail.png" // Replace with the actual image URL of the girl
                        alt="Failure illustration"
                        boxSize="250px"
                        objectFit="cover"
                    />
                </HStack>
            </Box>
        </ChakraProvider>
    );
};

export default Fail;