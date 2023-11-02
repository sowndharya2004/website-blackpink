import React from 'react'
import Footer from './Footer'
import { Box } from '@mui/material'
import { SocialIcon } from 'react-social-icons'



const SocialMedia = () => {
  
  return (
    <div><h1>PROFILE</h1>
    <h4> Twitter</h4>  <SocialIcon url="https://twitter.com/ygofficialblink" />
    <h4>YouTube</h4>   <SocialIcon url="https://www.youtube.com/@BLACKPINK" />
    <h4>Instagram</h4> <SocialIcon url="https://www.instagram.com/blackpinkofficial/" />
    <h4>FaceBook</h4>  <SocialIcon url="https://www.facebook.com/BLACKPINKOFFICIAL" />
    
    
      <div>
      <Box>
      {/* Your Home component content */}
      <Footer /> {/* Include the Footer component */}
    </Box>

      </div>
    </div>
    
  )
}

export default SocialMedia
