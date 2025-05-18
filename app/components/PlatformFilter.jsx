
import React from 'react';
import { Box, Button } from '@mui/material';

const PlatformFilter = ({ platforms, selectedPlatform, onSelect }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
      {platforms.map((platform) => (
        <Button
          key={platform.value}
          variant={selectedPlatform === platform.value ? 'contained' : 'outlined'}
          onClick={() => onSelect(platform.value)}
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
  );
};

export default PlatformFilter;
