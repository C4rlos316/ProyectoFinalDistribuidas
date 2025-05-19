
// Elementos de la barra de navegación
export const navItems = [
  { label: 'Home Page', path: '/homepage' },
  { label: 'Streamers', path: '/streamers' },
  { label: 'Events', path: '/events' },
  { label: 'Forum', path: '/forum' },
];

// Plataformas para filtros
export const platforms = [
  { label: 'All Platforms', value: 'all' },
  { label: 'PC', value: 'pc' },
  { label: 'Xbox', value: 'xbox' },
  { label: 'PlayStation', value: 'playstation' },
  { label: 'Nintendo', value: 'nintendo' },
];


///////////////////////////////Eventos///////////////////////////////
// Tipos de eventos para filtros
export const eventTypes = [
  { value: 'all', label: 'Todos' },
  { value: 'tournament', label: 'Torneos' },
  { value: 'launch', label: 'Lanzamientos' },
  { value: 'convention', label: 'Convenciones' },
];

// Lista de eventos
export const events = [
  {
    id: 1,
    title: 'Mesa de dialogo FI ',
    type: 'tournament',
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
    status: 'finished',
    image: '/event4.jpg',
    banner: '/banner4.jpg',
    description:
      'Revive los mejores momentos del maratón de speedrunning',
    location: 'YouTube',
    organizer: 'SpeedRun Community',
  },
];
///////////////////////////////Eventos///////////////////////////////


///////////////////////////////Foro///////////////////////////////

// Hilos iniciales para el foro
export const initialThreads = [
  {
    id: 1,
    title: '¿Cuál es el mejor juego de 2025?',
    description: 'Quiero recomendaciones de juegos nuevos, especialmente RPGs y shooters.',
    author: 'Spriu',
    replies: [
      { user: 'RPGQueen', comment: 'Elden Ring 2' },
      { user: 'CasualGamer', comment: 'Clash royale es el mejor ' },
    ],
    replyCount: 2,
  },
  {
    id: 2,
    title: 'Problemas con el lag',
    description: 'Alguien sabe cómo optimizar la conexión para reducir el ping?',
    author: 'SpeedRunnerX',
    replies: [
      { user: 'PixelMaster', comment: 'Prueba cambiar el DNS a Cloudflare (1.1.1.1).' },
    ],
    replyCount: 1,
  },
  {
    id: 3,
    title: 'Torneo de Smash Bros este fin de semana',
    description: '¿Quién juega ? Es online y hay premios.',
    author: 'CasualGamer',
    replies: [
      { user: 'RPGQueen', comment: '¿Dónde me registro?' },
      { user: 'SpeedRunnerX', comment: 'Suena divertido' },
    ],
    replyCount: 2,
  },
];


/////////////////////////////////Foro///////////////////////////////




/////////////77STREAMERS///////////////////////

// Plataformas para filtros de streamers
export const streamerPlatforms = [
  { value: 'all', label: 'Todas' },
  { value: 'twitch', label: 'Twitch' },
  { value: 'youtube', label: 'YouTube' },
];

// Lista de streamers
export const streamers = [
  {
    id: 1,
    name: 'Spriu',
    platform: 'twitch',
    category: 'fps',
    avatar: '/imgJuego.jpg',
    banner: '/imgLogin.jpg',
    status: 'live',
    followers: 12000,
    averageViews: 5000,
    description: '¡Juegos tipo Call of Duty y Valorant!',
    channelUrl: 'https://twitch.tv/pixelmaster',
  },
  {
    id: 2,
    name: 'Don Rata',
    platform: 'youtube',
    category: 'rpg',
    avatar: '/streamer2.jpg',
    banner: '/banner2.jpg',
    status: 'offline',
    followers: 8000,
    averageViews: 3000,
    description: 'Explorando mundos épicos en RPGs.',
    channelUrl: 'https://youtube.com/rpgqueen',
  },
  {
    id: 3,
    name: 'Gamer',
    platform: 'twitch',
    category: 'casual',
    avatar: '/streamer3.jpg',
    banner: '/banner3.jpg',
    status: 'live',
    followers: 5000,
    averageViews: 2000,
    description: 'Streams relajados de Animal Crossing.',
    channelUrl: 'https://twitch.tv/casualgamer',
  },
  {
    id: 4,
    name: 'Speed',
    platform: 'twitch',
    category: 'speedrun',
    avatar: '/streamer4.jpg',
    banner: '/banner4.jpg',
    status: 'offline',
    followers: 15000,
    averageViews: 7000,
    description: 'Récords mundiales.',
    channelUrl: '',
  },
];