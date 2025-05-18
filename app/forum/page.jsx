
'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import NavigationToolbar from '../components/NavigationToolbar';
import { navItems } from '../constants/appConstants';
import { useTheme } from '@mui/material/styles';

const initialThreads = [
  {
    id: 1,
    title: '¿Cuál es el mejor juego de 2025?',
    description: 'Quiero recomendaciones de juegos nuevos, especialmente RPGs y shooters.',
    author: 'Spriu',
    replies: [
      { user: 'RPGQueen', comment: 'Elden Ring 2' },
      { user: 'CasualGamer', comment: 'Clash royale es el mejor ' },
    ],
    replyCount: 2,
  },
  {
    id: 2,
    title: 'Problemas con el lag t',
    description: 'Alguien sabe cómo optimizar la conexión para reducir el ping?',
    author: 'SpeedRunnerX',
    replies: [
      { user: 'PixelMaster', comment: 'Prueba cambiar el DNS a Cloudflare (1.1.1.1).' },
    ],
    replyCount: 1,
  },
  {
    id: 3,
    title: 'Torneo de Smash Bros este fin de semana',
    description: '¿Quién juega ? Es online y hay premios.',
    author: 'CasualGamer',
    replies: [
      { user: 'RPGQueen', comment: '¿Dónde me registro?' },
      { user: 'SpeedRunnerX', comment: 'Suena divertido' },
    ],
    replyCount: 2,
  },
];

const ForumsPage = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadDescription, setNewThreadDescription] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewThreadTitle('');
    setNewThreadDescription('');
  };

  const handleCreateThread = () => {
    if (newThreadTitle && newThreadDescription) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        description: newThreadDescription,
        author: 'UsuarioActual',
        replies: [],
        replyCount: 0,
      };
      setThreads([newThread, ...threads]);
      handleCloseModal();
    }
  };

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
              color: '#fff',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
            }}
          >
            Foros
          </Typography>
        </Fade>

        {/* Lista de hilos */}
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', borderRadius: 2, p: 2 }}>
          {threads.map((thread) => (
            <Fade in timeout={1000} key={thread.id}>
              <Accordion
                expanded={expanded === `panel${thread.id}`}
                onChange={handleChange(`panel${thread.id}`)}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  border: '1px solid #1AE5E5',
                  borderRadius: 2,
                  mb: 2,
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#1AE5E5' }} />}
                  sx={{ bgcolor: 'rgba(0,0,0,0.3)', borderRadius: 2 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 'bold', color: '#fff' }}
                        >
                          {thread.title}
                        </Typography>
                        <Chip
                          label={`${thread.replyCount} Respuestas`}
                          size="small"
                          sx={{
                            bgcolor: thread.replyCount > 2 ? '#2196f3' : '#666',
                            color: '#fff',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        color="#ddd"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {thread.description}
                      </Typography>
                      <Typography variant="body2" color="#ddd">
                        Por {thread.author}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2 }}>
                 
                  <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                    Respuestas
                  </Typography>
                  {thread.replies.length > 0 ? (
                    <List>
                      {thread.replies.map((reply, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            bgcolor: 'rgba(0,0,0,0.2)',
                            borderRadius: 1,
                            mb: 1,
                            p: 2,
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 'bold', color: '#1AE5E5' }}
                              >
                                {reply.user}
                              </Typography>
                            }
                            secondary={
                              <Typography variant="body2" sx={{ color: '#ddd' }}>
                                {reply.comment}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" sx={{ color: '#ddd' }}>
                      No hay respuestas aún.
                    </Typography>
                  )}
                </AccordionDetails>
              </Accordion>
            </Fade>
          ))}
        </Box>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          onClick={handleOpenModal}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 16,
            bgcolor: '#1AE5E5',
            color: '#000',
            '&:hover': {
              bgcolor: '#11cfcf',
              boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
            },
          }}
        >
          <AddIcon />
        </Fab>

        {/* Modal para crear nuevo hilo */}
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="sm"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              background: 'linear-gradient(to right, #1e1e1e, #2a2a2a)',
              color: '#fff',
              borderRadius: 2,

          //    boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <DialogTitle
            sx={{
              fontWeight: 'bold',
              color: '#1AE5E5',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            Nueva Pregunta
            <IconButton onClick={handleCloseModal} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Título"
              variant="filled"
              fullWidth
              value={newThreadTitle}
              onChange={(e) => setNewThreadTitle(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: '#fff',
                borderRadius: 1,
                '& .MuiInputLabel-root': { color: '#000000' },
                '& .MuiInputBase-input': { color: '#000' },
              }}
            />
            <TextField
              label="Descripción"
              variant="filled"
              fullWidth
              multiline
              rows={4}
              value={newThreadDescription}
              onChange={(e) => setNewThreadDescription(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: '#fff',
                borderRadius: 1,
                '& .MuiInputLabel-root': { color: '#000000' },
                '& .MuiInputBase-input': { color: '#000' },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              sx={{ color: '#1AE5E5', borderColor: '#1AE5E5' }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={handleCreateThread}
              disabled={!newThreadTitle || !newThreadDescription}
              sx={{
                background: '#1AE5E5',
                color: '#000',
                fontWeight: 'bold',
             
              }}
            >
              Preguntar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ForumsPage;
