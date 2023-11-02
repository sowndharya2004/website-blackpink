import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter,YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#808080"
      color="#C0C0C0"
      opacity="1px"
      padding="15px"
      position="fixed"
      bottom="0"
      width="100%"
      left="0" /* Add left: 0 to ensure it spans the entire width */
      right="0" /* Add right: 0 to ensure it spans the entire width */
      zIndex="999"
    >
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <YouTube />
      </IconButton>
      <Typography variant="body2" component="span" marginLeft="10px">
        blackpink &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;