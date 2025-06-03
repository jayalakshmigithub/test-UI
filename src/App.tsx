// import React from 'react';
import { Box } from '@mui/material';
// import Navbar from './Components/Navbar';
import './App.css'
// import HeroSection from './Components/HeroSection';
// import controllerImg from '../src/assets/joy_stick 1.png'
// import unityLogo from '../src/assets/unity-game-logo.png'
// import cryengineLogo from '../src/assets/cryengine-logo.png'
// import unrealLogo from '../src/assets/unreal-logo1.png'
// import TrendingGames from './Components/TrendingGames';
// import GameCategories from './Components/GameCategories';
// import RecentProjects from './Components/RecentProjects';
// import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';

function App() {
 return (
    <Box sx={{ position: 'relative', backgroundColor: 'black', overflow: 'hidden' }}>
      {/* <Navbar />
      <HeroSection />

      <TrendingGames/>
      <GameCategories/>
      <RecentProjects/>
      <Footer/> */}
      <HomePage/>


    
     
    </Box>
  );
}

export default App;
