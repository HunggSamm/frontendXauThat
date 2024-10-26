import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

import Header from './Header'
import Footer from './Footer';
import Part2 from './Part2';
const ListeningTest = () => {

  return (
    <ChakraProvider>
      <Header />
      <Part2 />
      <Footer />
    </ChakraProvider>
  );
};

export default ListeningTest;