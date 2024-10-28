import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';

const ListeningTest = () => {
  const [activePart, setActivePart] = useState(null);

  const renderPartComponent = () => {
    switch (activePart) {
      case 'part1':
        return <Part1 />;
      case 'part2':
        return <Part2 />;
      case 'part3':
        return <Part3 />;
      case 'part4':
        return <Part4 />;
      default:
        return <Part1 />;
    }
  };

  return (
    <ChakraProvider>
      <Header />
      {renderPartComponent()}
      <Footer activePart={activePart} setActivePart={setActivePart} />
    </ChakraProvider>
  );
};

export default ListeningTest;