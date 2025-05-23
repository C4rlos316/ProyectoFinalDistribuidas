
'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Fade,
} from '@mui/material';
import NavigationToolbar from '../components/NavigationToolbar';
import ActivityCard from '../components/ActivityCard';
import CreatePostModal from '../components/CreatePostModal';
import { navItems } from '../constants/appConstants';
import useActivity from '../hooks/useActivity';

const ActivityPage = () => {
  const { posts: initialPosts } = useActivity();
  const [posts, setPosts] = useState(initialPosts);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
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

      <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
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
            Actividad
          </Typography>
        </Fade>

        {/* Sección para crear publicación */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="filled"
            placeholder="¿Qué quieres publicar?"
            onClick={() => setModalOpen(true)}
            sx={{
              '& .MuiFilledInput-root': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: 2,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
              },
            }}
          />
        </Box>

        {/* Feed */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {posts.map((post) => (
            <ActivityCard key={post.id} post={post} />
          ))}
        </Box>

        <CreatePostModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleCreatePost}
        />
      </Box>
    </Box>
  );
};

export default ActivityPage;
