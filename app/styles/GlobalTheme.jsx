
'use client';

import { createTheme } from '@mui/material';

// Tema global para la aplicación con estilo neón/gamer
export const theme = createTheme({
  // Paleta de colores
  palette: {
    primary: {
      main: '#1AE5E5', // Acento neón (botones, bordes, texto destacado)
      dark: '#11CFCF', // Hover de botones
    },
    secondary: {
      main: '#4CAF50', // Verde para estado "En vivo"
      dark: '#666', // Gris para estado "Offline"
    },
    text: {
      primary: '#FFFFFF', // Texto principal (títulos, contenido)
      secondary: '#DDDDDD', // Texto secundario (descripciones)
      disabled: '#666666', // Texto deshabilitado
    },
    background: {
      default: '#141E30', // Fondo base (gradiente inicio)
      paper: '#243B55', // Fondo secundario (gradiente fin)
      container: 'rgba(0, 0, 0, 0.7)', // Fondo de listas/contenedores
      card: 'rgba(255, 255, 255, 0.1)', // Fondo de tarjetas/acordeones
      modal: '#1E1E1E', // Fondo modal (gradiente inicio)
    },
    status: {
      live: '#4CAF50', // Chip "En vivo"
      offline: '#666666', // Chip "Offline"
      highReplies: '#2196F3', // Chip para muchas respuestas
    },
    action: {
      disabledBackground: 'rgba(255, 255, 255, 0.3)',
      disabled: '#666666',
    },
  },

  // Tipografía
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', //
    h4: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadow: '0 0 10px rgba(26, 229, 229, 0.5)', // Sombra neón
    },
    h6: {
      fontWeight: 'bold',
      color: '#1AE5E5',
    },
    body1: {
      color: '#FFFFFF',
    },
    body2: {
      color: '#DDDDDD',
    },
  },

  // Sombras personalizadas
  shadows: [
    'none',
    '0 0 10px rgba(26, 229, 229, 0.5)', // Sombra neón suave
    '0 0 20px rgba(26, 229, 229, 0.5)', // Sombra neón intensa (hover)
    ...Array(22).fill('none'), // Completar el array requerido por MUI
  ],

  // Gradientes personalizados (no soportados directamente por palette)
  gradients: {
    page: 'linear-gradient(to bottom, #141E30, #243B55)', // Fondo de página
    modal: 'linear-gradient(to right, #1E1E1E, #2A2A2A)', // Fondo de modal
  },

  // Estilos predeterminados para componentes
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: 4,
          '&:hover': {
            boxShadow: '0 0 10px rgba(26, 229, 229, 0.5)',
          },
        },
        containedPrimary: {
          backgroundColor: '#1AE5E5',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#11CFCF',
          },
        },
        outlinedPrimary: {
          borderColor: '#1AE5E5',
          color: '#1AE5E5',
          '&:hover': {
            backgroundColor: 'rgba(26, 229, 229, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: '#FFFFFF',
            color: '#000000',
            borderRadius: 4,
            '&:before': {
              borderBottomColor: '#1AE5E5',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #1AE5E5',
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid #1AE5E5',
          borderRadius: 8,
          '&:before': { display: 'none' },
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(to right, #1E1E1E, #2A2A2A)',
          color: '#FFFFFF',
          borderRadius: 8,
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});
