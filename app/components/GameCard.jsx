
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const GameCard = ({ game, onClick }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 250 },
        height: 280,
        minHeight: 280,
        maxHeight: 280,
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: 'rgba(255,255,255,0.1)',
        border: '2px solid #1AE5E5',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 20px rgba(99, 122, 122, 0.5)',
          transform: 'scale(1.05)',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={game.image}
        alt={game.name}
        sx={{
          height: 150,
          width: '100%',
          objectFit: 'cover',
          borderBottom: '2px solid #1AE5E5',
        }}
      />
      <CardContent
        sx={{
          p: 1,
          height: 130,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#00c6ff',
            textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {game.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.8rem',
            color: '#ddd',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {game.genres}
        </Typography>

        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#ddd' }}>
          Año: {game.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
