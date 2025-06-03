import React from 'react'
import {Box,Typography,Button,useTheme,useMediaQuery,} from "@mui/material";
import controllerImg from '../assets/joy_stick 1.png'
import unityLogo from '../assets/unityImage.png'
import cryengineLogo from '../assets/cryengine.png'
import unrealLogo from '../assets/unreal.png'


const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isNarrowDesktop = useMediaQuery('(max-width:1300px)'); 

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        fontFamily: 'Poppins',
        padding: isTabletOrSmaller ? '40px 20px' : '80px 60px',
        display: 'flex',
        flexDirection: isTabletOrSmaller ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isTabletOrSmaller ? '600px' : 'auto',
      }}
    >
      {/* Text */}
      <Box
        sx={{
          maxWidth: isTabletOrSmaller ? '100%' : '500px',
          textAlign: 'left',
          marginLeft: isTabletOrSmaller ? 0 : '5%',
          zIndex: 3,
          position: 'relative',
          top: isTabletOrSmaller ? '-20px' : '-40px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'orange',
            mb: 2,
            fontWeight: 600,
            fontSize: isMobile ? '16px' : '18px',
          }}
        >
          3D game Dev
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: 'white',
            lineHeight: 1.2,
            fontWeight: 600,
            fontSize: 'clamp(28px, 6vw, 62px)',
            mb: 2,
          }}
        >
          Work that we
          <br />
          produce for our
          <br />
          clients
        </Typography>

        <Typography
          sx={{
            color: 'white',
            mb: 3,
            fontSize: 'clamp(14px, 2.5vw, 18px)',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the industry's <br />
          standard
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'orange',
            padding: isMobile ? '10px 20px' : '12px 26px',
            borderRadius: '25px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          Get more details
        </Button>
      </Box>

      {/* Image */}
      <Box
        sx={{
          position: isTabletOrSmaller ? 'absolute' : 'relative',
          width: isTabletOrSmaller ? '100%' : '50%',
          height: isTabletOrSmaller ? '300px' : 'auto',
          top: isTabletOrSmaller ? '5%' : '-80px',
          left: isTabletOrSmaller ? 0 : 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: isTabletOrSmaller ? 1 : 2,
          opacity: isTabletOrSmaller ? 0.1 : 1,
          pointerEvents: 'none',
        }}
      >
      
       <Box
  component="img"
  src={controllerImg}
  alt="controller"
  sx={{
    width: isTabletOrSmaller ? '270px' : '420px',
    objectFit: 'contain',
    transition: 'transform 0.6s ease, filter 0.6s ease',
    transform: isNarrowDesktop ? 'translateY(40px) scale(0.95)' : 'translateY(0) scale(1)',
    filter: isNarrowDesktop ? 'brightness(0.6) blur(1px)' : 'none',
    zIndex: 1,
  }}
/>



   
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: isNarrowDesktop ? 0 : 1,
            transform: isNarrowDesktop ? 'scale(0.95)' : 'scale(1)',
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={cryengineLogo}
            alt="CryEngine"
            sx={{
              position: 'absolute',
              top: '25%',
              left: '30%',
              transform: 'translateX(-50%)',
              width: '100px',
            }}
          />
          <Box
            component="img"
            src={unityLogo}
            alt="Unity"
            sx={{
              position: 'absolute',
              top: '55%',
              left: 0,
              right: 60,
              transform: 'translateY(-50%)',
              width: '100px',
            }}
          />
          <Box
            component="img"
            src={unrealLogo}
            alt="Unreal Engine"
            sx={{
              position: 'absolute',
              top: '30%',
              right: '20%',
              transform: 'translateY(-50%)',
              width: '100px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};









export default HeroSection
