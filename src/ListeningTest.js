import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';

const ListeningTest = () => {
  const [activePart, setActivePart] = useState('part1');
  const [scrollToQuestion, setScrollToQuestion] = useState(null);
  // Change to store actual answer values instead of just question numbers
  const [answers, setAnswers] = useState({});

  // Updated handler to track actual answer values
  const handleQuestionAnswered = (questionNumber, value) => {
    setAnswers(prev => {
      // If value is empty or undefined, remove the answer
      if (!value) {
        const newAnswers = { ...prev };
        delete newAnswers[questionNumber];
        return newAnswers;
      }
      // Otherwise store the answer
      return {
        ...prev,
        [questionNumber]: value
      };
    });
  };

  // Helper function to get set of answered questions (those with actual values)
  const getAnsweredQuestions = () => {
    return new Set(Object.keys(answers).map(Number));
  };

  const renderPartComponent = () => {
    const props = {
      scrollToQuestion,
      onQuestionAnswered: handleQuestionAnswered,
      answers,
    };

    switch (activePart) {
      case 'part1':
        return <Part1 {...props} />;
      case 'part2':
        return <Part2 {...props} />;
      case 'part3':
        return <Part3 {...props} />;
      case 'part4':
        return <Part4 {...props} />;
      default:
        return <Part1 {...props} />;
    }
  };

  return (
    <ChakraProvider>
      <Header />
      {renderPartComponent()}
      <Footer
        activePart={activePart}
        setActivePart={setActivePart}
        setScrollToQuestion={setScrollToQuestion}
        answeredQuestions={getAnsweredQuestions()}
      />
    </ChakraProvider>
  );
};

export default ListeningTest;