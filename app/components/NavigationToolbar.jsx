
'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Menu, MenuItem, IconButton, Divider } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const NavigationToolbar = ({ navItems }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handlePerfilClick = () => {
    handleCloseMenu();
    router.push('/profile');
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #070a10, #0a1118)',
        // borderBottom: '2px solid #1AE5E5',
        // boxShadow: '0 0 15px #1ae5e5',
        mb: 2,
      }}
    >
      <Toolbar>

        <Avatar
          src="/Glowmin.png"
          sx={{
            width: 50,
            height: 50,
            boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
          }}
        />
        <Typography
          variant="h6"
          paddingLeft={2}
          noWrap
          component={Link} // Usa Link de Next.js para la navegación
          href="/homepage"
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.2rem',
            color: '#1AE5E5',
            textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
          }}
        >
          G.R.O.W
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            //  <Link key={item.label} href={item.path} passHref>
            <Button
              key={item.label}
              href={item.path}
              component={Link}
              sx={{
                mx: 1,
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#1AE5E5',
                  textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
                },
              }}
            >
              {item.label}
            </Button>
            //  </Link>
          ))}

          <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
            <Avatar
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#1AE5E5',
                border: '2px solid #1AE5E5',
                // boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
              }}
            />
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
                bgcolor: 'rgba(9,16,23,255)',
                color: '#fff',
                //  border: '1px solid #1AE5E5',
                borderRadius: 2,
                //  boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
              },
            }}
          >

            <Typography p={2} variant="h7" color="#1AE5E5" fontWeight="bold"
           
             
              sx={{
                '&:hover': {
                  bgcolor: '#1AE5E5',
                  color: '#000',
              
                },
              }}
            >
              Nombre Usuario
            </Typography>
            <Divider color='#1AE5E5'
            variant="middle"
              />

            <MenuItem
              onClick={handlePerfilClick}
              sx={{
                '&:hover': {
                  bgcolor: '#1AE5E5',
                  color: '#000',
                },
              }}
            >
              Perfil
            </MenuItem>

            <Divider color='#1AE5E5'  variant="middle" />
            <MenuItem
              onClick={handleCloseMenu}
              sx={{
                '&:hover': {
                  bgcolor: '#1AE5E5',
                  color: '#000',
                },
              }}
            >
              Cerrar sesión
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationToolbar;
