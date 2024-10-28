import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

import Header from './Header'
import Footer from './Footer';
import Part1 from './Part1';
const ListeningTest = () => {

  return (
    <ChakraProvider>
      <Header />
      <Part1 />
      <Footer />
    </ChakraProvider>
  );
};

export default ListeningTest;