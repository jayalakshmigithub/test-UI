import React from 'react'
import {Box,Typography,Button,useTheme,useMediaQuery,} from "@mui/material";
import controllerImg from '../assets/joy_stick 1.png'
import unityLogo from '../assets/unity-game-logo.png'
import cryengineLogo from '../assets/cryengine-logo.png'
import unrealLogo from '../assets/unreal-logo1.png'

// const HeroSection:React.FC = () => {
// return (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         fontFamily: 'Poppins',
//         padding: '80px 40px',
//         minHeight: 'auto',
//         display: 'flex',
//         alignItems: 'center',
//         textAlign:'start'

//       }}
//     >
//       <Box sx={{ maxWidth: '500px' , marginLeft:'5%'}}>
//         <Typography variant="h6" sx={{ color: 'orange', marginBottom: '10px',fontFamily:'Poppins' ,fontWeight:'600'}}>
//           3D game Dev
//         </Typography>
//         <Typography
//           variant="h2"
//           sx={{ color: 'white', marginBottom: '20px', lineHeight: 1.2 ,fontFamily:'Poppins',fontWeight:'600'}}
//         >
//           work that we 
//           <br/>
//           produce for our
//           <br/>
//            clients
//         </Typography>
//         <Typography
//           sx={{ color: 'white', marginBottom: '30px', fontSize: '16px' ,fontFamily:'Poppins'}}
//         >
//           Lorem Ipsum is simply dummy text of the printing and
//           <br/>
//            typesetting industry.
//           Lorem Ipsum has been the industry's 
//           <br/>
//           standard
//         </Typography>
//         <Button variant="contained" sx={{ backgroundColor: 'orange',marginTop:'15px',padding:'14px',fontFamily:'Poppins' ,borderRadius:'25px',border:'none',fontSize:'12px',fontWeight:600}}>
//           Get more details
//         </Button>
//       </Box>
//     </Box>
//   );
// }



// const HeroSection: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         fontFamily: 'Poppins',
//         padding: isMobile ? '50px 20px' : '80px 60px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-start', 
        
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: isMobile ? '100%' : '500px',
//           textAlign: 'left', 
//         marginLeft: isMobile ? '0' : '5%',
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             color: 'orange',
//             marginBottom: '10px',
//             fontWeight: 600,
//           }}
//         >
//           3D game Dev
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             color: 'white',
//             marginBottom: '20px',
//             lineHeight: 1.2,
//             fontWeight: 600,
//             fontSize: isMobile ? '30px' : '60px',
//           }}
//         >
//           Work that we
//           <br />
//           produce for our
//           <br />
//           clients
//         </Typography>

//         <Typography
//           sx={{
//             color: 'white',
//             marginBottom: '30px',
//             fontSize: isMobile ? '14px' : '16px',
//           }}
//         >
//           Lorem Ipsum is simply dummy text of the printing and <br/> 
//           typesetting industry. Lorem Ipsum has been the industry's <br/>
//           standard
//         </Typography>

//        <Button
//   variant="contained"
//   sx={{
//     backgroundColor: 'orange',
//     padding: isMobile ? '10px 20px' : '12px 26px',
//     borderRadius: '25px',
//     fontSize: isMobile ? '12px' : '14px',
//     fontWeight: 600,
//     textTransform: 'none',
//   }}
// >
//   Get more details
// </Button>

//       </Box>
//     </Box>
//   );
// };

// const HeroSection: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


//   return (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         fontFamily: 'Poppins',
//         padding: isMobile ? '50px 20px' : '80px 60px',
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'relative',
//       }}
//     >
//       {/* Left Text Content */}
//       <Box
//         sx={{
//           maxWidth: isMobile ? '100%' : '500px',
//           textAlign: 'left',
//           marginLeft: isMobile ? '0' : '5%',
//         }}
//       >
//         <Typography variant="h6" sx={{ color: 'orange', marginBottom: '10px', fontWeight: 600 }}>
//           3D game Dev
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             color: 'white',
//             marginBottom: '20px',
//             lineHeight: 1.2,
//             fontWeight: 600,
//             fontSize: isMobile ? '30px' : '60px',
//           }}
//         >
//           Work that we
//           <br />
//           produce for our
//           <br />
//           clients
//         </Typography>

//         <Typography
//           sx={{
//             color: 'white',
//             marginBottom: '30px',
//             fontSize: isMobile ? '14px' : '16px',
//           }}
//         >
//           Lorem Ipsum is simply dummy text of the printing and <br />
//           typesetting industry. Lorem Ipsum has been the industry's <br />
//           standard
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: 'orange',
//             padding: isMobile ? '10px 20px' : '12px 26px',
//             borderRadius: '25px',
//             fontSize: isMobile ? '12px' : '14px',
//             fontWeight: 600,
//             textTransform: 'none',
//           }}
//         >
//           Get more details
//         </Button>
//       </Box>

