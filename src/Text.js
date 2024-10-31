import React, { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // CSS mặc định của react-quill
import './EditerStyles.css'; // Thêm file CSS tùy chỉnh

const FullTextEditor = () => {
  const [value, setValue] = useState(''); // Giá trị của văn bản
  const [savedContent, setSavedContent] = useState(''); // Nội dung đã lưu

  const modules = {
    toolbar: [
      ['undo', 'redo'], // Hoàn tác, làm lại
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], // Header, font
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Danh sách có thứ tự, không thứ tự
      ['bold', 'italic', 'underline', 'strike'], // In đậm, in nghiêng, gạch chân, gạch ngang
      [{ 'color': [] }, { 'background': [] }], // Đổi màu chữ và nền
      [{ 'align': [] }], // Căn lề
      ['link', 'image', 'video'], // Chèn link, hình ảnh, video
      ['clean'], // Nút xóa định dạng
    ],
  };

  const handleSave = () => {
    setSavedContent(value); // Lưu nội dung vào savedContent
    console.log('Nội dung lưu:', value);
    // Xử lý lưu giá trị tới API hoặc database
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box
        w="100%"
        maxW="800px"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder="Nhập văn bản của bạn..."
        />
      </Box>
      <Button
        colorScheme="teal"
        onClick={handleSave}
        alignSelf="flex-end"
      >
        Lưu
      </Button>

      {/* Hiển thị nội dung đã lưu */}
      {savedContent && (
        <DisplayContent content={savedContent} />
      )}
    </VStack>
  );
};

const DisplayContent = ({ content }) => {
  return (
    <Box
      className="editor-content" // Thêm class để áp dụng style
      w="100%"
      maxW="800px"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default FullTextEditor;