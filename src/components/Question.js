import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(2);
  

useEffect(handleTimeOut, []);

function handleTimeOut () {
  setTimeout(createInterval, 1000);
  return () => console.log("hello");

function createInterval() {
  setInterval(subtractTime, 1000)
}


function subtractTime() {
    setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 1);
}

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

useEffect(() => {
  if (timeRemaining === 0) {
    handleAnswer(false)
  }
}, [timeRemaining]);

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
