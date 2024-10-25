import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Button,
  Textarea,
  Input,
  IconButton,
  Text,
  Heading,
  Collapse,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { PiPencilSimpleFill } from "react-icons/pi"; // Importing pencil icon

function Faq() {
  const [questions, setQuestions] = useState([
    { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", isOpen: false, isEditing: false },
    { question: "Why do we use it?", answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", isOpen: false, isEditing: false },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [isAdding, setIsAdding] = useState(false); // State to control the visibility of the add question form

  const handleAddQuestion = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: newAnswer, isOpen: false, isEditing: false }]);
      setNewQuestion("");
      setNewAnswer("");
      setIsAdding(false); // Hide the form after adding a question
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const toggleQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const handleEdit = (index) => {
    // Set both isEditing and isOpen to true when editing
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, i) =>
        i === index ? { ...item, isEditing: true, isOpen: true } : item
      )
    );
  };

  const handleUpdateQuestion = (index, updatedQuestion, updatedAnswer) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, i) =>
        i === index
          ? { ...item, question: updatedQuestion, answer: updatedAnswer, isEditing: false }
          : item
      )
    );
  };

  return (
    <Box p={5} w="full">
      <Heading as="h2" size="lg" mb={5}>
        Frequently Asked Questions
      </Heading>
      <VStack spacing={5} align="start" w="full">
        {questions.map((item, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" p={4} w="full" bg="gray.50">
            <HStack justify="space-between" mb={3}>
              <HStack>
                <Text fontSize="lg" fontWeight="bold">
                  Question {index + 1}
                </Text>
                {/* Pencil Icon for Editing */}
                <IconButton
                  icon={<PiPencilSimpleFill />}
                  aria-label="Edit question"
                  onClick={() => handleEdit(index)}
                  size="sm"
                />
              </HStack>
              <HStack>
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete question"
                  onClick={() => handleDeleteQuestion(index)}
                  size="sm"
                />
                <IconButton
                  icon={item.isOpen ? <RxTriangleUp /> : <RxTriangleDown />}
                  aria-label="Toggle question"
                  onClick={() => toggleQuestion(index)}
                  size="sm"
                />
              </HStack>
            </HStack>

            <Text fontWeight="bold">{item.question}</Text>

            {/* Collapse Component to toggle visibility */}
            <Collapse in={item.isOpen} animateOpacity>
              <VStack spacing={3} align="start" mt={3}>
                <Text fontWeight="bold">Question</Text>
                <Input
                  value={item.question}
                  isReadOnly={!item.isEditing} // Make editable when in editing mode
                  onChange={(e) => {
                    const updatedQuestion = e.target.value;
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((q, i) =>
                        i === index ? { ...q, question: updatedQuestion } : q
                      )
                    );
                  }}
                />
                <Text fontWeight="bold">Answer</Text>
                <Textarea
                  value={item.answer}
                  isReadOnly={!item.isEditing} // Make editable when in editing mode
                  onChange={(e) => {
                    const updatedAnswer = e.target.value;
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((q, i) =>
                        i === index ? { ...q, answer: updatedAnswer } : q
                      )
                    );
                  }}
                />
                {/* Show Update Button when editing */}
                {item.isEditing && (
                  <Button
                    mt={2}
                    colorScheme="blue"
                    onClick={() => handleUpdateQuestion(index, item.question, item.answer)}
                  >
                    Update Question
                  </Button>
                )}
              </VStack>
            </Collapse>
          </Box>
        ))}

        {/* Add new question button */}
        <Button mt={4} colorScheme="blue" onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Cancel" : "Add new question"}
        </Button>

        {/* Input fields for adding new questions */}
        {isAdding && (
          <Box w="full" p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
            <VStack spacing={3} align="start" w="full">
              <Text fontWeight="bold">Question</Text>
              <Input
                placeholder="Enter your question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
              <Text fontWeight="bold">Answer</Text>
              <Textarea
                placeholder="Enter the answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </VStack>
            <Button mt={4} colorScheme="blue" onClick={handleAddQuestion}>
              Save Question
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default Faq;