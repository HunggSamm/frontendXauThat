import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaHeadphones } from 'react-icons/fa';

function Part4() {
  return (
    <ChakraProvider>
      <Box w="100%" p={6} bg="white" boxShadow="lg" borderRadius="md">
        {/* Part 4 Title */}
        <VStack align="start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Part 4
          </Text>

          {/* Questions 31-34 Header */}
          <HStack spacing={4} alignItems="center">
            <Text fontSize="xl" color="teal.500" fontWeight="bold">
              Questions 31-34
            </Text>
            <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
              Listen from here
            </Button>
          </HStack>

          <Text>
            Complete the sentences. Write <Text as="span" fontWeight="bold">NO MORE THAN TWO WORDS</Text> for each answer.
          </Text>

          {/* Questions 31-34 */}
          <VStack align="start" spacing={4} pt={4}>
            <HStack>
              <Text>Behavior in parks is controlled by</Text>
              <Input placeholder="31" w="200px" />
            </HStack>

            <HStack>
              <Text>Insect numbers are reduced by having</Text>
              <Input placeholder="32" w="200px" />
            </HStack>

            <HStack>
              <Text>A wilderness park does not have any</Text>
              <Input placeholder="33" w="200px" />
            </HStack>

            <HStack>
              <Text>Observing trees and lying in the grass are examples of</Text>
              <Input placeholder="34" w="200px" />
            </HStack>
          </VStack>

          {/* Questions 35-40 Header */}
          <VStack align="start" pt={8} spacing={4}>
            <HStack spacing={4} alignItems="center">
              <Text fontSize="xl" color="teal.500" fontWeight="bold">
                Questions 35-40
              </Text>
              <Button leftIcon={<Icon as={FaHeadphones} />} colorScheme="teal" variant="outline">
                Listen from here
              </Button>
            </HStack>

            <Text>
              Complete the notes. Write <Text as="span" fontWeight="bold">NO MORE THAN TWO WORDS OR A NUMBER</Text> for each answer.
            </Text>

            {/* Parks Table */}
            <Box w="100%" overflowX="auto">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Period</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px' }}>1000 years ago</td>
                    <td style={{ padding: '10px' }}>
                      <VStack align="start">
                        <Text>sufficient wilderness</Text>
                        <HStack>
                          <Text>large forests: people could</Text>
                          <Input placeholder="35" w="150px" />
                        </HStack>
                        <HStack>
                          <Text>designed by Joseph Paxton at the start of the</Text>
                          <Input placeholder="36" w="150px" />
                        </HStack>
                      </VStack>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Princes Park</td>
                    <td style={{ padding: '10px' }}>
                      <VStack align="start">
                        <HStack>
                          <Text>land originally worth £</Text>
                          <Input placeholder="37" w="150px" />
                        </HStack>
                        <HStack>
                          <Text>designed by Joseph Paxton</Text>
                        </HStack>
                        <HStack>
                          <Text>in the middle was a</Text>
                          <Input placeholder="38" w="150px" />
                        </HStack>
                      </VStack>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Neighborhood Parks</td>
                    <td style={{ padding: '10px' }}>
                      <VStack align="start">
                        <HStack>
                          <Text>now regarded as a</Text>
                          <Input placeholder="39" w="150px" />
                        </HStack>
                        <HStack>
                          <Text>satisfy a natural desire can be famous, e.g. in</Text>
                          <Input placeholder="40" w="150px" />
                        </HStack>
                      </VStack>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Part4;