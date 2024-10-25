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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Faq() {
const [questions, setQuestions] = useState([
{ question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
{ question: "Why do we use it?", answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
]);

const [newQuestion, setNewQuestion] = useState("");
const [newAnswer, setNewAnswer] = useState("");

const handleAddQuestion = () => {
if (newQuestion.trim() && newAnswer.trim()) {
setQuestions([...questions, { question: newQuestion, answer: newAnswer }]);
setNewQuestion("");
setNewAnswer("");
}
};

const handleDeleteQuestion = (index) => {
const updatedQuestions = questions.filter((_, i) => i !== index);
setQuestions(updatedQuestions);
};

return (
<Box p={5} w="full">
<Heading as="h2" size="lg" mb={5}>
Frequently Asked Questions
</Heading>
<VStack spacing={5} align="start" w="full">
{questions.map((item, index) => (
<Box key={index} borderWidth="1px" borderRadius="md" p={4} w="full" bg="gray.50" >
<HStack justify="space-between" mb={3}>
<Text fontSize="lg" fontWeight="bold">
Question {index + 1}
</Text>
<IconButton
icon={<DeleteIcon />}
aria-label="Delete question"
onClick={() => handleDeleteQuestion(index)}
size="sm"
/>
</HStack>
<VStack spacing={3} align="start">
<Text fontWeight="bold">Question</Text>
<Input
value={item.question}
isReadOnly // Make it read-only for now. You can add editing functionality if needed.
/>
<Text fontWeight="bold">Answer</Text>
<Textarea
value={item.answer}
isReadOnly // Make it read-only for now. You can add editing functionality if needed.
/>
</VStack>
</Box>
))}
    {/* Input fields for adding new questions */}
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
        Add new question
      </Button>
    </Box>

    {/* Save Button */}
    <Button colorScheme="blue" size="lg">
      Save
    </Button>
  </VStack>
</Box>
);
}

export default Faq;