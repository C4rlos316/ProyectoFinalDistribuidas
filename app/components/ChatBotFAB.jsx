
'use client';
import { useState } from 'react';
import {
  Fab,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export default function ChatBotFAB() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setHistory([...history, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setHistory((prev) => [...prev, { sender: 'bot', text: data.reply }]);
    } catch {
      setHistory((prev) => [...prev, { sender: 'bot', text: 'Error al conectar con Gemini.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <Fab
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: '#1AE5E5',
          color: '#000000',
          '&:hover': {
            bgcolor: '#11CFCF',
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
          },
        }}
        aria-label="Abrir chat bot"
      >
        <ChatIcon />
      </Fab>

      {/* Ventana del chat */}
      {open && (
        <Paper
          role="dialog"
          aria-label="Ventana de chat"
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            width: 300,
            maxHeight: 400,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid #1AE5E5',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
          }}
        >
          {/* Encabezado */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              bgcolor: 'linear-gradient(to right, #141E30, #243B55)',
              borderBottom: '1px solid #1AE5E5',
            }}
          >
            <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              Gemini Bot
            </Typography>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: '#1AE5E5' }}
              aria-label="Cerrar chat"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Historial */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              bgcolor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {history.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  maxWidth: '75%',
                  bgcolor: msg.sender === 'user' ? '#1AE5E5' : '#4CAF50',
                  color: msg.sender === 'user' ? '#000000' : '#FFFFFF',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <Typography variant="body2">{msg.text}</Typography>
              </Box>
            ))}
            {loading && (
              <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
                Gemini está respondiendo...
              </Typography>
            )}
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, borderTop: '1px solid #1AE5E5' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="filled"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe tu mensaje..."
                sx={{
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                  '& .MuiInputLabel-root': { color: '#000000' },
                }}
                aria-label="Mensaje para enviar"
              />
              <Button
                onClick={sendMessage}
                disabled={loading}
                sx={{
                  bgcolor: '#1AE5E5',
                  color: '#000000',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#11CFCF' },
                  '&:disabled': { bgcolor: '#666666' },
                }}
                aria-label="Enviar mensaje"
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </>
  );
}
