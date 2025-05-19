import React from 'react';
import Footer from './Footer';
import { Box, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

const SocialMedia = () => {
  // Array to map through for cleaner code
  const socials = [
    { name: 'Twitter', url: 'https://twitter.com/ygofficialblink' },
    { name: 'YouTube', url: 'https://www.youtube.com/@BLACKPINK' },
    { name: 'Instagram', url: 'https://www.instagram.com/blackpinkofficial/' },
    { name: 'Facebook', url: 'https://www.facebook.com/BLACKPINKOFFICIAL' },
  ];

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        textAlign: 'center',
        bgcolor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        PROFILE
      </Typography>

      {socials.map(({ name, url }) => (
        <Box
          key={name}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginBottom: 2,
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" sx={{ minWidth: 90, textAlign: 'right' }}>
            {name}
          </Typography>
          <SocialIcon url={url} style={{ height: 35, width: 35 }} />
        </Box>
      ))}

      <Footer />
    </Box>
  );
};

export default SocialMedia;
