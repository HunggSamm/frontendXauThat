import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  RadioGroup,
  Radio,
  Button,
  Icon,
  Select,
} from "@chakra-ui/react";
import { FaHeadphones } from 'react-icons/fa';

function Part2() {
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

          <Text>Choose the correct letter, <Text as="span" fontWeight="bold">A, B, or C</Text>.</Text>

          {/* Questions 11-15 */}
          <VStack align="start" spacing={6} pt={4}>
            <Box>
              <Text fontWeight="bold">11. The company deals mostly with:</Text>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="A">A. Big cities.</Radio>
                  <Radio value="B">B. Nature holidays.</Radio>
                  <Radio value="C">C. Nepal.</Radio>
                </VStack>
              </RadioGroup>
            </Box>

            <Box>
              <Text fontWeight="bold">12. The overseas consultants deal mostly with:</Text>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="A">A. Asia</Radio>
                  <Radio value="B">B. North America</Radio>
                  <Radio value="C">C. Europe</Radio>
                </VStack>
              </RadioGroup>
            </Box>

            <Box>
              <Text fontWeight="bold">13. For deserts and gorges, customers should come in the:</Text>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="A">A. Morning.</Radio>
                  <Radio value="B">B. Afternoon.</Radio>
                  <Radio value="C">C. Night.</Radio>
                </VStack>
              </RadioGroup>
            </Box>

            <Box>
              <Text fontWeight="bold">14. Trips to regional locations are good because:</Text>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="A">A. The buses are comfortable.</Radio>
                  <Radio value="B">B. There is storage for suitcases.</Radio>
                  <Radio value="C">C. They can be seen quickly.</Radio>
                </VStack>
              </RadioGroup>
            </Box>

            <Box>
              <Text fontWeight="bold">15. Trips to regional locations are good because:</Text>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="A">A. The buses are comfortable.</Radio>
                  <Radio value="B">B. There is storage for suitcases.</Radio>
                  <Radio value="C">C. They can be seen quickly.</Radio>
                </VStack>
              </RadioGroup>
            </Box>
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