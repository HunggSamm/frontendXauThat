import React from "react";
import { Box, Text, Table, Tbody, Tr, Td } from "@chakra-ui/react";

const Review = ({ answers = ["A", "B"] }) => {
  // Đảm bảo answers có 40 phần tử
  const displayedAnswers = Array.from({ length: 40 }, (_, i) => answers[i] || "-");

  // Chia 40 phần tử thành các hàng 4 phần tử mỗi hàng
  const rows = [];
  for (let i = 0; i < displayedAnswers.length; i += 4) {
    rows.push(displayedAnswers.slice(i, i + 4));
  }

  return (
    <Box maxWidth="600px" margin="0 auto" p={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Review your answers
      </Text>
      <Text fontSize="sm" color="gray.500" textAlign="center" mb={4}>
        * This window is to review your answers only, you cannot change the answers here
      </Text>
      <Table variant="simple" size="lg" border="1px solid" borderColor="gray.300" borderRadius="md">
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((answer, colIndex) => (
                <Td
                  key={colIndex}
                  textAlign="center"
                  border="1px solid"
                  borderColor="gray.300"
                  fontWeight="bold"
                  color={answer !== "-" ? "blue.600" : "gray.600"}
                  width="25%"
                  p={4}
                >
                  Q{rowIndex * 4 + colIndex + 1}: {answer}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Review;
