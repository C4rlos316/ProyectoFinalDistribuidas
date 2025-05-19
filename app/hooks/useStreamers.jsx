
'use client';
import { useState } from 'react';
import { streamers } from '../constants/appConstants';

/**
 * Hook para gestionar la lógica de la página de Streamers.
 * Controla los filtros de plataforma, la búsqueda, y el streamer seleccionado.
 */
const useStreamers = () => {
  // Estado para el filtro de plataforma (all, twitch, youtube)
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  
  // Estado para la búsqueda por nombre
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estado para el streamer seleccionado en el modal
  const [selectedStreamer, setSelectedStreamer] = useState(null);

  // Filtra streamers por plataforma y búsqueda
  const filteredStreamers = streamers.filter((streamer) => {
    const platformMatch = selectedPlatform === 'all' || streamer.platform === selectedPlatform;
    const searchMatch = streamer.name.toLowerCase().includes(searchQuery.toLowerCase());
    return platformMatch && searchMatch;
  });

  return {
    selectedPlatform,
    setSelectedPlatform,
    searchQuery,
    setSearchQuery,
    selectedStreamer,
    setSelectedStreamer,
    filteredStreamers,
  };
};

export default useStreamers;
