
 export const gamesData = [
    { id: 1, name: 'Cyberpunk 2077', genres: 'Action, Adventure, Role-Playing', image: '/imgJuego.jpg', platform: 'pc', year: '2020 - 2021', description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.', rating: 4.5, reviews: 1000 },
    { id: 2, name: 'Dying Light 2', genres: 'Action, Adventure, Horror, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation', year: '2022', description: 'Survive in a post-apocalyptic world filled with zombies.', rating: 4.0, reviews: 800 },
    { id: 3, name: 'Elden Ring', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'xbox', year: '2022', description: 'An epic fantasy RPG set in a vast open world.', rating: 4.8, reviews: 1200 },
    { id: 4, name: 'Halo Infinite', genres: 'First-Person Shooter', image: 'https://via.placeholder.com/150', platform: 'xbox', year: '2021', description: 'Master Chief returns in an epic sci-fi shooter.', rating: 4.2, reviews: 900 },
    { id: 5, name: 'Horizon Forbidden West', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation', year: '2022', description: 'Explore a lush post-apocalyptic world with Aloy.', rating: 4.6, reviews: 1100 },
    { id: 6, name: 'The Legend of Zelda: Breath of the Wild 2', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'nintendo', year: '2023', description: 'A new adventure in the Zelda universe.', rating: 4.7, reviews: 950 },
    { id: 7, name: 'Overwatch 2', genres: 'First-Person Shooter, Hero Shooter', image: 'https://via.placeholder.com/150', platform: 'pc', year: '2022', description: 'Team-based shooter with new heroes and maps.', rating: 4.3, reviews: 700 },
    { id: 8, name: 'Suicide Squad: Kill the Justice League', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'all', year: '2023', description: 'Play as the Suicide Squad to take down the Justice League.', rating: 4.1, reviews: 600 },
    { id: 9, name: 'Test Game', genres: 'Test Genre', image: 'https://via.placeholder.com/150', platform: 'pc', year: '2024', description: 'A test game for development purposes.', rating: 3.5, reviews: 200 },
  ];

// Elementos de la barra de navegación
// Elementos de la barra de navegación
export const navItems = [
  { label: 'Home Page', path: '/homepage' },
  { label: 'Forum', path: '/forum' },
  { label: 'Actividad', path: '/activity' },
  { label: 'Mini-juego', path: '/minigame' },
];

// Plataformas para filtros
export const platforms = [
  { label: 'All Platforms', value: 'all' },
  { label: 'PC', value: 'pc' },
  { label: 'Xbox', value: 'xbox' },
  { label: 'PlayStation', value: 'playstation' },
  { label: 'Nintendo', value: 'nintendo' },
];

// Tipos de eventos para filtros
export const eventTypes = [
  { value: 'all', label: 'Todos' },
  { value: 'tournament', label: 'Torneos' },
  { value: 'launch', label: 'Lanzamientos' },
  { value: 'convention', label: 'Convenciones' },
];

// Publicaciones para el Feed (fusión de hilos y eventos)
export const posts = [
  {
    id: 1,
    type: 'post',
    author: 'Spriu',
    text: '¡Acabo de ganar mi primera partida en Valorant! ¿Alguien quiere unirse?',
    timestamp: '2025-05-19T08:00:00Z',
  },
  {
    id: 2,
    type: 'image',
    author: 'CasualGamer',
    image: '/smashbros.jpg',
    description: 'Mi setup para el torneo de Smash Bros, ¿qué les parece?',
    timestamp: '2025-05-18T16:00:00Z',
  },
  {
    id: 3,
    type: 'event',
    author: 'Spriu',
    title: 'Mesa de dialogo FI',
    eventType: 'tournament',
    description: '¡Únete al torneo anual de Valorant! Inscripciones abiertas hasta el 25 de mayo.',
    image: '/imgJuego.jpg',
    location: 'Online',
    organizer: 'Spriu',
    timestamp: '2025-05-18T10:00:00Z',
  },
  {
    id: 4,
    type: 'post',
    author: 'Don Rata',
    text: '¿Cuál es el mejor RPG de 2025? Necesito recomendaciones.',
    timestamp: '2025-05-17T14:00:00Z',
  },
  {
    id: 5,
    type: 'event',
    author: 'GameDev',
    title: 'Lanzamiento de CyberRPG',
    eventType: 'launch',
    description: 'Nuevo RPG futurista con gráficos increíbles.',
    image: '/cyberrpg.jpg',
    location: 'Global',
    organizer: 'GameDev',
    timestamp: '2025-05-17T12:00:00Z',
  },
];
// Hilos iniciales para el foro
export const initialThreads = [
  {
    id: 1,
    title: '¿Cuál es el mejor juego de 2025?',
    description: 'Quiero recomendaciones de juegos nuevos, especialmente RPGs y shooters.',
    author: 'Spriu',
    replies: [
      { user: 'RPGQueen', comment: 'Elden Ring 2' },
      { user: 'CasualGamer', comment: 'Clash royale es el mejor' },
    ],
    replyCount: 2,
    image: '/thread1.jpg', // Imagen para el feed
    timestamp: '2025-05-19T08:00:00Z',
  },
  {
    id: 2,
    title: 'Torneo de Smash Bros',
    description: '¿Quién se apunta al torneo este fin de semana?',
    author: 'CasualGamer',
    replies: [{ user: 'Spriu', comment: 'Yo estoy dentro!' }],
    replyCount: 1,
    image: '/smashbros.jpg',
    timestamp: '2025-05-18T16:00:00Z',
  },
];

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
    timestamp: '2025-05-19T09:00:00Z',
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
    timestamp: '2025-05-18T12:00:00Z',
  },
];


