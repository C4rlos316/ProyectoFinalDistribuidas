
'use client';
import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import NavigationToolbar from '../components/NavigationToolbar';
import TriviaGame from '../components/TriviaGame';
import { navItems } from '../constants/appConstants';

const MiniGamePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #141E30, #243B55)',
        position: 'relative',
      }}
    >
      <NavigationToolbar navItems={navItems} />

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <Fade in timeout={800}>
          <Typography
            variant="h4"
            sx={{
              color: '#1AE5E5',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
            }}
          >
            Trivia Gamer
          </Typography>
        </Fade>

        <TriviaGame />
      </Box>
    </Box>
  );
};

export default MiniGamePage;
