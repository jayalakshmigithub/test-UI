import React from 'react'
import { Box, Typography ,Button,TextField} from '@mui/material'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';


const projectImages = [project1, project2, project3, project4, project5, project6];
const RecentProjects: React.FC = () => {

 return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), #281b0d)',
        px: 2,
        py: 6,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          fontFamily: 'Poppins',
          fontWeight: 600,
          textAlign: 'center',
          mb: 1,
        }}
      >
        Our Recent Projects
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'white',
          fontFamily: 'Poppins',
          fontWeight: 200,
          textAlign: 'center',
          mb: 5,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting<br />
        Industry.
      </Typography>

      {/* Image Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          mt:'5%'
        }}
      >
        {projectImages.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Project ${index + 1}`}
            sx={{
              width: { xs: '100%', sm: '45%', md: '30%' },
              height: 'auto',
              borderRadius: 3,
              objectFit: 'cover',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        ))}
      </Box>

      {/* See All Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#383838',
            mt:'4%',
            fontFamily: 'Poppins',
            fontSize: '18px',
            color: 'white',
            fontWeight: 500,
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          See All
        </Button>
      </Box>

     
     <Box
  sx={{
    mt: 8,
    pl: { xs: 6, sm: 8, md: 14 },
    pr: {xs: 6, sm: 8, md: 14 }, 
  }}
>
  <Typography
    variant="h4"
    sx={{
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: 600,
      mb: 1,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    Lorem Ipsum
  </Typography>
  <Typography
    variant="body1"
    sx={{
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: 300,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
  </Typography>
</Box>



      {/* newsletter Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 4,
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
          mt: 10,
          mx: 'auto',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h5"
            sx={{ fontFamily: 'Poppins', color: 'white', fontWeight: 600, mb: 1 }}
          >
            Stay in the loop
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: 'Poppins', color: 'white', opacity: 0.8 }}
          >
            Subscribe to receive the latest news and updates about TDA.<br/>
         We promise not to spam you!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: 400,
            borderRadius: '10px',
            overflow: 'hidden',
            bgcolor: 'white',
            height: '45px',
          }}
        >
          <TextField
            placeholder="Enter email address"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                height: '100%',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                px: 2,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e67600',
              color: 'white',
              px: 3,
              borderRadius: 0,
              height: '100%',
              '&:hover': {
                backgroundColor: '#cc5f00',
              },
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );

};

export default RecentProjects
