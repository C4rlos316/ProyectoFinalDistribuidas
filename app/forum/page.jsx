
'use client';
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  List,
  ListItem,
  ListItemText,
  Fab,
  Fade,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import NavigationToolbar from '../components/NavigationToolbar';
import NewThreadModal from '../components/NewThreadModal';
import { navItems } from '../constants/appConstants';
import useForum from '../hooks/useForum';
import useDialog from '../hooks/useDialog';

const ForumsPage = () => {
  const {
    threads,
    setThreads,
    newThreadTitle,
    setNewThreadTitle,
    newThreadDescription,
    setNewThreadDescription,
    expanded,
    handleChange,
    handleCreateThread,
  } = useForum();
  const { open, handleOpen, handleClose } = useDialog();

  const handleModalClose = () => {
    setNewThreadTitle('');
    setNewThreadDescription('');
    handleClose();
  };

  const handleModalSubmit = () => {
    if (handleCreateThread()) {
      handleClose();
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
          onClick={handleOpen}
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
        <NewThreadModal
          open={open}
          onClose={handleModalClose}
          newThreadTitle={newThreadTitle}
          setNewThreadTitle={setNewThreadTitle}
          newThreadDescription={newThreadDescription}
          setNewThreadDescription={setNewThreadDescription}
          onSubmit={handleModalSubmit}
        />
      </Box>
    </Box>
  );
};

export default ForumsPage;
