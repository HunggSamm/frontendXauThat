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
import {
  FaClock,
  FaFileAlt,
  FaPlayCircle,
  FaQuestionCircle,
  FaPodcast,
} from "react-icons/fa";

import Quiz from "./Quiz";

// Reusable LessonItem component
const LessonItem = ({ icon, title, duration, details, iconColor, onClick }) => (
  <HStack
    w="100%"
    p={4}
    justifyContent="space-between"
    borderRadius={8}
    bg="gray.50"
    cursor="pointer"
    _hover={{ bg: "gray.100" }}
    onClick={onClick}
  >
    <HStack spacing={4}>
      <Icon as={icon} boxSize={5} color={iconColor} />
      <VStack align="start" spacing={0}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {details}
        </Text>
      </VStack>
    </HStack>
    <HStack spacing={2}>
      <Icon as={FaClock} color="gray.500" />
      <Text fontSize="sm" color="gray.500">
        {duration}
      </Text>
    </HStack>
  </HStack>
);

const App = () => {
  const [selectedLesson, setSelectedLesson] = useState("textLesson");

  // Function to render the content based on the selected lesson
  const renderContent = () => {
    switch (selectedLesson) {
      case "textLesson":
        return (
          <>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              Text lesson
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              Wheat Field With Cypresses: Sketch
            </Text>
            <Text fontSize="lg" color="gray.700">
              Text is the primary and one of the common resources when it comes
              to studying. A functional editor lets you design the lesson in the
              fastest and most convenient way. You will see that even text
              lessons can be interesting, good-looking and interactive.
            </Text>

            <VStack align="start" spacing={2} mt={4}>
              <Text>• Comprehensive text editor</Text>
              <Text>• Ability to insert media files</Text>
              <Text>• Online preview mode</Text>
            </VStack>

            <Text color="gray.700" mt={4}>
              Don’t stick to the one type of lesson. Take advantage of the
              options provided. We developed Masterstudy LMS with a well-defined
              approach in mind. And the main point of this was to make it
              diverse.
            </Text>
            <Text color="gray.700">
              As a result, you have three variations of lessons to work with:
              video, slides, and text. Add any media files to the lesson so your
              students could get the quality and interactive learning material.
              Upload images, videos and slides and find an approach to every
              student. Write a description and add lesson content, set featured
              image and specify the duration.
            </Text>
          </>
        );
      case "videoLesson":
        return (
          <>
            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              Video lesson
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              How To Paint A Wheat Field
            </Text>
            <Box mt={4} w="100%">
              <video
                controls
                style={{ width: "100%", height: "auto" }}
                src="https://res.cloudinary.com/dq7y35u7s/video/upload/v1729175523/Free%20IELTS%20Essentials%20Course%20Achieve%20Band%207%2B%20Score/section%204%20Speaking%20IELTS%20%28for%20Academic%20and%20General%20Students%29/yt0nzrduiiblfq4ohges.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </Box>
            <Text fontSize="lg" color="gray.700" mt={4}>
              In this video, we will guide you through painting a wheat field.
              You will learn the techniques used by Van Gogh to create his
              famous artwork.
            </Text>
          </>
        );
      case "quizLesson":
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Flex h="100vh">
        {/* Sidebar */}
        <Box w="30%" bg="gray.100" p={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Let's paint Van Gogh's Starry Night
          </Text>

          {/* Accordion with allowMultiple */}
          <Accordion allowMultiple>
            {/* Starting Course Section */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Starting Course
                  </Box>
                  <HStack spacing={1}>
                    <Text fontSize="sm" color="gray.500">
                      0/3
                    </Text>
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing={2}>
                  <LessonItem
                    icon={FaFileAlt}
                    iconColor="green.500"
                    title="Wheat Field With Cypresses: Sketch"
                    duration="10 min"
                    details="Text lesson"
                    onClick={() => setSelectedLesson("textLesson")}
                  />
                  <LessonItem
                    icon={FaPlayCircle}
                    iconColor="orange.500"
                    title="How To Paint A Wheat Field"
                    duration="15 min"
                    details="Video lesson"
                    onClick={() => setSelectedLesson("videoLesson")}
                  />
                  <LessonItem
                    icon={FaQuestionCircle}
                    iconColor="yellow.500"
                    title="Middle Quiz"
                    duration="7 questions"
                    details="Quiz"
                    onClick={() => setSelectedLesson("quizLesson")}
                  />
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            {/* After Intro Section */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    After Intro
                  </Box>
                  <HStack spacing={1}>
                    <Text fontSize="sm" color="gray.500">
                      0/3
                    </Text>
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* You can add more lessons here */}
                <VStack spacing={2}>
                  <LessonItem
                    icon={FaFileAlt}
                    iconColor="green.500"
                    title="Lesson 1 after intro"
                    duration="10 min"
                    details="Text lesson"
                    onClick={() => setSelectedLesson("textLesson")}
                  />
                  <LessonItem
                    icon={FaPlayCircle}
                    iconColor="orange.500"
                    title="Lesson 2 after intro"
                    duration="20 min"
                    details="Video lesson"
                    onClick={() => setSelectedLesson("videoLesson")}
                  />
                  <LessonItem
                    icon={FaPodcast}
                    iconColor="purple.500"
                    title="Lesson 3 after intro"
                    duration="Stream lesson"
                    details="Stream lesson"
                  />
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* Content Section */}
        <Box flex="1" p={8}>
          <VStack align="start" spacing={4}>
            {renderContent()}
          </VStack>

          <Button colorScheme="blue" mt={8} alignSelf="flex-end">
            Complete & Next
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;