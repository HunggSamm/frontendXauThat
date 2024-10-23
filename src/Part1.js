import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
} from "@chakra-ui/react";
import { FaHeadphones } from 'react-icons/fa';

function Part1() {
  return (
    <ChakraProvider>
      <Box w="100%" p={6} bg="white" boxShadow="lg" borderRadius="md">
        {/* Part 1 Title */}
        <VStack align="start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Part 1
          </Text>
          
          {/* Questions 1-6 Header */}
          <HStack spacing={4} alignItems="center">
            <Text fontSize="xl" color="teal.500" fontWeight="bold">
              Questions 1-6
            </Text>
            <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
              Listen from here
            </Button>
          </HStack>

          <Text>Complete the notes.</Text>
          <Text>
            Write <Text as="span" color="red.500" fontWeight="bold">NO MORE THAN THREE WORDS OR A NUMBER</Text> for each answer.
          </Text>

          {/* Questions 1-6 Input Fields */}
          <VStack align="start" spacing={4}>
            <Text fontWeight="bold">School Excursion</Text>
            <HStack>
              <Text fontWeight="bold">Day:</Text>
              <Text>Wednesday (Example)</Text>
            </HStack>

            <HStack>
              <Text fontWeight="bold">Destination:</Text>
              <Input placeholder="1" w="100px" />
            </HStack>

            <HStack>
              <Text fontWeight="bold">Weather:</Text>
              <Input placeholder="2" w="100px" />
            </HStack>

            <HStack>
              <Text fontWeight="bold">Arrival time:</Text>
              <Input placeholder="3" w="100px" />
            </HStack>

            <HStack>
              <Text fontWeight="bold">Activities Planned See:</Text>
              <Input placeholder="4" w="100px" />
            </HStack>

            {/* Make "Eat" bold and "Catered lunch" normal */}
            <HStack>
              <Text fontWeight="bold">Eat:</Text>
              <Text>Catered lunch</Text>
            </HStack>

            <HStack>
              <Text fontWeight="bold">Attend:</Text>
              <Input placeholder="5" w="100px" />
            </HStack>

            <HStack>
              <Text fontWeight="bold">Return time:</Text>
              <Input placeholder="6" w="100px" />
            </HStack>
          </VStack>

          {/* Questions 7-10 Header */}
          <HStack spacing={4} alignItems="center" pt={8}>
            <Text fontSize="xl" color="teal.500" fontWeight="bold">
              Questions 7-10
            </Text>
            <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
              Listen from here
            </Button>
          </HStack>

          <Text>Complete the table. Write ONE WORD ONLY for each answer.</Text>

          {/* Questions 7-10 Table */}
          <Box maxW="250px" overflowX="auto" w="full">
            <Table variant="striped" mt={4} border="1px" borderColor="gray.200">
              <Thead>
                <Tr>
                  <Th border="1px" borderColor="gray.200">Nationality</Th>
                  <Th border="1px" borderColor="gray.200">%</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">
                    <Input placeholder="7" w="100px" />
                  </Td>
                  <Td border="1px" borderColor="gray.200">26</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">
                    <Input placeholder="8" w="100px" />
                  </Td>
                  <Td border="1px" borderColor="gray.200">25</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">
                    <Input placeholder="9" w="100px" />
                  </Td>
                  <Td border="1px" borderColor="gray.200">16</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">Indonesian</Td>
                  <Td border="1px" borderColor="gray.200">15</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">
                    <Input placeholder="10" w="100px" />
                  </Td>
                  <Td border="1px" borderColor="gray.200">8</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">Saudi</Td>
                  <Td border="1px" borderColor="gray.200">7</Td>
                </Tr>
                <Tr>
                  <Td border="1px" borderColor="gray.200" w="150px">Other</Td>
                  <Td border="1px" borderColor="gray.200">3</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Part1;
