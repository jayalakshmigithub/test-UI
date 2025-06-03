import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import image1 from '../assets/for-honor-video-game-new-5k-ih-2048x2048.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/Crysis-2-Shooter-Video-Game-ipad.png'
import image4 from '../assets/image4.png'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import spider from '../assets/marvels-spider.png'
const images =[image1,image2,image3,image4]

const TrendingGames:React.FC= () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box   sx={{
   backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1),  #281b0d)',

    px: 2,
    py: 4,
  }}>
      
      {/* Heading and Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 2 : 0,
          mb: 4,
          maxWidth: '1200px',
          mx: 'auto', 
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: isMobile ? '20px' : '30px',
            fontWeight: 600,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          Currently Trending Games
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2E2E2E',
            color: 'white',
            fontFamily: 'Poppins',
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: isMobile ? '11px' : '16px',
            px: isMobile ? 2 : 3.5,
            py: isMobile ? 0.5 : 1.5,
            minWidth: isMobile ? '80px' : 'auto',
            alignSelf: isMobile ? 'center' : 'auto',
            '&:hover': {
              backgroundColor: '#444',
            },
          }}
        >
          SEE ALL
        </Button>
      </Box>

  
      <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isMobile ? 3 : 4,
    maxWidth: '1200px',
    mx: 'auto',
    px: isMobile ? 2 : 0,
  }}
>
  {images.map((img, index) => (
    <Box
      key={index}
      sx={{
        width: isMobile ? '100%' : isTablet ? '45%' : '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={img}
        alt={`game-${index}`}
        sx={{
          width: '100%',
          height: isMobile ? 'auto' : '34vh',
          borderRadius: '30px',
          objectFit: 'cover',
        }}
      />

      <Typography
        variant="body2"
        sx={{
          color: 'white',
          fontFamily: 'Poppins',
          mt: 1.5,
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <LocalFireDepartmentIcon sx={{ fontSize: isMobile ? '18px' : '20px', color: 'white' }} />
        40 Followers
      </Typography>
    </Box>
  ))}
</Box>
<Typography variant='h4' sx={{fontFamily:'Poppins',color:'white', display:'flex',justifyContent:'center',mt:'8%', lineHeight: 1.8,textAlign:'center'}}>
    Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</Typography>
    <Typography variant='h5' sx={{fontFamily:'Poppins',color:'white',mt:'5%',marginLeft:'10%',fontWeight:'600'}}>Lorem Ipsum</Typography>
    <p style={{color:'white',marginLeft:'10%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
     Lorem Ipsum has been the industry's standard dummy text <br/>ever since the 1500s</p>

<Box sx={{mt:'4%',display:'flex',justifyContent:'center',mb:'35px'}}>
  <Box
          component="img"
          src={spider}
          alt="controller"
          sx={{
            width: isMobile ? '600px' : '1200px',
            height: isMobile ? '180px' : '450px',
            pointerEvents: 'none',
            zIndex: 2,
            borderRadius:'8px'
         
          }}
        />
</Box>
    </Box>
  );
};


export default TrendingGames;
