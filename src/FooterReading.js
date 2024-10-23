import React, { useState } from 'react';
import { ChakraProvider, Box, HStack, VStack, Text, Button, SimpleGrid, Collapse } from "@chakra-ui/react";

function Footer() {
  const [activePart, setActivePart] = useState(null);

  const toggleQuestions = (part) => {
    setActivePart((prevPart) => (prevPart === part ? prevPart : part));
  };

  return (
    <ChakraProvider>
      <Box w="100%" p={4} bg="white" boxShadow="md" borderRadius="md">
        <SimpleGrid columns={3} spacing={4}>
          {/* Part 1 (1-13) */}
          <VStack
            spacing={2}
            p={4}
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part1")}
            cursor="pointer"
            width="530px"
          >
            {activePart === "part1" ? (
              <Collapse in={activePart === "part1"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 1 : <Text as="span" fontWeight="normal" color="black">0 of 13 questions</Text>
              </Text>
            )}
          </VStack>

          {/* Part 2 (14-26) */}
          <VStack
            marginLeft="-60px"
            spacing={2}
            p={4}
            h="70px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part2")}
            cursor="pointer"
            width="600px"
          >
            {activePart === "part2" ? (
              <Collapse in={activePart === "part2"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 2 : <Text as="span" fontWeight="normal" color="black">0 of 13 questions</Text>
              </Text>
            )}
          </VStack>

          {/* Part 3 (27-40) */}
          <VStack
            marginLeft="-40px"
            spacing={2}
            p={4}
            h="70px"
            border="2px"
            borderColor="teal.400"
            borderRadius="md"
            alignItems="center"
            onClick={() => toggleQuestions("part3")}
            cursor="pointer"
            width="655px"
          >
            {activePart === "part3" ? (
              <Collapse in={activePart === "part3"} animateOpacity>
                <HStack spacing={1} wrap="nowrap" whiteSpace="nowrap">
                  {[27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map((num) => (
                    <Button
                      key={num}
                      size="sm"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="teal"
                    >
                      {num}
                    </Button>
                  ))}
                </HStack>
              </Collapse>
            ) : (
              <Text fontWeight="bold" color="teal.500">
                Part 3 : <Text as="span" fontWeight="normal" color="black">0 of 14 questions</Text>
              </Text>
            )}
          </VStack>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default Footer;