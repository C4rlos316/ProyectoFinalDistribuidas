
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NewThreadModal = ({
  open,
  onClose,
  newThreadTitle,
  setNewThreadTitle,
  newThreadDescription,
  setNewThreadDescription,
  onSubmit,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          background: 'linear-gradient(to right, #1e1e1e, #2a2a2a)',
          color: '#fff',
          borderRadius: 2,
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          color: '#1AE5E5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Nueva Pregunta
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Título"
          variant="filled"
          fullWidth
          value={newThreadTitle}
          onChange={(e) => setNewThreadTitle(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: '#fff',
            borderRadius: 1,
            '& .MuiInputLabel-root': { color: '#000000' },
            '& .MuiInputBase-input': { color: '#000' },
          }}
        />
        <TextField
          label="Descripción"
          variant="filled"
          fullWidth
          multiline
          rows={4}
          value={newThreadDescription}
          onChange={(e) => setNewThreadDescription(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: '#fff',
            borderRadius: 1,
            '& .MuiInputLabel-root': { color: '#000000' },
            '& .MuiInputBase-input': { color: '#000' },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: '#1AE5E5', borderColor: '#1AE5E5' }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!newThreadTitle || !newThreadDescription}
          sx={{
            background: '#1AE5E5',
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Preguntar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewThreadModal;
