import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import './QuizPage.css'; // Import your custom CSS styles

const QuizPage = () => {
  const location = useLocation();
  const courseName = location.state?.courseName || '';
  const quizData = location.state?.quiz || [];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: selectedOption });
  };

  const calculateScore = () => {
    const totalQuestions = quizData.length;
    let correctAnswers = 0;

    quizData.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });

    return (correctAnswers / totalQuestions) * 100;
  };

  const handleSubmitQuiz = () => {
    const score = calculateScore();
    setQuizSubmitted(true);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderResult = () => {
    const score = calculateScore();
    const passThreshold = 60; // Adjust this threshold for passing score

    return (
      <>
        <h2>Quiz Result</h2>
        <p>
          {score >= passThreshold ? 'Congratulations! You passed the quiz.' : 'Sorry, you did not pass the quiz.'}
        </p>
        <p>Your score: {score.toFixed(2)}%</p>
        <button onClick={closeModal}>Close</button>
      </>
    );
  };

  return (
    <div className="quiz-page">
      <h3 className="course-name">Quiz for {courseName}</h3>
      {quizData.map((question, index) => (
        <div key={index} className="question">
          <p className="question-text">{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="option-label">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={quizAnswers[index] === option}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                disabled={quizSubmitted}
              />
              <span className="option">{option}</span>
            </label>
          ))}
        </div>
      ))}
      {!quizSubmitted && (
        <button className="question-button" onClick={handleSubmitQuiz}>
          Submit Quiz
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Quiz Result"
      >
        {renderResult()}
      </Modal>
    </div>
  );
};

export default QuizPage;
