import React, { useState } from 'react';
import { Box, Text, VStack, HStack, Icon, Divider, ChakraProvider } from '@chakra-ui/react';
import { FiBook, FiMail, FiCreditCard, FiStar, FiUsers, FiPenTool, FiHelpCircle, FiShoppingCart, FiAward } from 'react-icons/fi';
import { LuTrophy } from "react-icons/lu";
import Wishlist from './Wishlist'; // Đảm bảo rằng bạn đã nhập đúng đường dẫn đến component Wishlist
import EnrollCourse from './EnrollCourse';

const Messages = () => <Text>Messages Content</Text>;
const Memberships = () => <Text>Memberships Content</Text>;
const Groups = () => <Text>Groups Content</Text>;
const Assignments = () => <Text>Assignments Content</Text>;
const Quizzes = () => <Text>Quizzes Content</Text>;
const Orders = () => <Text>Orders Content</Text>;
const Certificates = () => <Text>Certificates Content</Text>;
const Points = () => <Text>Points Content</Text>;

const menuItems = [
  { label: 'Enrolled Courses', icon: FiBook, component: <EnrollCourse /> },
  { label: 'Messages', icon: FiMail, component: <Messages /> },
  { label: 'Memberships', icon: FiCreditCard, component: <Memberships /> },
  { label: 'Wishlist', icon: FiStar, component: <Wishlist /> }, 
  { label: 'Groups', icon: FiUsers, component: <Groups /> },
  { label: 'My Assignments', icon: FiPenTool, component: <Assignments /> },
  { label: 'Enrolled Quizzes', icon: FiHelpCircle, component: <Quizzes /> },
  { label: 'My Orders', icon: FiShoppingCart, component: <Orders /> },
  { label: 'My Certificates', icon: FiAward, component: <Certificates /> },
  { label: 'My Points', icon: LuTrophy, component: <Points /> },
];

const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleItemClick = (index) => {
    setSelectedIndex(index); 
  };

  return (
    <ChakraProvider>
      <HStack spacing={0}>
        <Box w="250px" bg="white" h="100vh" borderRight="1px solid #e2e8f0">
          <Divider my={4} />
          <VStack spacing={0} align="stretch">
            {menuItems.map((item, index) => (
              <HStack
                key={index}
                px={4}
                py={3}
                justifyContent="space-between"
                _hover={{ bg: 'gray.100' }}
                cursor="pointer"
                transition="background-color 0.2s"
                onClick={() => handleItemClick(index)}
                bg={selectedIndex === index ? 'gray.100' : 'transparent'}
              >
                <Text fontWeight="medium" color={selectedIndex === index ? 'blue.500' : 'gray.700'}>
                  {item.label}
                </Text>
                <Icon 
                  as={item.icon} 
                  boxSize={5} 
                  color={selectedIndex === index ? 'blue.500' : 'gray.600'}
                />
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Right Side Box */}
        <Box flex="1" p={4} bg="gray.50" h="100vh" >
          {selectedIndex !== null ? menuItems[selectedIndex].component : <Text>Please select an item from the menu.</Text>}
        </Box>
      </HStack>
    </ChakraProvider>
  );
};

export default SideBar;