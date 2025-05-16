import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const GameCard = ({ game, onClick }) => {
  return (
    <Card 
      sx={{ width: 200, height: 250, borderRadius: 2, cursor: 'pointer' }} 
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="150"
        image={game.image}
        alt={game.name}
        sx={{ width: 200, objectFit: 'cover' }}
      />
      <CardContent sx={{ p: 1, mt: 0, mb: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
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
          color="text.secondary"
          sx={{
            fontSize: '0.8rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {game.genres}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;