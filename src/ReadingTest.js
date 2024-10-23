import React, { useState, useRef } from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Image,
  RadioGroup,
  Stack,
  Radio,
  Divider,
  Button,
} from '@chakra-ui/react';

const Reading = () => {
  const [leftWidth, setLeftWidth] = useState(50); // Percentage width of the left panel
  const [highlightButtonVisible, setHighlightButtonVisible] = useState(false);
  const [highlightPosition, setHighlightPosition] = useState({ top: 0, left: 0 });
  const selectedRangeRef = useRef(null); // Store the selected range

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
        // If text is selected, store the range and show the highlight button
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

    if (selectedText.trim()) {
      // Create a span element with a yellow background
      const highlightSpan = document.createElement('span');
      highlightSpan.style.backgroundColor = 'yellow';
      highlightSpan.textContent = selectedText;

      // Replace the selected text with the highlighted span
      range.deleteContents();
      range.insertNode(highlightSpan);

      // Clear the selection and hide the highlight button
      selection.removeAllRanges();
      setHighlightButtonVisible(false);
    }
  };

  return (
    <Flex height="100vh" padding="20px" position="relative" onMouseUp={handleTextSelect}>
      {/* Left column - Reading passage */}
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
        <Text fontSize="md" mb={4}>
          Fluoridation, when mixed with water, becomes fluoride and the desired concentration of fluoride in public water is approximately one part per million...
        </Text>

        {/* Highlight Button */}
        {highlightButtonVisible && (
          <Button
            position="absolute"
            top={highlightPosition.top}
            left={highlightPosition.left}
            backgroundColor="yellow.300"
            onClick={handleHighlight}
            zIndex={2}
            size="sm"
          >
            Highlight
          </Button>
        )}
      </Box>

      {/* Resizable divider */}
      <Box
        width="3px" // Increased width for better visibility
        cursor="col-resize"
        backgroundColor="#808080"
        onMouseDown={(e) => {
          e.preventDefault();
          document.addEventListener('mousemove', handleDrag);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleDrag);
          });
        }}
        _hover={{ bg: 'gray.500' }} // Add hover effect for visibility
        zIndex={1}
      />

      {/* Right column - Questions and answers */}
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

        {/* Question 27 */}
        <Box mb={4}>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            27. The optimum amount of fluoride in fluoridated water is calculated partly according to
          </Text>
          <RadioGroup>
            <Stack spacing={2}>
              <Radio value="A">how hot the area is.</Radio>
              <Radio value="B">how warm the water is.</Radio>
              <Radio value="C">how many dental problems there are in the community.</Radio>
              <Radio value="D">how much fluoride the community chooses to have in its water.</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Divider />

        {/* Question 28 */}
        <Box mt={4} mb={4}>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            28. One reason given by the writer for opposing fluoridation is that
          </Text>
          <RadioGroup>
            <Stack spacing={2}>
              <Radio value="A">it may contribute to tooth decay.</Radio>
              <Radio value="B">it will be unacceptably expensive for the public.</Radio>
              <Radio value="C">obligatory fluoridation takes away personal freedom.</Radio>
              <Radio value="D">excessive fluoride could be added to the water by mistake.</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Divider />

        {/* Question 29 */}
        <Box mt={4} mb={4}>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            29. The writer mentions Kuhn in order to
          </Text>
          <RadioGroup>
            <Stack spacing={2}>
              <Radio value="A">provide a contrast with the view of Collins.</Radio>
              <Radio value="B">support the rational nature of scientific inquiry.</Radio>
              <Radio value="C">demonstrate that Kuhn did not argue his case adequately.</Radio>
              <Radio value="D">show that science can be influenced by non-scientific considerations.</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Divider />

        {/* Add more questions as needed */}
      </Box>
    </Flex>
  );
};

export default Reading;