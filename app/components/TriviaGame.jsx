// app/components/TriviaGame.jsx
'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Fade,
} from '@mui/material';
import Notifications from './Notifications';
import useTrivia from '../hooks/useTrivia';

const TriviaGame = () => {
  const {
    currentQuestion,
    score,
    selectedAnswer,
    setSelectedAnswer,
    isCorrect,
    gameOver,
    canPlay,
    handleAnswer,
    resetGame,
    questionNumber,
    totalQuestions,
    alert,
    handleAlertClose,
  } = useTrivia();

  if (!currentQuestion && !gameOver) {
    return <Typography sx={{ color: '#FFFFFF' }}>Cargando...</Typography>;
  }

  return (
    <Fade in timeout={800}>
      <Box>
        <Notifications open={alert.open} alert={alert} handleClose={handleAlertClose} />
        <Card
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid #1AE5E5',
            borderRadius: 2,
            maxWidth: 600,
            mx: 'auto',
            p: 2,
            '&:hover': {
              boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
            },
          }}
        >
          <CardContent>
            {gameOver ? (
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h5"
                  sx={{ color: '#1AE5E5', fontWeight: 'bold', mb: 2 }}
                >
                  ¡Juego Terminado!
                </Typography>
                <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>
                  Puntaje Final: {score}
                </Typography>
                {!canPlay && (
                  <Typography variant="body1" sx={{ color: '#FF5252', mb: 2 }}>
                    No puedes jugar de nuevo hasta dentro de 24 horas.
                  </Typography>
                )}
                <Button
                  variant="contained"
                  onClick={resetGame}
                  sx={{
                    bgcolor: '#1AE5E5',
                    color: '#000000',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#11CFCF' },
                  }}
                >
                  Jugar de Nuevo
                </Button>
              </Box>
            ) : (
              <>
                <Typography variant="body1" sx={{ color: '#DDDDDD', mb: 2 }}>
                  Pregunta {questionNumber} de {totalQuestions} | Puntaje: {score}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: '#FFFFFF', fontWeight: 'bold', mb: 3 }}
                >
                  {currentQuestion.question}
                </Typography>
                <RadioGroup
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  sx={{ mb: 2 }}
                >
                  {currentQuestion.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={
                        <Radio
                          sx={{
                            color: '#1AE5E5',
                            '&.Mui-checked': { color: '#1AE5E5' },
                          }}
                        />
                      }
                      label={option}
                      sx={{
                        color: '#FFFFFF',
                        '& .MuiFormControlLabel-label': { fontSize: '0.9rem' },
                      }}
                      disabled={isCorrect !== null}
                    />
                  ))}
                </RadioGroup>
                <Button
                  variant="contained"
                  onClick={handleAnswer}
                  disabled={!selectedAnswer || isCorrect !== null}
                  sx={{
                    bgcolor: '#1AE5E5',
                    color: '#000000',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#11CFCF' },
                    '&:disabled': { bgcolor: '#666666' },
                  }}
                >
                  Siguiente
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export default TriviaGame;