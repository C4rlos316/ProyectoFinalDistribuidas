// app/hooks/useGames.js
import { useState } from 'react';

import { gamesData } from '../constants/appConstants';


const useGames = () => {
  const [games, setGames] = useState(gamesData);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = selectedPlatform === 'all'
    ? games
    : games.filter((game) => game.platform === selectedPlatform);

  const selectGame = (game) => {
    console.info('useGames: Selected game:', game.name);
    setSelectedGame(game);
  };

  return {
    games,
    filteredGames,
    selectedPlatform,
    setSelectedPlatform,
    selectedGame,
    selectGame,
  };
};

export default useGames;