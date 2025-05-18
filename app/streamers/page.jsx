
'use client';
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    List,
    ListItem,
    Fade,
    TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigationToolbar from '../components/NavigationToolbar';
import { navItems } from '../constants/appConstants';
import { useTheme } from '@mui/material/styles';

const streamers = [
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
        description: 'Explorando mundos épicos en RPGs .',
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
        description: 'Streams relajados de Animal Crossing ',
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

const platforms = [
    { value: 'all', label: 'Todas' },
    { value: 'twitch', label: 'Twitch' },
    { value: 'youtube', label: 'YouTube' },
];

const StreamersPage = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStreamer, setSelectedStreamer] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();

    const handleOpenModal = (streamer) => {
        setSelectedStreamer(streamer);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedStreamer(null);
    };

    const filteredStreamers = streamers.filter((streamer) => {
        const platformMatch = selectedPlatform === 'all' || streamer.platform === selectedPlatform;
        const searchMatch = streamer.name.toLowerCase().includes(searchQuery.toLowerCase());
        return platformMatch && searchMatch;
    });

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
                        Streamers
                    </Typography>
                </Fade>

                {/* Filtros */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
            
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {platforms.map((platform) => (
                            <Button
                                key={platform.value}
                                variant={selectedPlatform === platform.value ? 'contained' : 'outlined'}
                                onClick={() => setSelectedPlatform(platform.value)}
                                sx={{
                                    bgcolor: selectedPlatform === platform.value ? '#1AE5E5' : 'rgba(255,255,255,0.1)',
                                    color: selectedPlatform === platform.value ? '#000' : '#fff',
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
                                {platform.label}
                            </Button>
                        ))}
                    </Box>
                </Box>

                {/* Lista de Streamers */}
                <List sx={{ bgcolor: 'rgba(0,0,0,0.7)', borderRadius: 2, p: 2 }}>
                    {filteredStreamers.map((streamer) => (
                        <Fade in timeout={1000} key={streamer.id}>
                            <ListItem sx={{ p: 0, mb: 2 }}>
                                <Card
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        border: '1px solid #1AE5E5',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
                                            transform: 'scale(1.02)',
                                        },
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOpenModal(streamer)}
                                >
                                    <CardMedia
                                        component="img"
                                        image={streamer.avatar}
                                        alt={streamer.name}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '50%',
                                            m: 2,
                                            border: '2px solid #1AE5E5',
                                        }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 'bold', color: '#1AE5E5' }}
                                            >
                                                {streamer.name}
                                            </Typography>
                                            <Chip
                                                label={streamer.status === 'live' ? 'En vivo' : 'Offline'}
                                                size="small"
                                                sx={{
                                                    bgcolor: streamer.status === 'live' ? '#4caf50' : '#666',
                                                    color: '#fff',
                                                }}
                                            />
                                        </Box>
                                        <Typography variant="body2" color="#ddd">
                                            Plataforma: {platforms.find(p => p.value === streamer.platform)?.label}
                                        </Typography>
                                    </CardContent>

                                    {/* 
                                    <Button
                                        variant="contained"
                                        sx={{
                                            m: 2,
                                            bgcolor: '#1AE5E5',
                                            color: '#000',
                                            fontWeight: 'bold',
                                            '&:hover': { bgcolor: '#11cfcf' },
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // Lógica para seguir al streamer
                                        }}
                                    >
                                        Seguir
                                    </Button> */}

                                </Card>
                            </ListItem>
                        </Fade>
                    ))}
                </List>
            </Box>

            {/* Modal de Detalles del Streamer */}
            {selectedStreamer && (
                <Dialog
                    open={openModal}
                    onClose={handleCloseModal}
                    maxWidth="sm"
                    fullWidth
                    sx={{
                        '& .MuiDialog-paper': {
                            background: 'linear-gradient(to right, #1e1e1e, #2a2a2a)',
                            color: '#fff',
                            borderRadius: 3,
                          //  boxShadow: '0 0 20px rgba(26, 229, 229, 0.5)',
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            color: '#1AE5E5',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {selectedStreamer.name}
                        <IconButton onClick={handleCloseModal} sx={{ color: '#fff' }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <CardMedia
                            component="img"
                            image={selectedStreamer.banner}
                            alt={selectedStreamer.name}
                            sx={{
                                height: 150,
                                borderRadius: 2,
                                mb: 2,
                                objectFit: 'cover',
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <CardMedia
                                component="img"
                                image={selectedStreamer.avatar}
                                alt={selectedStreamer.name}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    border: '2px solid #1AE5E5',
                                }}
                            />
                            <Chip
                                label={selectedStreamer.status === 'live' ? 'En vivo' : 'Offline'}
                                sx={{
                                    bgcolor: selectedStreamer.status === 'live' ? '#4caf50' : '#666',
                                    color: '#fff',
                                }}
                            />
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {selectedStreamer.description}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Plataforma:</strong> {platforms.find(p => p.value === selectedStreamer.platform)?.label}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Seguidores:</strong> {selectedStreamer.followers.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Vistas promedio:</strong> {selectedStreamer.averageViews.toLocaleString()}
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ px: 3, pb: 2 }}>
                        <Button onClick={handleCloseModal} variant="outlined" sx={{ color: '#1AE5E5', borderColor: '#1AE5E5' }}>
                            Cerrar
                        </Button>
                        <Button
                            variant="contained"
                            href={selectedStreamer.channelUrl}
                            target="_blank"
                            sx={{
                                bgcolor: '#1AE5E5',
                                color: '#000',
                                fontWeight: 'bold',
                                '&:hover': { bgcolor: '#11cfcf' },
                            }}
                        >
                            Ver Canal
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

export default StreamersPage;
