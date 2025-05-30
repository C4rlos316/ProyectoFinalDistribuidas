// app/components/GameGrid.jsx
import { Grid } from '@mui/material';
import GameCard from './GameCard';

const GameGrid = ({ games, onGameSelect }) => (
  <Grid container spacing={2} sx={{ width: '100%', mx: 'auto', mt: 2 }}>
    {games.map((game) => (
      <Grid item xs={12} sm={6} md={4} key={game.id} sx={{ display: 'flex' }}>
        <GameCard game={game} onClick={() => onGameSelect(game)} />
      </Grid>
    ))}
  </Grid>
);

export default GameGrid;