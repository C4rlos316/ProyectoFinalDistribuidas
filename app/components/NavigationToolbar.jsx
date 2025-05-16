'use client';
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import Link from 'next/link';

const NavigationToolbar = ({ navItems }) => {
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
          <Avatar sx={{ ml: 2, bgcolor: 'background.paper' }}>P</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationToolbar;
