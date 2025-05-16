'use client';

import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const ProfilePage = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 5,
        px: 3,
        py: 4,
        borderRadius: 3,
        bgcolor: '#121212',
        color: 'white',
      }}

    >
        
      {/* Avatar y  Nombre */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          src="/imgJuego.jpg"
          sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Spriu
        </Typography>
        <Typography variant="body2" color="gray">
          Nivel 8 · 1.5k Puntos
        </Typography>
      </Box>

      {/* Botones */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <Button variant="outlined" color="inherit">
          Ver Favoritos
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#1AE5E5',
            color: '#000',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#11cfcf' },
          }}
        >
          Editar Perfil
        </Button>
      </Box>

      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 5, flexWrap: 'wrap' }}>
        {[
          { label: 'Jugados', value: 150 },
          { label: 'Completados', value: 20 },
          { label: 'Promedio de calificación', value: 4.2 },
        ].map((stat) => (
          <Box
            key={stat.label}
            sx={{
              width: 200,
              textAlign: 'center',
              border: '1px solid #333',
              p: 2,
              borderRadius: 2,
              bgcolor: '#1e1e1e',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" color="gray">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Biografía */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Biografía
        </Typography>
        <Typography variant="body2" color="gray">
          Me gusta jugar en mi tiempo libre y ver monos chinos
        </Typography>
      </Box>

      {/* Redes Sociales */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Redes sociales 
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {[
            { icon: <InstagramIcon />, label: 'Spriu' },
            { icon: <TwitterIcon />, label: '@Spriu' },
            { icon: <FacebookIcon />, label: 'Spriu' },
          ].map((item, idx) => (
            <Box key={idx} sx={{ textAlign: 'center' }}>
              <IconButton sx={{ color: 'white' }}>
                {item.icon}
              </IconButton>
              <Typography variant="body2">{item.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
