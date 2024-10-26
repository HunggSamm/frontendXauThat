import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Select,
} from "@chakra-ui/react";
import { FaHeadphones } from 'react-icons/fa';
import SingleChoiceQuestion from './SingleChoiceQuestion'; // Import the new component

function Part2() {
  // Fake data for questions 11-15
  const questionsData = [
    {
      question: "The company deals mostly with:",
      options: [
        { value: "A", label: "A. Big cities." },
        { value: "B", label: "B. Nature holidays." },
        { value: "C", label: "C. Nepal." },
      ],
      questionNumber: 11,
    },
    {
      question: "The overseas consultants deal mostly with:",
      options: [
        { value: "A", label: "A. Asia" },
        { value: "B", label: "B. North America" },
        { value: "C", label: "C. Europe" },
      ],
      questionNumber: 12,
    },
    {
      question: "For deserts and gorges, customers should come in the:",
      options: [
        { value: "A", label: "A. Morning." },
        { value: "B", label: "B. Afternoon." },
        { value: "C", label: "C. Night." },
      ],
      questionNumber: 13,
    },
    {
      question: "Trips to regional locations are good because:",
      options: [
        { value: "A", label: "A. The buses are comfortable." },
        { value: "B", label: "B. There is storage for suitcases." },
        { value: "C", label: "C. They can be seen quickly." },
      ],
      questionNumber: 14,
    },
    {
      question: "Trips to regional locations are good because:",
      options: [
        { value: "A", label: "A. The buses are comfortable." },
        { value: "B", label: "B. There is storage for suitcases." },
        { value: "C", label: "C. They can be seen quickly." },
      ],
      questionNumber: 15,
    },
  ];

  return (
    <ChakraProvider>
      <Box w="100%" p={6} bg="white" boxShadow="lg" borderRadius="md">
        {/* Part 2 Title */}
        <VStack align="start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Part 2
          </Text>
          
          {/* Questions 11-15 Header */}
          <HStack spacing={4} alignItems="center">
            <Text fontSize="xl" color="teal.500" fontWeight="bold">
              Questions 11-15
            </Text>
            <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
              Listen from here
            </Button>
          </HStack>

          <Text>
            Choose the correct letter, <Text as="span" fontWeight="bold">A, B, or C</Text>.
          </Text>

          {/* Map through questionsData to render SingleChoiceQuestion */}
          <VStack align="start" spacing={6} pt={4}>
            {questionsData.map((data) => (
              <SingleChoiceQuestion
                key={data.questionNumber}
                question={data.question}
                options={data.options}
                questionNumber={data.questionNumber}
              />
            ))}
          </VStack>

          {/* Questions 16-20 Header */}
          <VStack align="start" pt={8} spacing={4}>
            <HStack spacing={4} alignItems="center">
              <Text fontSize="xl" color="teal.500" fontWeight="bold">
                Questions 16-20
              </Text>
              <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
                Listen from here
              </Button>
            </HStack>

            <Text>Identify the rooms in the office plan.</Text>
            <Text>Write the correct letter, <Text as="span" fontWeight="bold">A-G</Text>, next to the questions.</Text>

            {/* Image of the Office Plan */}
            <Box as="img" src="https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-3.jpg" alt="Office Plan" w="100%" maxW="500px" />

            {/* Questions 16-20 Dropdowns */}
            <VStack align="start" spacing={4}>
              <HStack>
                <Text>16.</Text>
                <Select placeholder="Select" w="100px">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </Select>
                <Text>Local Tours</Text>
              </HStack>

              <HStack>
                <Text>17.</Text>
                <Select placeholder="Select" w="100px">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </Select>
                <Text>Interstate Tours</Text>
              </HStack>

              <HStack>
                <Text>18.</Text>
                <Select placeholder="Select" w="100px">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </Select>
                <Text>International Tours</Text>
              </HStack>

              <HStack>
                <Text>19.</Text>
                <Select placeholder="Select" w="100px">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </Select>
                <Text>Asian Region</Text>
              </HStack>

              <HStack>
                <Text>20.</Text>
                <Select placeholder="Select" w="100px">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </Select>
                <Text>General Office</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Part2;