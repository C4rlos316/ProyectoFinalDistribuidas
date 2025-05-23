
'use client';
import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Fade,
  LinearProgress,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavigationToolbar from '../components/NavigationToolbar';
import { navItems } from '../constants/appConstants';

const ProfilePage = () => {
  const stats = [
    { label: 'Jugados', value: 150 },
    { label: 'Completados', value: 20 },
    { label: 'Calificación', value: 4.2 },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: 'https://instagram.com/' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/' },
    { icon: <FacebookIcon />, href: 'https://facebook.com/' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #141E30, #243B55)',
        position: 'relative',
      }}
    >
      <NavigationToolbar navItems={navItems} />

      <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 3, px: 3, py: 3, position: 'relative', zIndex: 1 }}>
        {/* Encabezado */}
        <Fade in timeout={1000}>
          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              border: '1px solid #1AE5E5',
              borderRadius: 2,
              mb: 3,
              p: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
              },
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
              <Avatar
                src="/imgJuego.jpg"
                sx={{
                  width: 150,
                  height: 150,
                  border: '2px solid #1AE5E5',
                  boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1AE5E5',
                    textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
                    mb: 1,
                  }}
                >
                  User
                </Typography>
                <Typography variant="body1" color="#ddd" sx={{ mb: 2 }}>
                  Nivel 8 · 1.5k Puntos
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    bgcolor: '#333',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'flex-end' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#1AE5E5',
                      borderColor: '#1AE5E5',
                      '&:hover': { bgcolor: 'rgba(26, 229, 229, 0.1)' },
                    }}
                  >
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
              </Box>
            </CardContent>
          </Card>
        </Fade>

        {/* Secciones */}
        <Fade in timeout={1200}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Estadísticas */}
            <Card
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid #1AE5E5',
                borderRadius: 2,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#1AE5E5', fontWeight: 'bold' }}>
                Estadísticas
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {stats.map((stat) => (
                  <Card
                    key={stat.label}
                    sx={{
                      flex: '1 1 200px',
                      bgcolor: 'rgba(255,255,255,0.05)',
                      border: '1px solid #1AE5E5',
                      borderRadius: 2,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                      },
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1AE5E5' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="#ddd">
                      {stat.label}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Card>

            {/* Biografía */}
            <Card
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid #1AE5E5',
                borderRadius: 2,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: '#1AE5E5', fontWeight: 'bold' }}>
                Biografía
              </Typography>
              <Typography variant="body1" color="#ddd" sx={{ mb: 2 }}>
                Me gusta jugar en mi tiempo libre y ver monos chinos
              </Typography>
              <Button
                variant="text"
                sx={{ color: '#1AE5E5', textTransform: 'none' }}
              >
                Editar
              </Button>
            </Card>

            {/* Redes sociales */}
            <Card
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',

                // border: '1px solid #1AE5E5',
                // borderRadius: 2,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#1AE5E5', fontWeight: 'bold' }}>

              </Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                {socialLinks.map((item, idx) => (
                  <IconButton
                    key={idx}
                    href={item.href}
                    target="_blank"
                    sx={{
                      color: '#fff',
                      fontSize: '2.5rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#1AE5E5',
                        transform: 'scale(1.2)',
                        boxShadow: '0 0 15px rgba(26, 229, 229, 0.5)',
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </Card>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default ProfilePage;
