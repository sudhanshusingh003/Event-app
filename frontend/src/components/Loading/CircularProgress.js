import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import { createTheme , ThemeProvider} from '@mui/material/styles';

function CircularProgres() {
    
  const theme = createTheme({
    palette: {
      primary: {
        main: '#nnn',
      },}})
  return (
    <ThemeProvider theme={theme}>
    <CircularProgress size={20}  />
 </ThemeProvider>
  )
}

export default CircularProgres
