
'use client';
import { useMemo } from 'react';
import { posts } from '../constants/appConstants';

/**
 * Hook para gestionar el Feed de actividad.
 * Ordena publicaciones por timestamp.
 */
const useActivity = () => {
  const sortedPosts = useMemo(() => {
    return [...posts]
      .filter((post) => post.timestamp)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, []);

  return { posts: sortedPosts };
};

export default useActivity;