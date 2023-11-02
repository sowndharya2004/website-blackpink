import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'BornPink',
      description: 'Best album ever',
      image: 'https://apollo-singapore.akamaized.net/v1/files/qlv8v7o0xq7q1-IN/image;s=360x0',
    },
    {
      title: 'World Tour',
      description: 'most successful world tour',
      image: 'https://static.mothership.sg/1/2018/11/collagebpink.jpg',
    },
    {
      title: 'Solo Album',
      description: 'Best Solo albums ever',
      image: 'https://pbs.twimg.com/media/FsPGPIoXoAEqzfK.jpg:large',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://m.media-amazon.com/images/M/MV5BODQ0NTAzNzctMGZjNC00MDBkLWFhZmItZmRmM2FhMmQ0MGM5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLN6pHNxxEA-j1CGIKmaxXfub1OJbs1YPWA&usqp=CAU',
    'https://officiallykmusic.com/wp-content/uploads/2021/09/lisa-lalisa-mv.png',
    'https://i.pinimg.com/736x/0f/63/df/0f63df689a4e2dddaf8713b8391df4e8.jpg'

  ];

  const animeWallpapers = [
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHCSH_08JovVsYQRtgPB7QQcendJNuaK0EA&usqp=CAU',
   'https://m.media-amazon.com/images/M/MV5BNDM5OGIxMTMtYzAyMi00YmZhLThmMTItOTNkZDZmMDNlNWMyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrblAGY_I5oV4d4B19Q0PfaOt6uEMlzdgrWA&usqp=CAU',
   'https://i1.sndcdn.com/artworks-WyDF9m027O06XM3N-0MUQlA-t500x500.jpg',
   'https://i.pinimg.com/originals/99/8d/01/998d0114dcbf97c016ef7b8bcf81e497.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS43yA5r5MwkflmoI67ZV2Yn97QfscDe7fgfnVffrka09AkT4tEX0iwaoQP5V75QwIgCY&usqp=CAU'
    // Add more anime wallpapers here...
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Blackpink Wallpaper
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  BLACKPINK Images 
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            BlackPink Wallpapers
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Wallpaper {index + 1}
                    </Typography>
                    <Typography variant="body2">Beautiful wallpaper.</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;