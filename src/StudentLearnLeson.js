import React from "react";
import {
  Box,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";

const StudentLearnLesson = ({ lesson }) => {
  return (
    <Box p={5} bg="gray.50" borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          {lesson.text}
        </Text>
        <Text fontSize="md" color="gray.600">
          {lesson.content}
        </Text>

        {/* Hiển thị video hoặc audio dựa trên loại bài học */}
        {lesson.type === "video" && (
          <Center>
            <video
              controls
              src={lesson.mediaUrl} // URL video
              style={{ width: "100%", height: "auto" }} // Đảm bảo video có kích thước phù hợp
            >
              Your browser does not support the video tag.
            </video>
          </Center>
        )}

        {lesson.type === "audio" && (
          <Center>
            <audio
              controls
              src={lesson.mediaUrl} // URL mp3
              style={{ width: "100%", height: "auto" }} // Đảm bảo audio có kích thước phù hợp
            >
              Your browser does not support the audio tag.
            </audio>
          </Center>
        )}
      </VStack>
    </Box>
  );
};

export default StudentLearnLesson;
