import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ClockContainer = styled.div`
  width: 600px; /* Adjust the size of the clock */
  height: 250px; /* Adjust the size of the clock */
  border: 0px solid #000000; /* Clock border */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 150px; /* Make only the top-right corner round */ /* Make it round */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CountdownTimerContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 33%; /* Make position relative */
  
   /* Adjust the height of the label container */
`;

const TimerNumber = styled.span`
  color: #ffffff;
  border: 2px solid #F8F6F0;
  background-color: black;
  padding: 5px;
  margin: 0 0px;
  width: 40px;
  height: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 2rem;
  box-shadow: 0 0 5px rgb(0, 0, 0);
  border-radius: 10%;
`;

const ColonSeparator = styled.span`
  font-size: 3rem;
  color: #000000;
  font-family: monospace;
  margin: 0 2px;
  transform: translateY(-7px);
`;

const LabelContainer = styled.div`
  font-family: monospace;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 10%;
  border: 0px solid #ccc;
  
  border-radius: 150px;
  position: absolute;
  bottom: 12%; /* Adjust position from bottom */
  
   /* Adjust position from bottom */
`;

const LabelText = styled.span`
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
  box-shadow: 0px 08px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 150px;
  background-color: #EEE7DA;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8F6F0;
`;

function Countdown() {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const initialCountdownDate = parseInt(localStorage.getItem('countdownDate')) || (new Date().getTime() + oneWeekInMilliseconds);

  const [countdownDate, setCountdownDate] = useState(initialCountdownDate);

  useEffect(() => {
    localStorage.setItem('countdownDate', countdownDate);
  }, [countdownDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownDate((prevDate) => prevDate - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateTimeLeft = () => {
    const difference = countdownDate - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTimeLeft();

  return (
    <CountdownTimerContainer>
      {Object.entries({ days, hours, minutes, seconds }).flatMap(([unit, value], index, array) => {
        const isLast = index === array.length - 1;
        const digits = String(value).padStart(2, '0').split('');
        return [
          index > 0 && <ColonSeparator key={`${unit}-separator`}>:</ColonSeparator>,
          ...digits.map((digit, idx) => (
            <TimerNumber key={`${unit}-${idx}`}>{digit}</TimerNumber>
          )),
        ];
      })}
    </CountdownTimerContainer>
  );
}

function App() {
  return (
    <PageContainer>
      <Navbar />
      <ClockContainer>
        <Countdown />
        <LabelContainer>
          <LabelText>DAYS</LabelText>
          <LabelText>HOURS</LabelText>
          <LabelText>MINUTES</LabelText>
          <LabelText>SECONDS</LabelText>
        </LabelContainer>
      </ClockContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
