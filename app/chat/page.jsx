
'use client';
import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import NavigationToolbar from '../components/NavigationToolbar';
import ChatBotFAB from '../components/ChatBotFAB';
import { navItems } from '../constants/appConstants';

export default function ChatPage() {
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
            Chat con Gemini
          </Typography>
        </Fade>
        <Typography variant="body1" sx={{ color: '#FFFFFF', mb: 3 }}>
          Usa el botón flotante en la esquina inferior derecha para interactuar con el chatbot de Gemini.
        </Typography>

        <ChatBotFAB />
      </Box>
    </Box>
  );
}