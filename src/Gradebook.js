import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Collapse,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const courses = [
  {
    id: 1,
    title: "Real Things Art Painting by Jason Ni",
    image:
      "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg",
    stats: {
      students: 18929,
      progress: "0.49%",
      quizzes: "1.21%",
      lessons: "0.44%",
      subscriptions: 0,
      assignments: "0%",
    },
    students: [
      {
        name: "Demo Instructor",
        email: "instructor@stylemixthemes.com",
        started: "22 February, 2024",
        lessons: "9/9",
        quizzes: "0/3",
        assignments: "1/1",
        progress: "92%",
        avatar:
          "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg",
      },
      {
        name: "info",
        email: "info@gmail.com",
        started: "7 October, 2022",
        lessons: "0/9",
        quizzes: "0/3",
        assignments: "0/1",
        progress: "0%",
        avatar:
          "https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-4.jpg",
      },
    ],
  },
];

function Gradebook() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [loadingStudents, setLoadingStudents] = useState({});
  const [loadedStudents, setLoadedStudents] = useState({});

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const loadStudents = (courseId) => {
    setLoadingStudents((prev) => ({ ...prev, [courseId]: true }));

    setTimeout(() => {
      setLoadedStudents((prev) => ({ ...prev, [courseId]: true }));
      setLoadingStudents((prev) => ({ ...prev, [courseId]: false }));
    }, 1000); // Giả lập API gọi dữ liệu trong 1 giây
  };

  return (
    <ChakraProvider>
      <Box p={6} maxW="800px" mx="auto">
        <HStack justify="space-between" mb={4}>
          <Heading size="lg">The Gradebook</Heading>
          <InputGroup maxW="250px">
            <Input placeholder="Enter keyword here" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} size="sm" />
            </InputRightElement>
          </InputGroup>
        </HStack>

        <VStack spacing={4} align="stretch">
          {courses.map((course) => (
            <Box key={course.id} borderWidth="1px" borderRadius="md" p={4}>
              <HStack justify="space-between">
                <HStack>
                  <Image src={course.image} boxSize="50px" borderRadius="md" />
                  <Text fontWeight="bold">{course.title}</Text>
                </HStack>
                <Button
                  rightIcon={
                    expandedCourse === course.id ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                  onClick={() => toggleCourse(course.id)}
                  variant="outline"
                >
                  {expandedCourse === course.id ? "Show less" : "More info"}
                </Button>
              </HStack>

              <Collapse in={expandedCourse === course.id} animateOpacity>
                <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Td>All time course students:</Td>
                        <Td fontWeight="bold">{course.stats.students}</Td>
                        <Td>Course average progress:</Td>
                        <Td fontWeight="bold">{course.stats.progress}</Td>
                      </Tr>
                      <Tr>
                        <Td>Course passed quizzes:</Td>
                        <Td fontWeight="bold">{course.stats.quizzes}</Td>
                        <Td>Course passed lessons:</Td>
                        <Td fontWeight="bold">{course.stats.lessons}</Td>
                      </Tr>
                      <Tr>
                        <Td>Course enrolled by subscription:</Td>
                        <Td fontWeight="bold">{course.stats.subscriptions}</Td>
                        <Td>Course passed assignments:</Td>
                        <Td fontWeight="bold">{course.stats.assignments}</Td>
                      </Tr>
                    </Tbody>
                  </Table>

                  {!loadedStudents[course.id] ? (
                    <Text mt={4} color="blue.500" fontSize="sm">
                      <Link
                        onClick={() => loadStudents(course.id)}
                        cursor="pointer"
                      >
                        {loadingStudents[course.id] ? (
                          <Spinner size="xs" mr={2} />
                        ) : (
                          "Load Students Statistics"
                        )}
                      </Link>
                    </Text>
                  ) : (
                    <>
                      <Divider my={4} />
                      <Heading size="md">Students Statistics</Heading>
                      {course.students.map((student, index) => (
                        <Box
                          key={index}
                          p={4}
                          borderWidth="1px"
                          borderRadius="md"
                          mt={4}
                        >
                          <HStack spacing={4}>
                            <Image
                              src={student.avatar}
                              boxSize="50px"
                              borderRadius="full"
                            />
                            <Box>
                              <Text fontWeight="bold">{student.name}</Text>
                              <Text fontSize="sm" color="blue.500">
                                {student.email}
                              </Text>
                              <Text fontSize="sm" fontStyle="italic">
                                Started: {student.started}
                              </Text>
                            </Box>
                          </HStack>
                          <HStack mt={2} spacing={2}>
                            <Button size="sm" colorScheme="green">
                              Lessons Passed: {student.lessons}
                            </Button>
                            <Button size="sm" colorScheme="gray">
                              Quizzes Passed: {student.quizzes}
                            </Button>
                            <Button size="sm" colorScheme="green">
                              Assignments Passed: {student.assignments}
                            </Button>
                            <Button size="sm" colorScheme="green">
                              Progress: {student.progress}
                            </Button>
                          </HStack>
                        </Box>
                      ))}
                    </>
                  )}
                </Box>
              </Collapse>
            </Box>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Gradebook;
