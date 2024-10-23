import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  Select,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaHeadphones } from 'react-icons/fa';

function Part3() {
  return (
    <ChakraProvider>
      <Box w="100%" p={6} bg="white" boxShadow="lg" borderRadius="md">
        {/* Part 3 Title */}
        <VStack align="start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Part 3
          </Text>

          {/* Questions 21-24 Header */}
          <HStack spacing={4} alignItems="center">
            <Text fontSize="xl" color="teal.500" fontWeight="bold">
              Questions 21-24
            </Text>
            <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
              Listen from here
            </Button>
          </HStack>

          <Text>
            Complete the timetable. Write the correct letter, <Text as="span" fontWeight="bold">A-H</Text>, for each answer.
          </Text>

          {/* Timetable */}
          <Box w="100%" overflowX="auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Day</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Morning</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Afternoon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px' }}>Monday</td>
                  <td style={{ padding: '10px' }}>Opening Lecture</td>
                  <td style={{ padding: '10px' }}>
                    <Select placeholder="Select">
                      <option value="A">A. BBQ</option>
                      <option value="B">B. Careers lecture</option>
                      <option value="C">C. Computer lab visit</option>
                      <option value="D">D. Dance</option>
                      <option value="E">E. Library tour</option>
                      <option value="F">F. Student Union induction</option>
                      <option value="G">G. University tour</option>
                      <option value="H">H. Legal rights lecture</option>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Tuesday</td>
                  <td style={{ padding: '10px' }}>
                    <Select placeholder="Select">
                      <option value="A">A. BBQ</option>
                      <option value="B">B. Careers lecture</option>
                      <option value="C">C. Computer lab visit</option>
                      <option value="D">D. Dance</option>
                      <option value="E">E. Library tour</option>
                      <option value="F">F. Student Union induction</option>
                      <option value="G">G. University tour</option>
                      <option value="H">H. Legal rights lecture</option>
                    </Select>
                  </td>
                  <td style={{ padding: '10px' }}>Study Skills</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Wednesday</td>
                  <td style={{ padding: '10px' }}>x</td>
                  <td style={{ padding: '10px' }}>
                    <Select placeholder="Select">
                      <option value="A">A. BBQ</option>
                      <option value="B">B. Careers lecture</option>
                      <option value="C">C. Computer lab visit</option>
                      <option value="D">D. Dance</option>
                      <option value="E">E. Library tour</option>
                      <option value="F">F. Student Union induction</option>
                      <option value="G">G. University tour</option>
                      <option value="H">H. Legal rights lecture</option>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Thursday</td>
                  <td style={{ padding: '10px' }}>x</td>
                  <td style={{ padding: '10px' }}>x</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Friday</td>
                  <td style={{ padding: '10px' }}>x</td>
                  <td style={{ padding: '10px' }}>
                    <Select placeholder="Select">
                      <option value="A">A. BBQ</option>
                      <option value="B">B. Careers lecture</option>
                      <option value="C">C. Computer lab visit</option>
                      <option value="D">D. Dance</option>
                      <option value="E">E. Library tour</option>
                      <option value="F">F. Student Union induction</option>
                      <option value="G">G. University tour</option>
                      <option value="H">H. Legal rights lecture</option>
                    </Select>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>

          {/* Options */}
          <Text pt={5} fontWeight="bold">
            Options:
          </Text>
          <VStack align="start">
            <Text>A. BBQ</Text>
            <Text>B. Careers lecture</Text>
            <Text>C. Computer lab visit</Text>
            <Text>D. Dance</Text>
            <Text>E. Library tour</Text>
            <Text>F. Student Union induction</Text>
            <Text>G. University tour</Text>
            <Text>H. Legal rights lecture</Text>
          </VStack>

          {/* Questions 25-30 Header */}
          <VStack align="start" pt={8} spacing={4}>
            <HStack spacing={4} alignItems="center">
              <Text fontSize="xl" color="teal.500" fontWeight="bold">
                Questions 25-30
              </Text>
              <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
                Listen from here
              </Button>
            </HStack>

            <Text>
              Complete the labels. Write <Text as="span" fontWeight="bold">ONE WORD OR A NUMBER</Text> for each answer.
            </Text>

            {/* Style Guide Image */}
            <Box as="img" src="https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg" alt="University Style Guide" w="100%" maxW="500px" />

            {/* Questions 25-30 */}
            <VStack align="start" spacing={4} pt={4}>
              <HStack>
                <input type="text" placeholder="25" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>

              <HStack>
                <input type="text" placeholder="26" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>

              <HStack>
                <input type="text" placeholder="27" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>

              <HStack>
                <input type="text" placeholder="28" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>

              <HStack>
                <input type="text" placeholder="29" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>

              <HStack>
                <input type="text" placeholder="30" style={{ border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px', width: '100%' }} />
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Part3;