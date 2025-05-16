'use client';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  CardMedia,
  Rating
} from '@mui/material';

const GameModal = ({ open, handleClose, game }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{game.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CardMedia
            component="img"
            image={game.image}
            alt={game.name}
            sx={{ width: 300, height: 200, objectFit: 'cover' }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {`Year: ${game.year}`}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {game.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <Rating value={game.rating} precision={0.1} readOnly />
              <Typography variant="body2">
                {`${game.rating} ★ (${game.reviews} reviews)`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
        <Button color="success" variant="contained">
          Agregar a Favoritos
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameModal;
