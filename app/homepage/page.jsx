// app/page.jsx
'use client';
import React, { useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import NavigationToolbar from '../components/NavigationToolbar';
import PlatformFilter from '../components/PlatformFilter';
import GameGrid from '../components/GameGrid';
import GameModal from '../components/GameModal';
import useGames from '../hooks/useGames';
import useDialog from '../hooks/useDialog';
import { navItems, platforms } from '../constants/appConstants';

const HomePage = () => {
  const { filteredGames, selectedPlatform, setSelectedPlatform, selectGame } = useGames();
  const { open, handleOpen, handleClose } = useDialog();
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    selectGame(game);
    setSelectedGame(game);
    handleOpen();
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #141E30, #243B55)' }}>
      <NavigationToolbar navItems={navItems} />
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <Fade in timeout={800}>
          <Typography variant="h4" sx={{ color: '#1AE5E5', fontWeight: 'bold', mb: 3 }}>
            Juegos Destacados
          </Typography>
        </Fade>
        <PlatformFilter
          platforms={platforms}
          selectedPlatform={selectedPlatform}
          onSelect={setSelectedPlatform}
        />
        <GameGrid games={filteredGames} onGameSelect={handleGameSelect} />
        <GameModal open={open} handleClose={handleClose} game={selectedGame} />
      </Box>
    </Box>
  );
};

export default HomePage;