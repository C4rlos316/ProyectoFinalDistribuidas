
'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia,
  Chip,
  Button,
  Fade,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationToolbar from '../components/NavigationToolbar';
import { navItems } from '../constants/appConstants';
import { useTheme } from '@mui/material/styles';

const events = [
  {
    id: 1,
    title: 'Mesa de dialogo FI ',
    type: 'tournament',
    date: '2025-06-01',
    status: 'upcoming',
    image: '/imgJuego.jpg',
    banner: '/imgRegistro.jpg',
    description:
      '¡Únete al torneo anual de Valorant! Inscripciones abiertas hasta el 25 de mayo.',
    location: 'Online',
    organizer: 'Spriu',
  },
  {
    id: 2,
    title: 'Lanzamiento de Cyberpunk 2',
    type: 'launch',
    date: '2025-07-15',
    status: 'upcoming',
    image: '/event2.jpg',
    banner: '/banner2.jpg',
    description:
      'Celebra el lanzamiento de Cyberpunk 2 con una transmisión en vivo',
    location: 'Twitch',
    organizer: 'Empresa',
  },
  {
    id: 3,
    title: 'GTA VI',
    type: 'convention',
    date: '2025-08-20',
    status: 'upcoming',
    image: '/event3.jpg',
    banner: '/banner3.jpg',
    description:
      'Lanzamiento de GTA VI con una gran convención en San Diego. ¡No te lo pierdas!',
    location: 'San Diego, CA',
    organizer: 'Rockstar Games',
  },
  {
    id: 4,
    title: 'Speedrun Marathon',
    type: 'tournament',
    date: '2025-05-10',
    status: 'finished',
    image: '/event4.jpg',
    banner: '/banner4.jpg',
    description:
      'Revive los mejores momentos del maratón de speedrunning',
    location: 'YouTube',
    organizer: 'SpeedRun Community',
  },
];

const eventTypes = [
  { value: 'all', label: 'Todos' },
  { value: 'tournament', label: 'Torneos' },
  { value: 'launch', label: 'Lanzamientos' },
  { value: 'convention', label: 'Convenciones' },
];

const EventsPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredEvents = selectedType === 'all'
    ? events
    : events.filter((event) => event.type === selectedType);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #141E30, #243B55)',
        position: 'relative',
      }}
    >
      <NavigationToolbar navItems={navItems} />

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <Fade in timeout={800}>
          <Typography
            variant="h4"
            sx={{
              color: '#1AE5E5',
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
            }}
          >
            Eventos
          </Typography>
        </Fade>

        {/* Filtros */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
          {eventTypes.map((type) => (
            <Button
              key={type.value}
              variant={selectedType === type.value ? 'contained' : 'outlined'}
              onClick={() => setSelectedType(type.value)}
              sx={{
                bgcolor: selectedType === type.value ? '#1AE5E5' : 'rgba(255,255,255,0.1)',
                color: selectedType === type.value ? '#000' : '#fff',
                border: '1px solid #1AE5E5',
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#1AE5E5',
                  color: '#000',
                  boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
                },
              }}
            >
              {type.label}
            </Button>
          ))}
        </Box>

        {/* Lista de Eventos */}
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', borderRadius: 2, p: 2 }}>
          {filteredEvents.map((event) => (
            <Fade in timeout={1000} key={event.id}>
              <Accordion
                expanded={expanded === `panel${event.id}`}
                onChange={handleChange(`panel${event.id}`)}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  border: '1px solid #1AE5E5',
                  borderRadius: 2,
                  mb: 2,
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
                  },
                  ...(event.status === 'ongoing' && {
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)' },
                      '50%': { boxShadow: '0 0 20px rgba(26, 229, 229, 0.8)' },
                      '100%': { boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)' },
                    },
                  }),
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#1AE5E5' }} />}
                  sx={{ bgcolor: 'rgba(0,0,0,0.3)', borderRadius: 2 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <CardMedia
                      component="img"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        border: '1px solid #1AE5E5',
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 'bold', color: '#1AE5E5' }}
                        >
                          {event.title}
                        </Typography>
                        <Chip
                          label={
                            event.status === 'upcoming'
                              ? 'Próximo'
                              : event.status === 'ongoing'
                              ? 'En curso'
                              : 'Finalizado'
                          }
                          size="small"
                          sx={{
                            bgcolor:
                              event.status === 'upcoming'
                                ? '#2196f3'
                                : event.status === 'ongoing'
                                ? '#4caf50'
                                : '#666',
                            color: '#fff',
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="#ddd">
                        Fecha: {new Date(event.date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="#ddd">
                        Tipo: {eventTypes.find((t) => t.value === event.type)?.label}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2 }}>
                  <CardMedia
                    component="img"
                    image={event.banner}
                    alt={event.title}
                    sx={{
                      height: 150,
                      borderRadius: 2,
                      mb: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                    {event.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 1 }}>
                    <strong>Lugar:</strong> {event.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 2 }}>
                    <strong>Organizador:</strong> {event.organizer}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#1AE5E5',
                        color: '#000',
                        fontWeight: 'bold',
                        '&:hover': { bgcolor: '#11cfcf' },
                      }}
                      onClick={() => {
                        // Lógica para unirse al evento
                      }}
                    >
                      Unirse
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Fade>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EventsPage;
