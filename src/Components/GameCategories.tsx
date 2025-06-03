
import React,{useEffect} from 'react'
import {Box,Typography,useTheme,useMediaQuery} from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile', 
  });
}, []);
  return (


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
  sx={{
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: 600,
    mb: 2,
    fontSize: { xs: '20px', sm: '28px', md: '36px' },
    lineHeight: { xs: '28px', sm: '36px', md: '44px' },
    px: { xs: 1, sm: 3 },
  }}
>
  Lorem Ipsum is simply dummy text of the printing  <br /> and typesetting industry.
</Typography>

{/* Subheading */}
<Typography
  sx={{
    color: 'white',
    fontFamily: 'Poppins',
    maxWidth: 700,
    mx: 'auto',
    mb: 6,
    fontSize: { xs: '14px', sm: '16px', md: '18px' },
    lineHeight: { xs: '20px', sm: '24px', md: '28px' },
    px: { xs: 1, sm: 2 },
  }}
>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
    data-aos="flip-left" 
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
    <ArrowForwardIcon sx={{ color: 'orange', cursor: 'pointer' }} />
  </Box>
))}

  </Box>
</Box>

  


  )
}

export default GameCategories
