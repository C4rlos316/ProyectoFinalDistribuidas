import { Box, Button } from '@mui/material';

const PlatformFilter = ({ platforms, selectedPlatform, onSelect }) => {
  return (
    <Box sx={{ mb: 2 }}>
      {platforms.map((platform) => (
        <Button
          key={platform.value}
          onClick={() => onSelect(platform.value)}
          sx={{
            mx: 0.5,
            color: selectedPlatform === platform.value ? '#fff' : '#fff',
          }}
        >
          {platform.label}
        </Button>
      ))}
    </Box>
  );
};

export default PlatformFilter;