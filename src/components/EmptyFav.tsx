import { Box, Typography } from '@mui/material'
import React from 'react'

const EmptyFav = () => {
  return (
    <Box 
    sx={{
      height:"50vh",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >

      <Box sx={
        {
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"10px"
        }
      } >
        <Typography variant='h5' >Songs you like will appear here</Typography>
        <Typography variant="body1" >Save songs by tapping the heart icon.</Typography>
      </Box>
      
    </Box>
  )
}

export default EmptyFav
