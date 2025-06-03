
import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import TrendingGames from '../Components/TrendingGames'
import GameCategories from '../Components/GameCategories'
import RecentProjects from '../Components/RecentProjects'
import Footer from '../Components/Footer'

const HomePage:React.FC = () => {
  return (
    
        <Box sx={{ position: 'relative', backgroundColor: 'black', overflow: 'hidden' }}>
      <Navbar />
      <HeroSection />

      <TrendingGames/>
      <GameCategories/>
      <RecentProjects/>
      <Footer/>


    
     
    </Box>


  )
}

export default HomePage
