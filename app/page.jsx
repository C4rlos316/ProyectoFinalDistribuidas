'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box,Avatar,CardMedia } from '@mui/material';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/auth/login');
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // limpiar time
  }, [router]);

  return (
    <Box style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#121212',
      color: '#fff',
      fontSize: '2rem',
      fontWeight: 'bold',
    }}>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <CardMedia
                  component="img"
                  image={"/Glowlogo.png"}
                  sx={{
                    width: 320,
                    height: 300,
                    objectFit: 'scale-down',
                  }}
                />
                </Box>
      <div>🎮 Plataforma de Videojuegos</div>
      <div style={{ marginTop: '1rem', fontSize: '1rem' }}>Cargando...</div>
    </Box>
  );
}
