import { Box, CircularProgress } from "@mui/material"

const Loader = () => {
  return (
    <Box sx={{
      height:"100vh",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    }} >
      <CircularProgress 
      
      sx={{
        color:"#1db954",
        fontSize:"50px"
      }}
      
      />
    </Box>
  )
}

export default Loader
