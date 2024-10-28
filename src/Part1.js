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

// Data structure for questions in Part 1
const questionsPart1 = [
  { label: 'Destination', placeholder: '1' },
  { label: 'Weather', placeholder: '2' },
  { label: 'Arrival time', placeholder: '3' },
  { label: 'Activities Planned See', placeholder: '4' },
  { label: 'Attend', placeholder: '5' },
  { label: 'Return time', placeholder: '6' },
];

// Data structure for table questions in Part 2
const tableData = [
  { nationality: '', percentage: 26, placeholder: '7' },
  { nationality: '', percentage: 25, placeholder: '8' },
  { nationality: '', percentage: 16, placeholder: '9' },
  { nationality: 'Indonesian', percentage: 15 },
  { nationality: '', percentage: 8, placeholder: '10' },
  { nationality: 'Saudi', percentage: 7 },
  { nationality: 'Other', percentage: 3 },
];

function Part1() {
  return (
    <ChakraProvider>
      <Box w="100%" p={6} bg="white" boxShadow="lg" borderRadius="md">
        <VStack align="start" spacing={4}>
          {/* Part 1 Title */}
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

            {questionsPart1.map((question, index) => (
              <HStack key={index}>
                <Text fontWeight="bold">{question.label}:</Text>
                <Input placeholder={question.placeholder} w="100px" />
              </HStack>
            ))}

            {/* Make "Eat" bold and "Catered lunch" normal */}
            <HStack>
              <Text fontWeight="bold">Eat:</Text>
              <Text>Catered lunch</Text>
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
                {tableData.map((row, index) => (
                  <Tr key={index}>
                    <Td border="1px" borderColor="gray.200" w="150px">
                      {row.nationality ? (
                        <Text>{row.nationality}</Text>
                      ) : (
                        <Input placeholder={row.placeholder} w="100px" />
                      )}
                    </Td>
                    <Td border="1px" borderColor="gray.200">{row.percentage}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Part1;