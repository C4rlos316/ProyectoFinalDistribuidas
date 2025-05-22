// app/hooks/useTrivia.js
'use client';
import { useState, useEffect } from 'react';
import { triviaQuestions } from '../constants/appConstants';

/**
 * Hook para la trivia.
 * Selecciona 3 preguntas aleatorias, maneja puntaje, respuestas y restricción de 24 horas.
 */
const useTrivia = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
  const [canPlay, setCanPlay] = useState(true);

  // Verificar si se puede jugar (restricción de 24 horas)
  useEffect(() => {
    const lastPlayed = localStorage.getItem('triviaLastPlayed');
    if (lastPlayed) {
      const lastPlayedTime = new Date(parseInt(lastPlayed, 10));
      const now = new Date();
      const hoursDiff = (now - lastPlayedTime) / (1000 * 60 * 60);
      if (hoursDiff < 1) {
        setCanPlay(false);
        setGameOver(true);
        setAlert({
          open: true,
          severity: 'warning',
          message: `No puedes jugar de nuevo hasta dentro de ${Math.ceil(24 - hoursDiff)} horas.`,
        });
        return;
      }
    }

    // Seleccionar 3 preguntas aleatorias
    const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 3));
  }, []);

  // Manejar respuesta
  const handleAnswer = () => {
    if (!selectedAnswer) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedAnswer === currentQuestion.correctAnswer;

    console.info('useTrivia: Answer submitted:', selectedAnswer);
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 10);
      setAlert({ open: true, severity: 'success', message: '¡Correcto!' });
    } else {
      setAlert({
        open: true,
        severity: 'error',
        message: `Incorrecto, la respuesta era ${currentQuestion.correctAnswer}`,
      });
    }

    // Pasar a la siguiente pregunta tras 1 segundo
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer('');
        setIsCorrect(null);
        setAlert({ open: false, severity: '', message: '' });
      } else {
        setGameOver(true);
        localStorage.setItem('triviaLastPlayed', Date.now().toString());
        console.info('useTrivia: Game over, last played time saved');
      }
    }, 1000);
  };

  // Reiniciar el juego (si han pasado 24 horas)
  const resetGame = () => {
    const lastPlayed = localStorage.getItem('triviaLastPlayed');
    if (lastPlayed) {
      const lastPlayedTime = new Date(parseInt(lastPlayed, 10));
      const now = new Date();
      const hoursDiff = (now - lastPlayedTime) / (1000 * 60 * 60);
      if (hoursDiff < 24) {
        setAlert({
          open: true,
          severity: 'warning',
          message: `No puedes jugar de nuevo hasta dentro de ${Math.ceil(24 - hoursDiff)} horas.`,
        });
        return;
      }
    }

    console.info('useTrivia: Resetting game');
    const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 3));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer('');
    setIsCorrect(null);
    setGameOver(false);
    setAlert({ open: false, severity: '', message: '' });
    localStorage.setItem('triviaLastPlayed', Date.now().toString());
  };

  // Cerrar alerta
  const handleAlertClose = () => {
    setAlert({ open: false, severity: '', message: '' });
  };

  return {
    currentQuestion: questions[currentQuestionIndex],
    score,
    selectedAnswer,
    setSelectedAnswer,
    isCorrect,
    gameOver,
    canPlay,
    handleAnswer,
    resetGame,
    questionNumber: currentQuestionIndex + 1,
    totalQuestions: questions.length,
    alert,
    handleAlertClose,
  };
};

export default useTrivia;