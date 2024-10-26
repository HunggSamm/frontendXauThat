import React, { useState, useRef } from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Image,
  Divider,
  Button,
  IconButton,
  Icon,
  VStack,
  ChakraProvider
} from '@chakra-ui/react';
import { BsEraserFill } from "react-icons/bs";
import { FaHighlighter } from "react-icons/fa";
import SingleChoiceQuestion from './SingleChoiceQuestion';  // Import the component

const Reading = () => {
  const [leftWidth, setLeftWidth] = useState(50);
  const [highlightButtonVisible, setHighlightButtonVisible] = useState(false);
  const [highlightPosition, setHighlightPosition] = useState({ top: 0, left: 0 });
  const selectedRangeRef = useRef(null);

  const handleDrag = (e) => {
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 20 && newLeftWidth < 80) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString();

      if (selectedText.trim()) {
        selectedRangeRef.current = range;

        const rect = range.getBoundingClientRect();
        setHighlightPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
        setHighlightButtonVisible(true);
      } else {
        setHighlightButtonVisible(false);
      }
    }
  };

  const handleHighlight = () => {
    const selection = window.getSelection();

    if (!selectedRangeRef.current || selection.rangeCount === 0) return;

    const range = selectedRangeRef.current;
    const selectedText = selection.toString();
    const parentNode = range.commonAncestorContainer.parentNode;

    if (parentNode.tagName === 'SPAN' && parentNode.style.backgroundColor === 'yellow') {
      parentNode.replaceWith(document.createTextNode(parentNode.textContent));
      setHighlightButtonVisible(false);
    } else {
      const highlightSpan = document.createElement('span');
      highlightSpan.style.backgroundColor = 'yellow';
      highlightSpan.textContent = selectedText;

      range.deleteContents();
      range.insertNode(highlightSpan);

      selection.removeAllRanges();
      setHighlightButtonVisible(false);
    }
  };

  // Reading questions data (similar to Part 2 format)
  const questionsData = [
    {
      question: "The optimum amount of fluoride in fluoridated water is calculated partly according to",
      options: [
        { value: "A", label: "A. how hot the area is." },
        { value: "B", label: "B. how warm the water is." },
        { value: "C", label: "C. how many dental problems there are in the community." },
        { value: "D", label: "D. how much fluoride the community chooses to have in its water." }
      ],
      questionNumber: 27,
    },
    {
      question: "One reason given by the writer for opposing fluoridation is that",
      options: [
        { value: "A", label: "A. it may contribute to tooth decay." },
        { value: "B", label: "B. it will be unacceptably expensive for the public." },
        { value: "C", label: "C. obligatory fluoridation takes away personal freedom." },
        { value: "D", label: "D. excessive fluoride could be added to the water by mistake." }
      ],
      questionNumber: 28,
    },
    {
      question: "The writer mentions Kuhn in order to",
      options: [
        { value: "A", label: "A. provide a contrast with the view of Collins." },
        { value: "B", label: "B. support the rational nature of scientific inquiry." },
        { value: "C", label: "C. demonstrate that Kuhn did not argue his case adequately." },
        { value: "D", label: "D. show that science can be influenced by non-scientific considerations." }
      ],
      questionNumber: 29,
    }
  ];

  return (
    <ChakraProvider>
      <Flex height="100vh" padding="0px" position="relative" onMouseUp={handleTextSelect}>
        <Box
          width={`${leftWidth}%`}
          overflowY="auto"
          padding="20px"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          position="relative"
          id="reading-passage"
        >
          <Heading as="h3" size="lg" mb={4}>
            PART 3
          </Heading>
          <Heading as="h4" size="md" mb={2}>
            READING PASSAGE 3
          </Heading>
          <Text fontSize="lg" mb={4}>
            You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage 3 below.
          </Text>
          <Image
            src="https://res.cloudinary.com/dnhvlncfw/image/upload/v1728881932/cld-sample-3.jpg"
            alt="Reading Passage Image"
            width="100%"
            mb={4}
          />
          <Heading as="h5" size="lg" mb={4}>
            The fluoridation controversy
          </Heading>
          <Text fontSize="md" mb={4}>
            The long-standing debate about whether to fluoridate our drinking water continues. Fluoridation is the addition of fluoride to public water supplies with the aim of reducing tooth decay...
          </Text>

          {highlightButtonVisible && (
            <IconButton
              aria-label={
                selectedRangeRef.current?.commonAncestorContainer?.parentNode?.style?.backgroundColor === 'yellow'
                  ? 'Remove Highlight'
                  : 'Highlight'
              }
              icon={
                selectedRangeRef.current?.commonAncestorContainer?.parentNode?.style?.backgroundColor === 'yellow' ? (
                  <Icon as={BsEraserFill} />
                ) : (
                  <Icon as={FaHighlighter} />
                )
              }
              colorScheme="yellow"
              border="none"
              backgroundColor="transparent"
              color="teal"
              variant="ghost"
              position="absolute"
              top={highlightPosition.top}
              left={highlightPosition.left}
              zIndex={2}
              size="sm"
              onClick={handleHighlight}
            />
          )}
        </Box>

        <Box
          width="3px"
          cursor="col-resize"
          backgroundColor="#808080"
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', handleDrag);
            });
          }}
          _hover={{ bg: 'gray.500' }}
          zIndex={1}
        />

        <Box
          width={`${100 - leftWidth}%`}
          overflowY="auto"
          padding="20px"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading as="h4" size="md" mb={4}>
            Questions 27-31
          </Heading>
          <Text fontSize="md" mb={4}>
            Choose the correct letter, A, B, C or D. Write the correct letter in boxes 27-31 on your answer sheet.
          </Text>

          {/* Render questions using SingleChoiceQuestion */}
          <VStack spacing={6} align="start">
            {questionsData.map((data) => (
              <SingleChoiceQuestion
                key={data.questionNumber}
                questionNumber={data.questionNumber}
                question={data.question}
                options={data.options}
              />
            ))}
          </VStack>

          <Divider mt={6} />

        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Reading;