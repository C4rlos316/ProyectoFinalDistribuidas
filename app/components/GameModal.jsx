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
  Rating,
  IconButton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';

const GameModal = ({ open, handleClose, game }) => {
  if (!game) return null;

  return (
<Dialog
  open={open}
  onClose={handleClose}
  maxWidth="md"
  fullWidth
  sx={{
    '& .MuiDialog-paper': {
      background: 'linear-gradient(to right, #1e1e1e, #2a2a2a)',
      color: '#fff',
      borderRadius: 3,
      boxShadow: 10,
    }
  }}
>
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#1AE5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {game.name}
        <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <CardMedia
            component="img"
            image={game.image}
            alt={game.name}
            sx={{
              width: 320,
              height: 200,
              borderRadius: 2,
              boxShadow: 4,
              objectFit: 'cover',
            }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Año:</strong> {game.year}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {game.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Rating value={game.rating} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                {`${game.rating} ★ (${game.reviews} reseñas)`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'space-between' }}>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cerrar
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1AE5E5',
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#11cfcf' }
          }}
          startIcon={<FavoriteBorderIcon />}
        >
          Agregar a Favoritos
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameModal;
