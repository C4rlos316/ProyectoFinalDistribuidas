'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/auth/login');
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // limpiar timer si el componente se desmonta
  }, [router]);

  return (
    <div style={{
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
      <div>🎮 Plataforma de Videojuegos</div>
      <div style={{ marginTop: '1rem', fontSize: '1rem' }}>Cargando...</div>
    </div>
  );
}
