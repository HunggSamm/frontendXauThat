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
  
  // Initialize answers state from localStorage
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = {};
    // Check all possible questions (1-40)
    for (let i = 1; i <= 40; i++) {
      const savedAnswer = localStorage.getItem(`Q${i}`);
      if (savedAnswer) {
        savedAnswers[i] = savedAnswer;
      }
    }
    return savedAnswers;
  });

  // Handler for question answers
  const handleQuestionAnswered = (questionNumber, value) => {
    setAnswers(prev => {
      const newAnswers = { ...prev };
      if (!value) {
        delete newAnswers[questionNumber];
      } else {
        newAnswers[questionNumber] = value;
      }
      return newAnswers;
    });

    // Save to localStorage
    if (value) {
      localStorage.setItem(`Q${questionNumber}`, value);
    } else {
      localStorage.removeItem(`Q${questionNumber}`);
    }
  };

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
        answers={answers} // Pass answers to Footer if needed
      />
    </ChakraProvider>
  );
};


export default ListeningTest;