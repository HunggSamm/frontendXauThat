import React, { useState } from "react";
import { Box, VStack, Text, Input, useToast } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's snow theme CSS

const Notice = () => {
  const [content, setContent] = useState(""); // State to store the input content
  const toast = useToast();

  return (
    <VStack spacing={4} w="100%" maxW="800px" mx="auto" mt={6}>
      {/* Header for "Login message" */}
      <Box w="100%">
        <Text fontSize="sm" fontWeight="bold" mb={1} color="gray.700">
          Login message
        </Text>

        {/* React Quill Rich Text Editor */}
        <ReactQuill
          value={content}
          onChange={setContent}
          theme="snow"
          placeholder="Enter your login message here..."
          style={{ height: "200px", marginBottom: "20px" }}
        />
        
        {/* Footer note */}
        <Text fontSize="sm" color="gray.500" mt={2}>
          This message will show on the login screen
        </Text>
      </Box>
    </VStack>
  );
};

export default Notice;