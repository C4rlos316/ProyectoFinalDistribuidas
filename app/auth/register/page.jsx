'use client';
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Alert,
  Avatar,
  Slide,
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import useRegister from '@/app/hooks/useRegister';

function Registro() {
  const router = useRouter();
  const {
    nombre,
    setNombre,
    correo,
    setCorreo,
    contrasena,
    setContrasena,
    error,
    loading,
    handleSubmit,
  } = useRegister();

  const irAInicio = () => {
    router.push('/auth/login');
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
      {/* IZQUIERDA - Formulario */}
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
        <Slide in direction="right" timeout={800}>
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
                <PersonAddAltIcon />
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                Regístrate
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2, backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                {error}
              </Alert>
            )}

            <TextField
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Contraseña"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              variant="filled"
              fullWidth
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
              Registrarse
            </Button>

            {loading && <LinearProgress sx={{ mt: 2 }} />}

            <Typography variant="body2" sx={{ mt: 2, color: '#ddd', textAlign: 'center' }}>
              ¿Ya tienes cuenta?{' '}
              <Button variant="text" sx={{ color: '#1AE5E5' }} onClick={irAInicio}>
                Inicia sesión
              </Button>
            </Typography>
          </Box>
        </Slide>
      </Box>

      {/* DERECHA - Imagen / Frase */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url("/imgRegistro.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Slide in direction="left" timeout={1000}>
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
              maxWidth: 400,
              textAlign: 'center',
            }}
          >
            Estás a punto de comenzar tu próxima aventura. ¡Bienvenido al mundo gamer!
          </Typography>
        </Slide>

      </Box>
    </Box>
  );
}

export default Registro;
