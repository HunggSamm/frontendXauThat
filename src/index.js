import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Search from './Search';
import SideBar from './SideBar';
import Page from './Page'
import ListeningTest from './ListeningTest';
import Footer from './FooterReading';
import Header from './Header';
import Part1 from './Part2'
import Reading from './ReadingTest';
import Text from './Text';
import Test from './Test';
import SingleChoice from './SingleChoice';
import MultipleChoice from './MultipleChoice';
import Mapping from './Mapping';
import TrueFalse from './TrueFalse';
import TaoKhoaHoc from './TaoKhoaHoc'
import Notice from './Notice';
import Fail from './Fail';
import Success from './Success';
import ReviewCourse from './ReviewCourse';
import Chart from './LineChart';
import StudentLearn from './StudentLearn'
import CourseCard from './CourseCard';
import Learn from './Learn'
import {
  ChakraProvider
} from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const content = '<h1><strong>Hung:</strong></h1><p>abc ok </p><p><br></p><p><br></p>';

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Learn />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
