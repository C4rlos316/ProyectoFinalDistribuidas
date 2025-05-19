
'use client';
import { useState } from 'react';
import { initialThreads } from '../constants/appConstants';

/**
 * Hook para gestionar la lógica de la página de Foros.
 * Controla los hilos, el estado del acordeón, y la creación de nuevos hilos.
 */
const useForum = () => {
  // Estado para la lista de hilos
  const [threads, setThreads] = useState(initialThreads);
  
  // Estado para el título y descripción del nuevo hilo
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadDescription, setNewThreadDescription] = useState('');
  
  // Estado para el acordeón expandido (false o panelX)
  const [expanded, setExpanded] = useState(false);

  // Maneja el cambio de acordeón
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Crea un nuevo hilo
  const handleCreateThread = () => {
    if (newThreadTitle && newThreadDescription) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        description: newThreadDescription,
        author: 'UsuarioActual', // 
        replies: [],
        replyCount: 0,
      };
      setThreads([newThread, ...threads]);
      setNewThreadTitle('');
      setNewThreadDescription('');
      return true; // éxito para cerrar el modal
    }
    return false; // Indica fallo
  };

  return {
    threads,
    setThreads,
    newThreadTitle,
    setNewThreadTitle,
    newThreadDescription,
    setNewThreadDescription,
    expanded,
    setExpanded,
    handleChange,
    handleCreateThread,
  };
};

export default useForum;
