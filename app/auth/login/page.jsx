'use client';
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Avatar,
  Fade,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';
import useLogin from '../../hooks/useLogin';
import { useRouter } from 'next/navigation';

function IniciarSesion() {
  const router = useRouter();
  const {
    correo,
    setCorreo,
    contrasena,
    setContrasena,
    error,
    loading,
    handleSubmit,
  } = useLogin();

  const irARegistro = () => {
    router.push('/auth/register');
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {/* IZQUIERDA */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url('/imgLogin.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >

        <Fade in={true} timeout={1200}>
          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Explora el universo gamer
          </Typography>
        </Fade>

      </Box>

      {/* DERECHA */}
      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(to right, #141E30, #243B55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Fade in={true} timeout={800}>
          <Box
            sx={{
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              padding: 5,
              boxShadow: 6,
              width: '100%',
              maxWidth: 400,
              color: '#fff',
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: '#1AE5E5', mb: 1 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                Iniciar Sesión
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2, backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                {error}
              </Alert>
            )}

            <TextField
              label="Correo"
              variant="filled"
              fullWidth
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />

            <Button
              fullWidth
              variant="contained"
              disabled={loading}
              onClick={handleSubmit}
              sx={{
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: 'linear-gradient(to right, #0072ff, #00c6ff)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Iniciar sesión'}
            </Button>

            <Typography variant="body2" sx={{ mt: 2, color: '#ddd', textAlign: 'center' }}>
              ¿Aún no tienes cuenta?{' '}
              <Button variant="text" sx={{ color: '#1AE5E5' }} onClick={irARegistro}>
                Regístrate
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default IniciarSesion;
