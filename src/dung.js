import {
    Box,
    Button,
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
    Input,
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
  import { FiFileText, FiVideo, FiMic, FiHelpCircle } from "react-icons/fi";
  import { RxTriangleDown, RxTriangleUp, RxDragHandleDots2 } from "react-icons/rx";
  import { RiDeleteBinFill } from "react-icons/ri";
  import { PiPencilSimpleFill } from "react-icons/pi";
  import { useState } from "react";
  
  const Curriculum = () => {
    // State for managing sections, each section contains a title and lessons
    const [sections, setSections] = useState([
      {
        id: 1,
        title: "Section 1: Lectures",
        lessons: [
          { id: 1, icon: FiFileText, color: "green.500", text: "Part 1 - Your First Ride" },
          { id: 2, icon: FiMic, color: "purple.500", text: "Part 2 - A Closer Introduction" },
          { id: 3, icon: FiHelpCircle, color: "orange.500", text: "Part 3 - Structure Your Training" },
        ],
      },
      {
        id: 2,
        title: "Section 2: Necessary",
        lessons: [
          { id: 1, icon: FiFileText, color: "green.500", text: "Part 4 - Finding New Training" },
          { id: 2, icon: FiVideo, color: "blue.500", text: "Part 5 - Zoom Conference" },
          { id: 3, icon: FiHelpCircle, color: "yellow.500", text: "Final Quiz" },
        ],
      },
    ]);
    
    const [editingSectionId, setEditingSectionId] = useState(null); // Track which section is being edited
    const [showIcons, setShowIcons] = useState(null); // Track which section is hovered
  
    // Function to handle section deletion
    const handleDeleteSection = (id) => {
      setSections(sections.filter((section) => section.id !== id));
    };
  
    return (
      <HStack spacing={5} align="start" h="full">
        {/* Sidebar Section */}
        <Box w="30%" bg="gray.100" p={5} rounded="md">
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
                      <AccordionButton
                        _hover={{ bg: "gray.200" }}
                        onMouseEnter={() => setShowIcons(section.id)}
                        onMouseLeave={() => setShowIcons(null)}
                      >
                        <Icon as={RxDragHandleDots2} color="gray.500" marginRight="10px" />
  
                        {/* Section title and Edit icon */}
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          display="flex"
                          alignItems="center"
                        >
                          {editingSectionId === section.id ? (
                            <Input
                              value={section.title}
                              onChange={(e) =>
                                setSections((prevState) =>
                                  prevState.map((s) =>
                                    s.id === section.id ? { ...s, title: e.target.value } : s
                                  )
                                )
                              }
                              onBlur={() => setEditingSectionId(null)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  setEditingSectionId(null);
                                }
                              }}
                              autoFocus
                              size="sm"
                              width="auto"
                            />
                          ) : (
                            section.title
                          )}
  
                          {showIcons === section.id && (
                            <Icon
                              as={PiPencilSimpleFill}
                              color="gray.500"
                              marginLeft="10px"
                              onClick={() => setEditingSectionId(section.id)}
                              cursor="pointer"
                            />
                          )}
                        </Box>
  
                        {/* Delete icon aligned to the right */}
                        {showIcons === section.id && (
                          <Box marginRight="10px">
                            <Icon
                              as={RiDeleteBinFill}
                              color="gray.500"
                              cursor="pointer"
                              onClick={() => handleDeleteSection(section.id)} // Delete section on click
                            />
                          </Box>
                        )}
  
                        {isExpanded ? <RxTriangleUp /> : <RxTriangleDown />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <List spacing={3}>
                        {section.lessons.map((lesson) => (
                          <ListItem key={lesson.id}>
                            <ListIcon as={RxDragHandleDots2} color="gray.500" />
                            <ListIcon as={lesson.icon} color={lesson.color} />
                            {lesson.text}
                          </ListItem>
                        ))}
                      </List>
                      {/* Add Lesson Button */}
                      <Button leftIcon={<AddIcon />} colorScheme="blue" mt={4}>
                        Add a lesson
                      </Button>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
  
        {/* Main Content */}
        <Box w="70%" p={10} textAlign="center">
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Let's build your course!
            </Text>
            <Text fontSize="md" color="gray.500">
              Get started by creating the lessons from scratch in the column on
              the left or import your Educational content.
            </Text>
          </Box>
        </Box>
      </HStack>
    );
  };
  
  export default Curriculum;