'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Importa useRouter de Next.js

const NavigationToolbar = ({ navItems }) => {
  const router = useRouter(); // Hook para navegación igual creo esto lo tenemos que eliniar y poner otra cosa

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  //  para Perfil: cerrar menú y navegar
  const handlePerfilClick = () => {
    handleCloseMenu();
    router.push('/profile');  // Navega a /profile
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.2rem',
          }}
        >
          NeonPlay
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.path} passHref>
              <Button color="inherit" sx={{ mx: 1, color: 'white' }}>
                {item.label}
              </Button>
            </Link>
          ))}

          <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: 'background.paper', color: 'black' }}></Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiPaper-root': {
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                boxShadow: 4,
              }
            }}
          >
            <MenuItem onClick={handlePerfilClick}>Perfil</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Cerrar sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationToolbar;
