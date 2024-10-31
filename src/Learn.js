import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiFileText, FiVideo, FiMic } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";

const courseData = [
  {
    id: "startingCourse",
    title: "Starting Course",
    lessons: [
      {
        id: "lesson1",
        title: "Wheat Field With Cypresses: Sketch",
        duration: "10 min",
        description: "Text lesson",
        content: "Text is the primary and one of the common resources when it comes to studying...",
        contentUrl: null,
        typeLesson: "textLesson",
        complete: true,
      },
      {
        id: "lesson2",
        title: "How To Paint A Wheat Field",
        duration: "15 min",
        description: "Video lesson",
        content: "In this video, we will guide you through painting a wheat field...",
        contentUrl: "https://res.cloudinary.com/dq7y35u7s/video/upload/v1729175523/Free%20IELTS%20Essentials%20Course%20Achieve%20Band%207%2B%20Score/section%204%20Speaking%20IELTS%20%28for%20Academic%20and%20General%20Students%29/yt0nzrduiiblfq4ohges.mp4",
        typeLesson: "videoLesson",
        complete: false,
      },
      {
        id: "lesson3",
        title: "Middle Quiz",
        duration: "7 questions",
        description: "Quiz",
        content: null,
        contentUrl: null,
        typeLesson: "quizLesson",
        complete: false,
      },
    ],
  },
  {
    id: "afterIntro",
    title: "After Intro",
    lessons: [
      {
        id: "lesson4",
        title: "Lesson 1 after intro",
        duration: "10 min",
        description: "Text lesson",
        content: "This is content for lesson 1 after intro...",
        contentUrl: null,
        typeLesson: "textLesson",
        complete: true,
      },
      {
        id: "lesson5",
        title: "Lesson 2 after intro",
        duration: "20 min",
        description: "Video lesson",
        content: "This is content for lesson 2 after intro...",
        contentUrl: "https://example.com/video.mp4",
        typeLesson: "videoLesson",
        complete: false,
      },
      {
        id: "lesson6",
        title: "Lesson 3 after intro",
        duration: "Stream lesson",
        description: "Audio lesson",
        content: "This is content for lesson 3 after intro...",
        contentUrl: "https://example.com/audio.mp3",
        typeLesson: "audioLesson",
        complete: false,
      },
    ],
  },
];

const LessonItem = ({ icon, title, duration, iconColor, onClick, typeLesson, complete }) => (
  <HStack
    w="100%"
    p={2}
    justifyContent="space-between"
    borderRadius={8}
    bg="gray.50"
    cursor="pointer"
    _hover={{ bg: "gray.100" }}
    onClick={onClick}
  >
    <VStack align="start" spacing={2} w="100%">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <HStack spacing={1}>
        <Icon as={icon} boxSize={5} color={iconColor} />
        <Text fontSize="sm" fontWeight="bold">
          {typeLesson}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {duration}
        </Text>
      </HStack>
    </VStack>
    <Icon
      as={complete ? FaCheckCircle : ImRadioUnchecked}
      boxSize={5}
      color={complete ? "blue.500" : "gray.500"} // Change color based on completion status
    />
  </HStack>
);

const App = () => {
  const [selectedLesson, setSelectedLesson] = useState(courseData[0].lessons[0]);
  const [courses, setCourses] = useState(courseData); // Maintain courses state

  // Function to handle marking the lesson as complete and moving to the next
  const handleCompleteAndNext = () => {
    if (!selectedLesson) return;

    const updatedCourses = courses.map((course) => ({
      ...course,
      lessons: course.lessons.map((lesson) =>
        lesson.id === selectedLesson.id ? { ...lesson, complete: true } : lesson
      ),
    }));

    setCourses(updatedCourses); // Update courses state

    // Find the next lesson
    let nextLesson = null;
    let foundNextLesson = false;

    for (const course of updatedCourses) {
      for (const lesson of course.lessons) {
        // If the current lesson is selected, mark the next one as the next lesson
        if (foundNextLesson) {
          nextLesson = lesson;
          break;
        }
        if (lesson.id === selectedLesson.id) {
          foundNextLesson = true;
        }
      }
      if (nextLesson) break;
    }

    if (nextLesson) {
      setSelectedLesson(nextLesson); // Move to the next lesson
    } else {
      // Optionally handle if no next lesson is available (end of course)
      alert("You have completed all lessons!");
    }
  };

  const renderContent = () => {
    if (!selectedLesson) return null;

    const { content, contentUrl, description, typeLesson } = selectedLesson;

    return (
      <>
        <Text fontSize="sm" fontWeight="bold" color="gray.500">
          {description}
        </Text>
        {typeLesson === "textLesson" && (
          <Text fontSize="lg" color="gray.700" mt={4}>
            {content}
          </Text>
        )}
        {typeLesson === "videoLesson" && (
          <>
            <Box mt={4} w="100%">
              <video controls style={{ width: "100%", height: "auto" }} src={contentUrl}>
                Your browser does not support the video tag.
              </video>
            </Box>
            <Text fontSize="lg" color="gray.700" mt={4}>
              {content}
            </Text>
          </>
        )}
        {typeLesson === "audioLesson" && (
          <>
            <Box mt={4} w="100%">
              <audio controls style={{ width: "100%", height: "auto" }} src={contentUrl}>
                Your browser does not support the audio tag.
              </audio>
            </Box>
            <Text fontSize="lg" color="gray.700" mt={4}>
              {content}
            </Text>
          </>
        )}
      </>
    );
  };

  return (
    <ChakraProvider>
      <Flex h="100vh">
        <Box w="30%" bg="gray.100" p={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Let's paint Van Gogh's Starry Night
          </Text>
          <Accordion allowMultiple>
            {courses.map((section) => (
              <AccordionItem key={section.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      {section.title}
                    </Box>
                    <HStack spacing={1}>
                      <Text fontSize="sm" color="gray.500">
                        {section.lessons.length}/3
                      </Text>
                      <AccordionIcon />
                    </HStack>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack spacing={2}>
                    {section.lessons.map((lesson) => (
                      <LessonItem
                        key={lesson.id}
                        icon={
                          lesson.typeLesson === "textLesson"
                            ? FiFileText
                            : lesson.typeLesson === "videoLesson"
                            ? FiVideo
                            : FiMic
                        }
                        iconColor={
                          lesson.typeLesson === "textLesson"
                            ? "green.500"
                            : lesson.typeLesson === "videoLesson"
                            ? "blue.500"
                            : "purple.500"
                        }
                        title={lesson.title}
                        duration={lesson.duration}
                        complete={lesson.complete}
                        onClick={() => setSelectedLesson(lesson)}
                      />
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box flex="1" p={8}>
          <VStack align="start" spacing={4}>
            {renderContent()}
          </VStack>

          <Button colorScheme="blue" mt={8} alignSelf="flex-end" onClick={handleCompleteAndNext}>
            Complete & Next
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;