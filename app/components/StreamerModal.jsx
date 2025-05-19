
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardMedia,
  Typography,
  Chip,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { streamerPlatforms } from '../constants/appConstants';

const StreamerModal = ({ open, onClose, streamer }) => {
  if (!streamer) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(to right, #1e1e1e, #2a2a2a)',
          color: '#fff',
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          fontSize: '1.8rem',
          color: '#1AE5E5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {streamer.name}
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <CardMedia
          component="img"
          image={streamer.banner}
          alt={streamer.name}
          sx={{
            height: 150,
            borderRadius: 2,
            mb: 2,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <CardMedia
            component="img"
            image={streamer.avatar}
            alt={streamer.name}
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid #1AE5E5',
            }}
          />
          <Chip
            label={streamer.status === 'live' ? 'En vivo' : 'Offline'}
            sx={{
              bgcolor: streamer.status === 'live' ? '#4caf50' : '#666',
              color: '#fff',
            }}
          />
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {streamer.description}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Plataforma:</strong> {streamerPlatforms.find(p => p.value === streamer.platform)?.label}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Seguidores:</strong> {streamer.followers.toLocaleString()}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Vistas promedio:</strong> {streamer.averageViews.toLocaleString()}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined" sx={{ color: '#1AE5E5', borderColor: '#1AE5E5' }}>
          Cerrar
        </Button>
        <Button
          variant="contained"
          href={streamer.channelUrl}
          target="_blank"
          sx={{
            bgcolor: '#1AE5E5',
            color: '#000',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#11cfcf' },
          }}
          disabled={!streamer.channelUrl}
        >
          Ver Canal
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StreamerModal;
