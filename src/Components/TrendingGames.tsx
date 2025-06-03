import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import image1 from '../assets/for-honor-video-game-new-5k-ih-2048x2048.png'
import image2 from '../assets/W1.jpg'
import image3 from '../assets/w2.jpg'
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
         transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
              },
        
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
        <LocalFireDepartmentIcon sx={{ fontSize: isMobile ? '20px' : '22px', color: 'white' }} />
        40 Followers
      </Typography>
    </Box>
  ))}
</Box>

   <Box
  sx={{
    maxWidth: '1200px',
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    mt: { xs: '12%', md: '8%' },
  }}
>
  
 <Typography
  variant="h4"
  sx={{
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: { xs: '18px', sm: '24px', md: '32px', lg: '36px' },
    lineHeight: { xs: 1.3, sm: 1.5, md: 1.6 },
    mb: { xs: 2, sm: 2.5, md: 3 },
    textAlign: 'center',
    px: { xs: 2, sm: 4 },
  }}
>
  Lorem Ipsum is simply dummy text of the
  <Box component="br" sx={{ display: { xs: 'none', sm: 'inline' } }} />
  printing and typesetting industry.
</Typography>



 
  <Typography
    variant="h6"
    sx={{
      fontFamily: 'Poppins',
      color: 'white',
      fontWeight: 600,
      fontSize: { xs: '16px', sm: '20px', md: '24px' },
      mb: { xs: 1, md: 2 },
      textAlign: { xs: 'center', md: 'left' }, 
    }}
  >
    Lorem Ipsum
  </Typography>

 
  <Typography
    variant="body2"
    sx={{
      fontFamily: 'Poppins',
      color: 'white',
      fontSize: { xs: '13px', sm: '15px', md: '17px' },
      lineHeight: { xs: 1.5, sm: 1.7, md: 1.8 },
      maxWidth: { xs: '100%', md: '600px' },
      mx: { xs: 'auto', md: 0 }, 
      textAlign: { xs: 'center', md: 'left' }, 
      mb: 4,
    }}
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text
    <br />
    ever since the 1500s
  </Typography>
</Box>

<Box sx={{ display: 'flex', justifyContent: 'center', mb: '35px' }}>
  <Box
    component="img"
    src={spider}
    alt="controller"
    sx={{
      width: '100%',
      maxWidth: isMobile ? '90%' : '80%', 
      height: isMobile ? 'auto' : '500px', 
      objectFit: 'cover', 
      pointerEvents: 'none',
      zIndex: 2,
      borderRadius: '8px'
    }}
  />
</Box>


    </Box>
  );
};


export default TrendingGames;