//       {/* Controller Image */}
//       <Box
//         component="img"
//         src={controllerImg}
//         alt="controller"
//         sx={{
//           marginTop: isMobile ? '40px' : 0,
//           position: isMobile ? 'static' : 'absolute',
//           top: isMobile ? 'auto' : '5px',
//           right: isMobile ? 'auto' : '13%',
//           width: isMobile ? '180px' : '350px',
//           zIndex: 1,
//           pointerEvents: 'none',
//         }}
//       />
//     </Box>
//   );
// };

// const HeroSection: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         fontFamily: 'Poppins',
//         padding: isMobile ? '50px 20px' : '80px 60px',
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'relative',
//       }}
//     >
//       {/* Text Section */}
//       <Box
//         sx={{
//           maxWidth: isMobile ? '100%' : '500px',
//           textAlign: 'left',
//           marginLeft: isMobile ? '0' : '5%',
//         }}
//       >
//         <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
//           3D game Dev
//         </Typography>
//         <Typography
//           variant="h2"
//           sx={{
//             color: 'white',
//             lineHeight: 1.2,
//             fontWeight: 600,
//             fontSize: isMobile ? '30px' : '60px',
//             mb: 2,
//           }}
//         >
//           Work that we
//           <br />
//           produce for our
//           <br />
//           clients
//         </Typography>
//         <Typography
//           sx={{
//             color: 'white',
//             mb: 3,
//             fontSize: isMobile ? '14px' : '16px',
//           }}
//         >
//           Lorem Ipsum is simply dummy text of the printing and <br />
//           typesetting industry. Lorem Ipsum has been the industry's <br />
//           standard
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: 'orange',
//             padding: isMobile ? '10px 20px' : '12px 26px',
//             borderRadius: '25px',
//             fontSize: isMobile ? '12px' : '14px',
//             fontWeight: 600,
//             textTransform: 'none',
//           }}
//         >
//           Get more details
//         </Button>
//       </Box>

//       {/* Visuals Section (Controller + Logos) */}
//       <Box
//         sx={{
//           position: isMobile ? 'static' : 'absolute',
//           top: isMobile ? 'auto' : '20px',
//           right: isMobile ? 'auto' : '14.5%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           mt: isMobile ? 4 : 0,
//         }}
//       >
//         {/* Controller Image */}
//         <Box
//           component="img"
//           src={controllerImg}
//           alt="controller"
//           sx={{
//             width: isMobile ? '180px' : '350px',
//             mb: 2,
//             pointerEvents: 'none',
//           }}
//         />

//         {/* Logos */}
//         <Box
//           sx={{
//             position: 'relative',
//             width: isMobile ? '180px' : '350px',
//             height: isMobile ? '100px' : '200px',
//           }}
//         >
//           <Box
//             component="img"
//             src={unityLogo}
//             alt="Unity"
//             sx={{
//               position: 'absolute',
//               top: isMobile ? '60%' : '60px',
//               left: isMobile ? '40%' : '30%',
//               width: isMobile ? '40px' : '60px',
//             }}
//           />
//           <Box
//             component="img"
//             src={cryengineLogo}
//             alt="CryEngine"
//             sx={{
//               position: 'absolute',
//               top: isMobile ? '10%' : '0px',
//               left: isMobile ? '10%' : '5%',
//               width: isMobile ? '50px' : '70px',
//             }}
//           />
//           <Box
//             component="img"
//             src={unrealLogo}
//             alt="Unreal Engine"
//             sx={{
//               position: 'absolute',
//               top: isMobile ? '30%' : '40px',
//               right: isMobile ? '5%' : '5%',
//               width: isMobile ? '40px' : '60px',
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };


const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        fontFamily: 'Poppins',
        padding: isMobile ? '50px 20px' : '80px 60px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          maxWidth: isMobile ? '100%' : '500px',
          textAlign: 'left',
          marginLeft: isMobile ? '0' : '5%',
        }}
      >
        <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
          3D game Dev
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            lineHeight: 1.2,
            fontWeight: 600,
            fontSize: isMobile ? '32px' : '62px',
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
            fontSize: isMobile ? '16px' : '18px',
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

      
      <Box
        sx={{
          position: 'relative',
          width: isMobile ? '100%' : '40%',
          mt: isMobile ? 4 : -10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
       
        <Box
          component="img"
          src={controllerImg}
          alt="controller"
          sx={{
            width: isMobile ? '180px' : '350px',
            pointerEvents: 'none',
            zIndex: 2,
            marginRight:'50px'
          }}
        />

       
        <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Box
            component="img"
            src={cryengineLogo}
            alt="CryEngine"
            sx={{
              position: 'absolute',
              top: '25%',
              left: '30%',
              transform: 'translateX(-50%)',
              width: isMobile ? '50px' : '70px',
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
              right:60,
              transform: 'translateY(-50%)',
              width: isMobile ? '40px' : '60px',
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
              width: isMobile ? '40px' : '60px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};







export default HeroSection
