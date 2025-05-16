'use client';
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import GameCard from '../components/GameCard';
import NavigationToolbar from '../components/NavigationToolbar';
import PlatformFilter from '../components/PlatformFilter';
import { navItems, platforms } from '../constants/appConstants';
import useDialog from '../hooks/useDialog';
import GameModal from '../components/GameModal';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PaginaPrincipal = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const { open, handleOpen, handleClose } = useDialog();
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: 1, name: 'Cyberpunk 2077', genres: 'Action, Adventure, Role-Playing', image: '/imgJuego.jpg', platform: 'pc', year: '2020 - 2021', description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.', rating: 4.5, reviews: 1000 },
    { id: 2, name: 'Dying Light 2', genres: 'Action, Adventure, Horror, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation', year: '2022', description: 'Survive in a post-apocalyptic world filled with zombies.', rating: 4.0, reviews: 800 },
    { id: 3, name: 'Elden Ring', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'xbox', year: '2022', description: 'An epic fantasy RPG set in a vast open world.', rating: 4.8, reviews: 1200 },
    { id: 4, name: 'Halo Infinite', genres: 'First-Person Shooter', image: 'https://via.placeholder.com/150', platform: 'xbox', year: '2021', description: 'Master Chief returns in an epic sci-fi shooter.', rating: 4.2, reviews: 900 },
    { id: 5, name: 'Horizon Forbidden West', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation', year: '2022', description: 'Explore a lush post-apocalyptic world with Aloy.', rating: 4.6, reviews: 1100 },
    { id: 6, name: 'The Legend of Zelda: Breath of the Wild 2', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'nintendo', year: '2023', description: 'A new adventure in the Zelda universe.', rating: 4.7, reviews: 950 },
    { id: 7, name: 'Overwatch 2', genres: 'First-Person Shooter, Hero Shooter', image: 'https://via.placeholder.com/150', platform: 'pc', year: '2022', description: 'Team-based shooter with new heroes and maps.', rating: 4.3, reviews: 700 },
    { id: 8, name: 'Suicide Squad: Kill the Justice League', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'all', year: '2023', description: 'Play as the Suicide Squad to take down the Justice League.', rating: 4.1, reviews: 600 },
    { id: 9, name: 'Test Game', genres: 'Test Genre', image: 'https://via.placeholder.com/150', platform: 'pc', year: '2024', description: 'A test game for development purposes.', rating: 3.5, reviews: 200 },
  ];

  const filteredGames = selectedPlatform === 'all'
    ? games
    : games.filter(game => game.platform === selectedPlatform);

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      
      }}
    >
      <NavigationToolbar navItems={navItems} />

      <Box sx={{ p: 3, bgcolor: 'rgba(0,0,0,0.7)', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
          Featured
        </Typography>

        <PlatformFilter 
          platforms={platforms}
          selectedPlatform={selectedPlatform}
          onSelect={setSelectedPlatform}
        />

        <Grid container spacing={2} sx={{ width: '100%', mx: 'auto', mb: 0 }}>
          {filteredGames.map((game) => (
            <Grid
              item
              xs="auto"
              key={game.id}
              sx={{ animation: `${fadeInUp} 0.5s ease-in-out` }}
            >
              <GameCard
                game={game}
                onClick={() => {
                  setSelectedGame(game);
                  handleOpen();
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {open && selectedGame && (
        <GameModal open={open} handleClose={handleClose} game={selectedGame} />
      )}
    </Box>
  );
};

export default PaginaPrincipal;
