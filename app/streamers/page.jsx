
'use client';
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  List,
  ListItem,
  Fade,
} from '@mui/material';
import NavigationToolbar from '../components/NavigationToolbar';
import StreamerModal from '../components/StreamerModal';
import { navItems, streamerPlatforms } from '../constants/appConstants';
import useStreamers from '../hooks/useStreamers';
import useDialog from '../hooks/useDialog';

const StreamersPage = () => {
  const {
    selectedPlatform,
    setSelectedPlatform,
    selectedStreamer,
    setSelectedStreamer,
    filteredStreamers,
  } = useStreamers();
  const { open, handleOpen, handleClose } = useDialog();

  const handleOpenModal = (streamer) => {
    setSelectedStreamer(streamer);
    handleOpen();
  };

  const handleCloseModal = () => {
    setSelectedStreamer(null);
    handleClose();
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
              color: '#1AE5E5',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
            }}
          >
            Streamers
          </Typography>
        </Fade>

        {/* Filtros */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {streamerPlatforms.map((platform) => (
              <Button
                key={platform.value}
                variant={selectedPlatform === platform.value ? 'contained' : 'outlined'}
                onClick={() => setSelectedPlatform(platform.value)}
                sx={{
                  bgcolor: selectedPlatform === platform.value ? '#1AE5E5' : 'rgba(255,255,255,0.1)',
                  color: selectedPlatform === platform.value ? '#000' : '#fff',
                  border: '1px solid #1AE5E5',
                  borderRadius: 1,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: '#1AE5E5',
                    color: '#000',
                    boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
                  },
                }}
              >
                {platform.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Lista de Streamers */}
        <List sx={{ bgcolor: 'rgba(0,0,0,0.7)', borderRadius: 2, p: 2 }}>
          {filteredStreamers.map((streamer) => (
            <Fade in timeout={1000} key={streamer.id}>
              <ListItem sx={{ p: 0, mb: 2 }}>
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    border: '1px solid #1AE5E5',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
                      transform: 'scale(1.02)',
                    },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpenModal(streamer)}
                >
                  <CardMedia
                    component="img"
                    image={streamer.avatar}
                    alt={streamer.name}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      m: 2,
                      border: '2px solid #1AE5E5',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: '#1AE5E5' }}
                      >
                        {streamer.name}
                      </Typography>
                      <Chip
                        label={streamer.status === 'live' ? 'En vivo' : 'Offline'}
                        size="small"
                        sx={{
                          bgcolor: streamer.status === 'live' ? '#4caf50' : '#666',
                          color: '#fff',
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="#ddd">
                      Plataforma: {streamerPlatforms.find(p => p.value === streamer.platform)?.label}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            </Fade>
          ))}
        </List>

        {/* Modal de Detalles del Streamer */}
        <StreamerModal
          open={open}
          onClose={handleCloseModal}
          streamer={selectedStreamer}
        />
      </Box>
    </Box>
  );
};

export default StreamersPage;
