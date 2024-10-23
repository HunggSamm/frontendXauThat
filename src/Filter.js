import React, { useState } from "react";
import {
  Box,
  Checkbox,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  IconButton,
  HStack,
  Radio,
  ChakraProvider
} from "@chakra-ui/react";
import { StarIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

const FilterSection = ({ title, children, isOpen }) => (
  <Accordion allowToggle defaultIndex={isOpen ? [0] : []}>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {title}
              </Box>
              <IconButton
                icon={isExpanded ? <MinusIcon /> : <AddIcon />}
                size="xs"
                variant="ghost"
                aria-label="Toggle"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
);

const RatingFilter = () => {
  const ratings = [4.5, 4.0, 3.5, 3.0];
  const [selectedRating, setSelectedRating] = useState(4.5);

  return (
    <VStack align="start">
      {ratings.map((rating) => (
        <HStack key={rating} spacing={2} alignItems="center">
          <Radio
            value={rating.toString()}
            isChecked={selectedRating === rating}
            onChange={() => setSelectedRating(rating)}
          />
          <HStack spacing={1}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < Math.floor(rating) ? "yellow.400" : "gray.300"}
                />
              ))}
          </HStack>
          <Text>{rating} & up</Text>
        </HStack>
      ))}
    </VStack>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Box p={4} w="300px" borderWidth="1px" borderRadius="lg">
        {/* Category Section */}
        <FilterSection title="Category" isOpen={true}>
          <VStack align="start">
            <Checkbox>Listening</Checkbox>
            <Checkbox>Speak</Checkbox>
            <Checkbox>Writing</Checkbox>
          </VStack>
        </FilterSection>

        {/* Status Section */}
        <FilterSection title="Status" isOpen={true}>
          <VStack align="start">
            <Checkbox defaultChecked>Hot</Checkbox>
            <Checkbox>New</Checkbox>
            <Checkbox>Special</Checkbox>
          </VStack>
        </FilterSection>

        {/* Level Section */}
        <FilterSection title="Level" isOpen={true}>
          <VStack align="start">
            <Checkbox>Beginner</Checkbox>
            <Checkbox defaultChecked>Intermediate</Checkbox>
            <Checkbox>Advanced</Checkbox>
          </VStack>
        </FilterSection>

        {/* Rating Section */}
        <FilterSection title="Rating" isOpen={true}>
          <RatingFilter />
        </FilterSection>

        {/* Price Section */}
        <FilterSection title="Price" isOpen={true}>
          <VStack align="start">
            <Checkbox>Free Courses</Checkbox>
            <Checkbox>Paid Courses</Checkbox>
            <Checkbox>Only Subscription</Checkbox>
          </VStack>
        </FilterSection>
      </Box>
    </ChakraProvider>
  );
};

export default App;
