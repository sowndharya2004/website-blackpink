import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">BLACKPINK</Typography>
              <Typography variant="body1">
              Blackpink is a South Korean girl group formed by YG Entertainment,
               consisting of members Jisoo, Jennie, Rosé, and Lisa. Dubbed the "biggest girl group in the world", they are regarded as 
               the most successful Korean girl group internationally and one of the leaders
                of the Korean Wave. Wikipedia
              Active from: 2016
              Record labels: YG Entertainment, Interscope Records, YGEX, Polydor Records
              Genres: K-pop; EDM; hip hop; trap


              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">MEMBERS</Typography>
              <Typography variant="body1">
              Jisoo- Birth Name: Kim Ji Soo Position:  Visual,Lead Vocalist. 
              Jennie- Birth Name: Jennie Kim  Position: Main Rapper, Lead Vocalist, 
              Rose-Birth Name: Park Chae Young. Position :Main Vocalist,Lead Dancer
              Lisa- Birth Name: Lalisa Manoban .Position :Main Dancer,Lead Rapper


              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;