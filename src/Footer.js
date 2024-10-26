import React, { useState } from 'react';
import { ChakraProvider, Box, HStack, VStack, Text, Button, SimpleGrid, Collapse } from "@chakra-ui/react";

function Footer() {
  const [activePart, setActivePart] = useState(null);

  const toggleQuestions = (part) => {
    setActivePart((prevPart) => (prevPart === part ? prevPart : part));
  };

  return (
    <ChakraProvider>
      <Box w="100%" p={4} bg="white" boxShadow="md" borderRadius="md" position="sticky"  // Fix the footer position
        bottom="0"        // Stick it to the bottom
        left="0"
        zIndex="1000"   >
        <SimpleGrid columns={4} spacing="5px">
          {/* Part 1 */}
          <VStack
            spacing={2}
            p={4}
            h="65px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part1")}
            cursor="pointer"
          >
            {activePart === "part1" ? (
              <Collapse in={activePart === "part1"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <Button
                      key={num}
                      size="sm" // Set kích thước đồng nhất cho tất cả các button
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                      w="26px"
                      h="30px"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 1 : <Text as="span" fontWeight="normal" color="black">0 of 10 questions</Text>
              </Text>
            )}
          </VStack>

          {/* Part 2 */}
          <VStack
            spacing={2}
            p={4}
            h="65px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part2")}
            cursor="pointer"
          >
            {activePart === "part2" ? (
              <Collapse in={activePart === "part2"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                      w="26px"
                      h="30px"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 2 : <Text as="span" fontWeight="normal" color="black">0 of 10 questions</Text>
              </Text>
            )}
          </VStack>

          {/* Part 3 */}
          <VStack
            spacing={2}
            p={4}
            h="65px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part3")}
            cursor="pointer"
          >
            {activePart === "part3" ? (
              <Collapse in={activePart === "part3"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                      w="26px"
                      h="30px"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 3 : <Text as="span" fontWeight="normal" color="black">0 of 10 questions</Text>
              </Text>
            )}
          </VStack>

          {/* Part 4 */}
          <VStack
            spacing={2}
            p={4}
            h="65px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part4")}
            cursor="pointer"
          >
            {activePart === "part4" ? (
              <Collapse in={activePart === "part4"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                      w="26px"
                      h="30px"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 4 : <Text as="span" fontWeight="normal" color="black">0 of 10 questions</Text>
              </Text>
            )}
          </VStack>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default Footer;