//////TRivia/////////
// Preguntas para la trivia
export const triviaQuestions = [
  {
    id: 1,
    question: '¿Qué consola lanzó Sony en 2020?',
    options: ['PlayStation 4', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    correctAnswer: 'PlayStation 5',
  },
  {
    id: 2,
    question: '¿Qué juego ganó el GOTY en The Game Awards 2023?',
    options: ['Elden Ring', 'God of War Ragnarök', 'Baldur’s Gate 3', 'Stray'],
    correctAnswer: 'Baldur’s Gate 3',
  },
  {
    id: 3,
    question: '¿Qué empresa desarrolló The Legend of Zelda: Breath of the Wild?',
    options: ['Sony', 'Nintendo', 'Microsoft', 'Square Enix'],
    correctAnswer: 'Nintendo',
  },
  {
    id: 4,
    question: '¿Cuál es el nombre del protagonista de The Witcher 3?',
    options: ['Ciri', 'Yennefer', 'Geralt de Rivia', 'Vesemir'],
    correctAnswer: 'Geralt de Rivia',
  },
  {
    id: 5,
    question: '¿Qué juego popularizó el género Battle Royale?',
    options: ['Fortnite', 'PUBG', 'Apex Legends', 'Call of Duty: Warzone'],
    correctAnswer: 'PUBG',
  },
  {
    id: 6,
    question: '¿Qué consola es conocida por el control Joy-Con?',
    options: ['Xbox One', 'PlayStation 4', 'Nintendo Switch', 'Wii U'],
    correctAnswer: 'Nintendo Switch',
  },
  {
    id: 7,
    question: '¿Qué estudio desarrolló Cyberpunk 2077?',
    options: ['CD Projekt Red', 'Bethesda', 'Rockstar Games', 'Ubisoft'],
    correctAnswer: 'CD Projekt Red',
  },
  {
    id: 8,
    question: '¿Cuál es el nombre del mapa principal de Among Us?',
    options: ['The Skeld', 'Mira HQ', 'Polus', 'Airship'],
    correctAnswer: 'The Skeld',
  },
  {
    id: 9,
    question: '¿Qué juego tiene un personaje llamado Master Chief?',
    options: ['Gears of War', 'Halo', 'Destiny', 'Doom'],
    correctAnswer: 'Halo',
  },
  {
    id: 10,
    question: '¿Qué empresa creó la saga Grand Theft Auto?',
    options: ['EA', 'Rockstar Games', 'Activision', 'Square Enix'],
    correctAnswer: 'Rockstar Games',
  },
  {
    id: 11,
    question: '¿Qué juego de 2018 presentó a Kratos y su hijo Atreus?',
    options: ['God of War', 'Horizon Zero Dawn', 'Spider-Man', 'Red Dead Redemption 2'],
    correctAnswer: 'God of War',
  },
  {
    id: 12,
    question: '¿Qué consola lanzó Microsoft en 2001?',
    options: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X'],
    correctAnswer: 'Xbox',
  },
  {
    id: 13,
    question: '¿Qué juego de 2020 tiene un modo “Ghosts ‘n Goblins”?',
    options: ['Animal Crossing: New Horizons', 'DOOM Eternal', 'Hades', 'Cyberpunk 2077'],
    correctAnswer: 'DOOM Eternal',
  },
  {
    id: 14,
    question: '¿Qué personaje es la mascota de Sega?',
    options: ['Mario', 'Sonic', 'Crash Bandicoot', 'Spyro'],
    correctAnswer: 'Sonic',
  },
  {
    id: 15,
    question: '¿Qué juego de 2017 introdujo el “Hylian Shield”?',
    options: ['The Legend of Zelda: Breath of the Wild', 'Super Mario Odyssey', 'Horizon Zero Dawn', 'Persona 5'],
    correctAnswer: 'The Legend of Zelda: Breath of the Wild',
  },
  {
    id: 16,
    question: '¿Qué empresa publica la saga FIFA?',
    options: ['EA', 'Konami', 'Ubisoft', '2K Games'],
    correctAnswer: 'EA',
  },
  {
    id: 17,
    question: '¿Qué juego de 2019 es un “soulslike” de Star Wars?',
    options: ['Star Wars Jedi: Fallen Order', 'Star Wars Battlefront II', 'Sekiro: Shadows Die Twice', 'Death Stranding'],
    correctAnswer: 'Star Wars Jedi: Fallen Order',
  },
  {
    id: 18,
    question: '¿Qué consola es conocida por el “GameCube”?',
    options: ['Sony', 'Nintendo', 'Microsoft', 'Sega'],
    correctAnswer: 'Nintendo',
  },
  {
    id: 19,
    question: '¿Qué juego de 2013 presentó a Ellie y Joel?',
    options: ['The Last of Us', 'Bioshock Infinite', 'GTA V', 'Tomb Raider'],
    correctAnswer: 'The Last of Us',
  },
  {
    id: 20,
    question: '¿Qué género define a League of Legends?',
    options: ['MOBA', 'FPS', 'RPG', 'RTS'],
    correctAnswer: 'MOBA',
  },
  {
    id: 21,
    question: '¿Qué empresa desarrolló Overwatch?',
    options: ['Blizzard', 'Valve', 'Riot Games', 'Epic Games'],
    correctAnswer: 'Blizzard',
  },
  {
    id: 22,
    question: '¿Qué juego de 2021 es un “roguelike” con dioses griegos?',
    options: ['Hades', 'Returnal', 'Kena: Bridge of Spirits', 'Ratchet & Clank: Rift Apart'],
    correctAnswer: 'Hades',
  },
  {
    id: 23,
    question: '¿Qué consola lanzó Sony en 1994?',
    options: ['PlayStation', 'PlayStation 2', 'Sega Saturn', 'Nintendo 64'],
    correctAnswer: 'PlayStation',
  },
  {
    id: 24,
    question: '¿Qué juego tiene un modo “Creative” para construir?',
    options: ['Minecraft', 'Roblox', 'Fortnite', 'Terraria'],
    correctAnswer: 'Minecraft',
  },
  {
    id: 25,
    question: '¿Qué personaje es conocido como “Vault Boy”?',
    options: ['Fallout', 'Borderlands', 'DOOM', 'Wolfenstein'],
    correctAnswer: 'Fallout',
  },
  {
    id: 26,
    question: '¿Qué estudio creó la saga Dark Souls?',
    options: ['FromSoftware', 'Capcom', 'Bandai Namco', 'Square Enix'],
    correctAnswer: 'FromSoftware',
  },
  {
    id: 27,
    question: '¿Qué juego de 2015 presentó a Ciri?',
    options: ['The Witcher 3: Wild Hunt', 'Bloodborne', 'Metal Gear Solid V', 'Fallout 4'],
    correctAnswer: 'The Witcher 3: Wild Hunt',
  },
  {
    id: 28,
    question: '¿Qué consola es conocida por el “Wii Remote”?',
    options: ['Nintendo Wii', 'Xbox 360', 'PlayStation 3', 'GameCube'],
    correctAnswer: 'Nintendo Wii',
  },
  {
    id: 29,
    question: '¿Qué juego de 2018 es un “battle royale” con superhéroes?',
    options: ['Fortnite', 'Apex Legends', 'PUBG', 'Call of Duty: Blackout'],
    correctAnswer: 'Apex Legends',
  },
  {
    id: 30,
    question: '¿Qué empresa creó la saga Assassin’s Creed?',
    options: ['Ubisoft', 'EA', 'Rockstar Games', 'Bethesda'],
    correctAnswer: 'Ubisoft',
  },
];