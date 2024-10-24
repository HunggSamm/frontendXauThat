import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Select,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Button,
  Collapse,
  Heading,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import SingleChoice from "./SingleChoice";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import Mapping from "./Mapping";

function App() {
  // State to store sections and their questions
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Section 1",
      questions: [
        { id: 1, type: "single", text: "What does CPU stand for?" },
      ],
      isExpanded: true, // Track if the section is expanded or collapsed
    },
  ]);

  // Function to add a new section
  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      title: `Section ${sections.length + 1}`,
      questions: [],
      isExpanded: true, // Default to expanded when created
    };
    setSections([...sections, newSection]);
  };

  // Function to remove a section
  const removeSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  // Function to toggle the expansion of a section
  const toggleSectionExpand = (sectionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  // Function to add a new question to a specific section
  const addQuestion = (sectionId) => {
    const newQuestion = {
      id: Date.now(), // Unique ID using timestamp
      type: "single",
      text: "New question",
    };
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, questions: [...section.questions, newQuestion] }
          : section
      )
    );
  };

  // Function to remove a question from a section
  const removeQuestion = (sectionId, questionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              questions: section.questions.filter(
                (question) => question.id !== questionId
              ),
            }
          : section
      )
    );
  };

  // Function to update the question type in a section
  const updateQuestionType = (sectionId, questionId, newType) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              questions: section.questions.map((question) =>
                question.id === questionId
                  ? { ...question, type: newType }
                  : question
              ),
            }
          : section
      )
    );
  };

  // Function to render the question component based on its type
  const renderQuestionComponent = (question) => {
    switch (question.type) {
      case "single":
        return (
          <SingleChoice
            key={question.id}
            answers={[
              "Computer Processing Unit",
              "Central Peripheral Unit",
              "Central Processing Unit",
              "Computer Processing User",
            ]}
          />
        );
      case "multiple":
        return (
          <MultipleChoice
            key={question.id}
            answers={[
              "Computer Processing Unit",
              "Central Peripheral Unit",
              "Central Processing Unit",
              "Computer Processing User",
            ]}
          />
        );
      case "true-false":
        return <TrueFalse key={question.id} />;
      case "matching":
        return (
          <Mapping
            key={question.id}
            data={[
              { question: "Bill", answer: "Gates" },
              { question: "Steve", answer: "Jobs" },
              { question: "Elon", answer: "Musk" },
              { question: "Mark", answer: "Zuckerberg" },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Box p={8} bg="gray.100" minH="100vh">
        {/* Header to add a new section */}
        <Flex justify="space-between" mb={4} align="center">
          <Button colorScheme="blue" onClick={addSection} leftIcon={<AddIcon />}>
            Add Section
          </Button>
        </Flex>

        {/* Render list of sections */}
        {sections.map((section) => (
          <Box key={section.id} p={4} bg="white" mb={4} borderRadius="lg" borderWidth="1px">
            <Flex justify="space-between" align="center">
              {/* Editable section title */}
              <Editable defaultValue={section.title}>
                <EditablePreview />
                <EditableInput />
              </Editable>

              <Flex align="center">
                {/* Expand/Collapse button */}
                <IconButton
                  icon={section.isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  aria-label={section.isExpanded ? "Collapse section" : "Expand section"}
                  onClick={() => toggleSectionExpand(section.id)}
                  mr={2}
                />

                {/* Delete section button */}
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete section"
                  colorScheme="red"
                  onClick={() => removeSection(section.id)}
                />
              </Flex>
            </Flex>

            {/* Collapse/Expand questions inside the section */}
            <Collapse in={section.isExpanded} animateOpacity>
              <Flex justify="flex-end" mb={4}>
                <Button
                  colorScheme="green"
                  onClick={() => addQuestion(section.id)}
                  leftIcon={<AddIcon />}
                >
                  Add Question
                </Button>
              </Flex>

              {/* Render list of questions within the section */}
              {section.questions.map((question) => (
                <Box key={question.id} p={4} bg="gray.50" mb={4} borderRadius="lg" borderWidth="1px">
                  <Flex justify="space-between" mb={4} align="center">
                    {/* Editable question text */}
                    <Editable defaultValue={question.text}>
                      <EditablePreview />
                      <EditableInput />
                    </Editable>

                    <Flex align="center">
                      {/* Select to change the question type */}
                      <Select
                        w="200px"
                        mr={2}
                        value={question.type}
                        onChange={(e) =>
                          updateQuestionType(section.id, question.id, e.target.value)
                        }
                      >
                        <option value="single">Single choice</option>
                        <option value="multiple">Multiple choice</option>
                        <option value="true-false">True-False</option>
                        <option value="matching">Matching</option>
                      </Select>

                      {/* Delete question button */}
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Delete question"
                        colorScheme="red"
                        onClick={() => removeQuestion(section.id, question.id)}
                      />
                    </Flex>
                  </Flex>

                  {/* Render the question component based on its type */}
                  {renderQuestionComponent(question)}
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default App;