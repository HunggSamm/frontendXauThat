import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { TbClockHour4 } from "react-icons/tb";
import { ChakraProvider } from '@chakra-ui/react';

const courses = [
  {
    id: 1,
    title: "Fashion Photography from professional",
    category: "Fashion",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-5.jpg",
    duration: "13 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 2,
    title: "How to get comfortable on camera",
    category: "Conceptual Art",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg",
    duration: "9 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 3,
    title: "How to Make Beautiful Landscape photos?",
    category: "360 photos",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-3.jpg",
    duration: "15 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 4,
    title: "Road Bike Manual or How to Be a Champion",
    category: "Bicycling",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-2.jpg",
    duration: "13 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 5,
    title: "Fashion Photography from professional",
    category: "Fashion",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-5.jpg",
    duration: "13 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 6,
    title: "How to get comfortable on camera",
    category: "Conceptual Art",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg",
    duration: "9 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 7,
    title: "How to Make Beautiful Landscape photos?",
    category: "360 photos",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-3.jpg",
    duration: "15 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
  {
    id: 8,
    title: "Road Bike Manual or How to Be a Champion",
    category: "Bicycling",
    image: "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-2.jpg",
    duration: "13 hours",
    completion: "0",
    startDate: "October 22, 2024",
  },
];

const EnrollCourse = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <HStack spacing={5} wrap="wrap" justify="start" > 
          {courses.map((course) => (
            <Box
              key={course.id}
              width="300px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              maxW="sm"
              height="450px"
            >
              <Box height="200px" overflow="hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>

              <Box p={6}>
                <VStack align="start" spacing={2}>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="sm" color="gray.500">
                      {course.category}
                    </Text>
                    <Text fontWeight="bold" fontSize="lg" noOfLines={2}>
                      {course.title}
                    </Text>
                  </VStack>

                  <HStack spacing={4} width="100%">
                    <Flex justify="space-between" width="100%">
                      <HStack>
                        <Icon as={TbClockHour4} />
                        <Text fontSize="sm">{course.duration}</Text>
                      </HStack>
                      <Text fontSize="sm">{course.completion}% Complete</Text>
                    </Flex>
                  </HStack>

                  <Button colorScheme="blue" width="full">
                    Start Course
                  </Button>

                  <Divider />

                  {/* Centering the start date text */}
                  <Text fontSize="sm" color="gray.500" textAlign="center" width="full">
                    Started {course.startDate}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </HStack>
      </Box>
    </ChakraProvider>
  );
};


export default EnrollCourse;
