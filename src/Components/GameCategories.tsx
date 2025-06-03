
import React from 'react'
import {Box,Typography,useTheme,useMediaQuery} from "@mui/material";
import background from '../assets/background.png'
import mobilegame from '../assets/phoneimage.png'
import pcgame from '../assets/computer-lab-icon.png'
import ps4 from '../assets/ps4.png'
import ARVR from '../assets/arVr.png'
import ARsolutions from '../assets/arsolutions.png'
import modeling from '../assets/icon_scale.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const services = [
  { label: 'Mobile Game Development', icon: mobilegame },
  { label: 'PC Game Development', icon: pcgame },
  { label: 'PS4 Game Development', icon: ps4 },
  { label: 'AR/VR Solutions', icon: ARVR },
  { label: 'AR/ VR design', icon: ARsolutions },
  { label: '3D Modelings', icon: modeling },
];

const GameCategories:React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
//  <Box
//   sx={{
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.75)), url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     minHeight: '100vh',
//   }}
// >
//     <Typography variant='h4' sx={{fontFamily:'Poppins',color:'white', display:'flex',justifyContent:'center', lineHeight: 1.8,textAlign:'center'}}>
//     Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</Typography>
//      <p style={{color:'white',display:'flex',justifyContent:'center',textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//      Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>
// arVr.png

// import ARsolutions from '../assets/arsolutions.png'
// import modeling from '../assets/'     <Box
//           component="img"
//           src={mobilegame}
//           alt="controller"
//           sx={{
//             width: isMobile ? '60px' : '60px',
//             height: isMobile ? '60px' : '60px',
//             pointerEvents: 'none',
//             zIndex: 2,
//             borderRadius:'8px'
         
//           }}
         
//         />
// </Box>

<Box
  sx={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    py: 8,
    px: 3,
    textAlign: 'center',
  }}
>
  {/* Heading */}
  <Typography
    variant={isMobile ? 'h5' : 'h4'}
    sx={{ color: 'white', fontFamily: 'Poppins', mb: 2 }}
  >
    Lorem Ipsum is simply dummy text of the <br />
    printing and typesetting industry.
  </Typography>

  {/* Subheading */}
  <Typography
    variant="body1"
    sx={{
      color: 'white',
      maxWidth: 700,
      mx: 'auto',
      mb: 6,
      fontFamily: 'Poppins',
      fontSize: isMobile ? '14px' : '16px',
    }}
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </Typography>


  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 15,
      mt:'10%'
    }}
  >
    {services.map((item, index) => (
      <Box
        key={index}
        sx={{
          width: { xs: '45%', sm: '30%', md: '14%' }, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          fontFamily: 'Poppins',
        }}
      >
        <Box
          component="img"
          src={item.icon}
          alt={item.label}
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: 1.5,
            mb: 2,
          }}
        />
        <Typography sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
          {item.label}
        </Typography>
        <ArrowForwardIcon sx={{ color: 'orange' ,cursor:'pointer'}} />
      </Box>
    ))}
  </Box>
</Box>

  


  )
}

export default GameCategories
