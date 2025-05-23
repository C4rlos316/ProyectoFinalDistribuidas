
'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Fade,
  IconButton,
  TextField,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const ActivityCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [showComment, setShowComment] = useState(false);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleCommentToggle = () => {
    setShowComment((prev) => !prev);
  };

  const renderContent = () => {
    switch (post.type) {
      case 'post':
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label="Nuevo"
                sx={{ bgcolor: '#1AE5E5', color: '#FFFFFF' }}
              />
              <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
                {new Date(post.timestamp).toLocaleString()}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: '#FFFFFF', mt: 1 }}
            >
              {post.text}
            </Typography>
          </Box>
        );
      case 'image':
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label="Imagen"
                sx={{ bgcolor: '#1AE5E5', color: '#FFFFFF' }}
              />
              <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
                {new Date(post.timestamp).toLocaleString()}
              </Typography>
            </Box>
            {post.image && (
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt="Publicación"
                sx={{ objectFit: 'cover', borderRadius: 1, mt: 1 }}
              />
            )}
            <Typography
              variant="body1"
              sx={{ color: '#FFFFFF', mt: 1 }}
            >
              {post.description}
            </Typography>
          </Box>
        );
      case 'event':
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label="Evento"
                sx={{ bgcolor: '#4CAF50', color: '#FFFFFF' }}
              />
              <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
                {new Date(post.timestamp).toLocaleString()}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
              {post.title}
            </Typography>
            {post.image && (
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover', borderRadius: 1, mt: 1 }}
              />
            )}
            <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
              <strong>Tipo:</strong> {post.eventType}
            </Typography>
            <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
              <strong>Lugar:</strong> {post.location}
            </Typography>
            <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
              <strong>Organizador:</strong> {post.organizer}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#FFFFFF', mt: 1 }}
            >
              {post.description}
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Fade in timeout={1000}>
      <Card
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #1AE5E5',
          borderRadius: 2,
          mb: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
          },
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: '#1AE5E5', mb: 1 }}>
            <strong>{post.author}</strong>
          </Typography>
          {renderContent()}
          <Box sx={{ display: 'flex', gap: 1, mt: 2, alignItems: 'center' }}>
            <IconButton onClick={handleLike} sx={{ color: '#1AE5E5' }}>
              <FavoriteIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#DDDDDD' }}>
              {likes} Likes
            </Typography>
            <IconButton onClick={handleCommentToggle} sx={{ color: '#1AE5E5' }}>
              <CommentIcon />
            </IconButton>
          </Box>
          {showComment && (
            <TextField
              fullWidth
              variant="filled"
              placeholder="Escribe un comentario..."
              sx={{
                mt: 1,
                '& .MuiFilledInput-root': {
                  bgcolor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: 1,
                },
              }}
            />
          )}
        </CardContent>
      </Card>
    </Fade>
  );
};

export default ActivityCard;
