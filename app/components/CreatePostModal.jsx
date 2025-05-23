
'use client';
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Select,
  MenuItem,
  Button,
  Fade,
} from '@mui/material';
import { eventTypes } from '../constants/appConstants';

const CreatePostModal = ({ open, onClose, onSubmit }) => {
  const [postType, setPostType] = useState('post');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [eventData, setEventData] = useState({
    title: '',
    eventType: 'tournament',
    description: '',
    image: null,
    location: '',
    organizer: '',
  });

  const handleSubmit = () => {
    const post = {
      id: Date.now(),
      type: postType,
      author: 'Usuario', // Cambiar por usuario autenticado en el futuro
      timestamp: new Date().toISOString(),
    };

    if (postType === 'post') {
      post.text = text;
    } else if (postType === 'image') {
      post.image = image ? URL.createObjectURL(image) : null;
      post.description = description;
    } else if (postType === 'event') {
      post.title = eventData.title;
      post.eventType = eventData.eventType;
      post.description = eventData.description;
      post.image = eventData.image ? URL.createObjectURL(eventData.image) : null;
      post.location = eventData.location;
      post.organizer = eventData.organizer;
    }

    onSubmit(post);
    onClose();
    setText('');
    setImage(null);
    setDescription('');
    setEventData({
      title: '',
      eventType: 'tournament',
      description: '',
      image: null,
      location: '',
      organizer: '',
    });
    setPostType('post');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(39, 143, 171, 0.94)',
            border: '1px solid #1AE5E5',
            borderRadius: 2,
            p: 3,
            width: 400,
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#1AE5E5', fontWeight: 'bold', mb: 2 }}
          >
            Crear Publicación
          </Typography>
          <RadioGroup
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            sx={{ mb: 2 }}
          >
            <FormControlLabel
              value="post"
              control={<Radio sx={{ color: '#1AE5E5', '&.Mui-checked': { color: '#1AE5E5' } }} />}
              label="Publicación"
              sx={{ color: '#FFFFFF' }}
            />
            <FormControlLabel
              value="image"
              control={<Radio sx={{ color: '#1AE5E5', '&.Mui-checked': { color: '#1AE5E5' } }} />}
              label="Imagen"
              sx={{ color: '#FFFFFF' }}
            />
            <FormControlLabel
              value="event"
              control={<Radio sx={{ color: '#1AE5E5', '&.Mui-checked': { color: '#1AE5E5' } }} />}
              label="Evento"
              sx={{ color: '#FFFFFF' }}
            />
          </RadioGroup>

          {postType === 'post' && (
            <TextField
              fullWidth
              multiline
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="¿Qué quieres compartir?"
              variant="filled"
              sx={{
                mb: 2,
                '& .MuiFilledInput-root': {
                  bgcolor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: 1,
                },
              }}
            />
          )}

          {postType === 'image' && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ marginBottom: 16 }}
              />
              {image && (
                <Box sx={{ mb: 2 }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Vista previa"
                    style={{ maxWidth: '100%', borderRadius: 8 }}
                  />
                </Box>
              )}
              <TextField
                fullWidth
                multiline
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción de la imagen"
                variant="filled"
                sx={{
                  mb: 2,
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                }}
              />
            </>
          )}

          {postType === 'event' && (
            <>
              <TextField
                fullWidth
                value={eventData.title}
                onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                placeholder="Título del evento"
                variant="filled"
                sx={{
                  mb: 2,
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                }}
              />
              <Select
                fullWidth
                value={eventData.eventType}
                onChange={(e) => setEventData({ ...eventData, eventType: e.target.value })}
                sx={{
                  mb: 2,
                  bgcolor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: 1,
                }}
              >
                {eventTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                fullWidth
                multiline
                rows={2}
                value={eventData.description}
                onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                placeholder="Descripción del evento"
                variant="filled"
                sx={{
                  mb: 2,
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setEventData({ ...eventData, image: e.target.files[0] })}
                style={{ marginBottom: 16 }}
              />
              {eventData.image && (
                <Box sx={{ mb: 2 }}>
                  <img
                    src={URL.createObjectURL(eventData.image)}
                    alt="Vista previa"
                    style={{ maxWidth: '100%', borderRadius: 8 }}
                  />
                </Box>
              )}
              <TextField
                fullWidth
                value={eventData.location}
                onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                placeholder="Lugar del evento"
                variant="filled"
                sx={{
                  mb: 2,
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                }}
              />
              <TextField
                fullWidth
                value={eventData.organizer}
                onChange={(e) => setEventData({ ...eventData, organizer: e.target.value })}
                placeholder="Organizador"
                variant="filled"
                sx={{
                  mb: 2,
                  '& .MuiFilledInput-root': {
                    bgcolor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: 1,
                  },
                }}
              />
            </>
          )}

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              onClick={onClose}
              sx={{
                color: '#1AE5E5',
                '&:hover': { color: '#11CFCF' },
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={
                (postType === 'post' && !text) ||
                (postType === 'image' && (!image || !description)) ||
                (postType === 'event' &&
                  (!eventData.title || !eventData.description || !eventData.location || !eventData.organizer))
              }
              sx={{
                bgcolor: '#1AE5E5',
                color: '#000000',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#11CFCF' },
                '&:disabled': { bgcolor: '#666666' },
              }}
            >
              Publicar
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CreatePostModal;
