import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import HomePage from './Pages/HomePage';

const App:React.FC = () =>{
 return (
    <Box sx={{ position: 'relative', backgroundColor: 'black', overflow: 'hidden' }}>
      <HomePage/>


    
     
    </Box>
  );
}

export default App;
