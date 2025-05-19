'use client';
import { useState } from 'react';

/**
 * Hook para gestionar la lógica de la página de Eventos.
 * Controla el filtro de tipo de evento y el estado de los acordeones.
 */
const useEvents = () => {
  // Estado para el filtro de tipo de evento (all, tournament, launch, convention)
  const [selectedType, setSelectedType] = useState('all');
  
  // Estado para el acordeón expandido (false o panelX)
  const [expanded, setExpanded] = useState(false);

  // Función para manejar el cambio de acordeón
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return {
    selectedType,
    setSelectedType,
    expanded,
    setExpanded,
    handleChange,
  };
};

export default useEvents;
