// Success.js
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
import { CheckCircleIcon } from "@chakra-ui/icons";

const Success = () => {
    return (
        <ChakraProvider>
            <Box p={8} bg="white" borderRadius="lg" boxShadow="lg" maxW="900px" mx="auto">
                {/* Alert */}
                <Alert status="success" mb={6} borderRadius="md">
                    <AlertIcon />
                    <AlertTitle mr={2}>Almost there!</AlertTitle>
                    <AlertDescription>Your payment was successful!</AlertDescription>
                </Alert>

                <HStack justify="space-between" align="center">
                    {/* Left Side: Text and Progress */}
                    <VStack spacing={4} align="flex-start">
                        <Text fontSize="2xl" fontWeight="bold">
                            Payment successful
                        </Text>
                        <Text color="gray.500">
                            Thank you for choosing our service. Your custom reports will be generated
                            within two business days.
                        </Text>

                        {/* Progress bar */}
                        <HStack spacing={4} w="full" align="center">
                            <HStack>
                                <Icon as={CheckCircleIcon} color="green.500" />
                                <Text>Sites selected</Text>
                            </HStack>
                            <HStack>
                                <Icon as={CheckCircleIcon} color="green.500" />
                                <Text>Payment received</Text>
                            </HStack>
                            <HStack>
                                <Progress value={50} size="sm" colorScheme="green" w="40px" />
                                <Text>Processing report</Text>
                            </HStack>
                        </HStack>

                        {/* Buttons */}
                        <HStack spacing={4} mt={6}>
                            <Button colorScheme="green">New Site</Button>
                            <Button variant="outline" colorScheme="green">
                                Back Home
                            </Button>
                        </HStack>
                    </VStack>

                    {/* Right Side: Image */}
                    <Image
                        src="/success.png" // Đường dẫn gốc từ thư mục public
                        alt="Success illustration"
                        boxSize="250px"
                        objectFit="cover"
                    />

                </HStack>
            </Box>
        </ChakraProvider>
    );
};

export default Success;