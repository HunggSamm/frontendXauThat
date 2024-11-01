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
  Button,
} from "@chakra-ui/react";
import { FiFileText, FiVideo, FiHelpCircle } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import {
  RxTriangleDown,
  RxTriangleUp,
  RxDragHandleDots2,
} from "react-icons/rx";
import { useState } from "react";

const getLessonIcon = (type) => {
  switch (type) {
    case "TEXT":
      return { icon: FiFileText, color: "green.500" };
    case "VIDEO":
      return { icon: FiVideo, color: "blue.500" };
    case "AUDIO":
      return { icon: HiOutlineSpeakerWave, color: "purple.500" };
    case "QUIZ":
      return { icon: FiHelpCircle, color: "orange.500" };
    default:
      return { icon: FiFileText, color: "gray.500" };
  }
};

const Drip = () => {
  // Dữ liệu mẫu
  const [sections, setSections] = useState([
    {
      id: "section-1",
      title: "Section 1",
      lessons: [
        { id: "lesson-1", title: "Lesson 1", type: "TEXT" },
        { id: "lesson-2", title: "Lesson 2", type: "VIDEO" },
      ],
    },
    {
      id: "section-2",
      title: "Section 2",
      lessons: [
        { id: "lesson-3", title: "Lesson 3", type: "AUDIO" },
        { id: "lesson-4", title: "Lesson 4", type: "QUIZ" },
      ],
    },
  ]);

  const [dripContents, setDripContents] = useState([
    { id: "drip-1", lessons: [] },
    { id: "drip-2", lessons: [] },
  ]);

  const addDripContent = () => {
    setDripContents((prev) => [
      ...prev,
      { id: `drip-${prev.length + 1}`, lessons: [] },
    ]);
  };

  return (
    <HStack spacing={5} align="start" h="full">
      <Box w="30%" bg="gray.100" p={5} rounded="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Drip
        </Text>

        <Accordion allowMultiple>
          {sections.map((section) => (
            <AccordionItem key={section.id}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _hover={{ bg: "gray.200" }}>
                      <Icon
                        as={RxDragHandleDots2}
                        color="gray.500"
                        marginRight="10px"
                      />
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                      >
                        {section.title}
                      </Box>
                      {isExpanded ? <RxTriangleUp /> : <RxTriangleDown />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List spacing={3}>
                      {section.lessons.map((lesson) => {
                        const { icon, color } = getLessonIcon(lesson?.type);
                        return (
                          <ListItem key={lesson.id}>
                            <HStack p={2} bg="transparent">
                              <ListIcon as={icon} color={color} />
                              <Text>{lesson.title}</Text>
                            </HStack>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Box w="70%" textAlign="center" maxHeight="80vh" overflow="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Drip Contents
        </Text>

        {dripContents.map((dripContent, index) => (
          <Box
            key={dripContent.id}
            bg="gray.50"
            border="1px dashed gray"
            p={4}
            mb={4}
            rounded="md"
          >
            <HStack justify="space-between" mb={2}>
              <Text fontWeight="bold">Drip Content {index + 1}</Text>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() =>
                  setDripContents((prev) =>
                    prev.filter((content) => content.id !== dripContent.id)
                  )
                }
              >
                Delete
              </Button>
            </HStack>

            {dripContent.lessons.length === 0 ? (
              <Text color="gray.500">Drag lessons here</Text>
            ) : (
              dripContent.lessons.map((lesson) => (
                <Box
                  key={lesson.id}
                  p={2}
                  mb={2}
                  bg="white"
                  border="1px solid gray"
                  rounded="md"
                >
                  <Text>{lesson.title}</Text>
                </Box>
              ))
            )}
          </Box>
        ))}
        <Button mt={4} colorScheme="blue" onClick={addDripContent}>
          Add Dependency
        </Button>
      </Box>
    </HStack>
  );
};

export default Drip;
