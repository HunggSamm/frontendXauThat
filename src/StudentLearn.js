import {
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiFileText, FiVideo, FiMic, FiHelpCircle } from "react-icons/fi";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx"; // Import icon cho việc mở rộng và thu gọn
import { useState } from "react";
import StudentLearnLesson from './StudentLearnLeson'; // Import thành phần StudentLearnLesson

const Curriculum = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Section 1: Lectures",
      lessons: [
        { id: 1, icon: FiFileText, color: "green.500", text: "Part 1 - Your First Ride", type: "text", mediaUrl: "https://example.com/video1.mp4", content: "Content of lesson 1" },
        { id: 2, icon: FiMic, color: "purple.500", text: "Part 2 - A Closer Introduction", type: "video", mediaUrl: "https://example.com/audio1.mp3", content: "Content of lesson 2" },
        { id: 3, icon: FiHelpCircle, color: "orange.500", text: "Part 3 - Structure Your Training", type: "audio", mediaUrl: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3", content: "Content of lesson 3" },
      ],
    },
    {
      id: 2,
      title: "Section 2: Necessary",
      lessons: [
        { id: 1, icon: FiFileText, color: "green.500", text: "Part 4 - Finding New Training", type: "audio", mediaUrl: "https://example.com/audio2.mp3", content: "Content of lesson 4" },
        { id: 2, icon: FiVideo, color: "blue.500", text: "Part 5 - Zoom Conference", type: "video", mediaUrl: "https://example.com/video3.mp4", content: "Content of lesson 5" },
        { id: 3, icon: FiHelpCircle, color: "yellow.500", text: "Final Quiz", type: "audio", mediaUrl: "https://example.com/audio3.mp3", content: "Content of lesson 6" },
      ],
    },
  ]);

  // State để lưu bài học đã chọn
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <HStack spacing={5} align="start" h="full">
      {/* Sidebar Section */}
      <Box w="30%" bg="gray.100" p={5} rounded="md" maxH="100vh" overflowY="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Curriculum
        </Text>

        {/* Accordion for Sections */}
        <Accordion allowMultiple>
          {sections.map((section) => (
            <AccordionItem key={section.id}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _hover={{ bg: "gray.200" }}>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {section.title}
                      </Box>
                      {isExpanded ? <RxTriangleUp /> : <RxTriangleDown />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List spacing={3}>
                      {section.lessons.map((lesson) => (
                        <ListItem key={lesson.id} onClick={() => setSelectedLesson(lesson)} cursor="pointer">
                          <ListIcon as={lesson.icon} color={lesson.color} />
                          {lesson.text}
                        </ListItem>
                      ))}
                    </List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Main Content */}
      <Box w="70%" p={10} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Let's build your course!
        </Text>
        <Text fontSize="md" color="gray.500">
          View the details of the selected course in the left column.
        </Text>

        {/* Hiển thị StudentLearnLesson nếu có bài học đã chọn */}
        {selectedLesson && <StudentLearnLesson lesson={selectedLesson} />}
      </Box>
    </HStack>
  );
};

export default Curriculum;
