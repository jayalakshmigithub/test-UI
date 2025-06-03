import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';



const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0e0e0e',
        color: 'white',
        pt: 6,
        pb: 3,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      {/* Top */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
       
        <Box sx={{ flex: '1 1 200px', minWidth: 200 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'Poppins' }}>
            LOGO
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontFamily: 'Poppins' }}>
            @Logo
          </Typography>
        </Box>

        {/* About Us */}
        <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, fontFamily: 'Poppins' }}>
            About us
          </Typography>
          {['Zeux', 'Portfolio', 'Careers', 'Contact us'].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.5, fontFamily: 'Poppins' }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* ContactUs */}
        <Box sx={{ flex: '1 1 200px', minWidth: 200 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, fontFamily: 'Poppins' }}>
            Contact us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>+908 89097 890</Typography>
        </Box>

        {/* Social Media */}
        <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, fontFamily: 'Poppins' }}>
            Follow us
          </Typography>
          <Stack direction="row" spacing={2}>
            {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#ccc',
                  },
                }}
              >
                <Icon fontSize="small" />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Copyright */}
      <Divider sx={{ backgroundColor: 'white', my: 4 }} />
      <Typography
        variant="caption"
        align="center"
        display="block"
        sx={{ fontFamily: 'Poppins', fontSize: { xs: '10px', sm: '12px' } }}
      >
        © 2021 Lorem. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
