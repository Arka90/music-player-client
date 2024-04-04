import { Box, Button } from "@mui/material"
import Sidenav from "./Sidenav"
import { useState } from "react";
import Main from "./Main";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useAtom, useAtomValue } from "jotai";
import { activeAlbumAtom } from "@/store/activeAlbum";
import MusicPlayer from "./MusicPlayer";
import Home from "./Home";
import { ArrowRight, Favorite } from "@mui/icons-material";
import Favorites from "./Favorites";
import Menu from "./Menu";
import { showMenuAtom } from "@/store/showMenu";
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {

  const activeAlbum = useAtomValue(activeAlbumAtom);
  const [showMenu,setShowMenu] = useAtom(showMenuAtom)

  return (
    <>
    <Box 
    sx={
      {
        display:"flex",
        overflowY:"hidden",
        position:"relative"
      }
    }
    >
      <Box
      sx={{
        bgcolor:"#121212",
        height: "100vh",
        flex:3,
        padding:"8px",
        '@media (max-width: 1100px)': {
          display:"none"
        }
      }}
      >

      <Sidenav />

      </Box>
      <Box
      sx={{
        bgcolor:"#121212",
        height:"100vh",
        padding:"8px",
        flex:9,
        '@media (max-width: 1100px)': {
          flex:12,
         
        }
      }}
      >


     {activeAlbum ?(activeAlbum === 'favorites' ? <Favorites/> :<Main /> ): <Home/>}
      </Box>
    <Box
    sx={{
      position:"fixed",
      bottom:0,
      width:"100%"
    }}
    >
     <MusicPlayer/>
    </Box>
    {showMenu && <Box 
    sx={{
      position:"fixed",
      left:0,
      top:0,
      width:"40%",
      '@media (min-width: 1100px)': {
        display:"none"
      },
      '@media (max-width: 600px)': {
        width:"100%",
      }
    }}

    >
     <Menu/>
    </Box>}

<Box



sx={{
  position:"fixed",
  left:10,
  top:30,
  transform:"translateY(-50%)",
}}

>

  <Button sx={{
    color:"white",
    '@media (min-width: 1100px)': {
      display:"none"
    },
  }}
  
  onClick={()=>{setShowMenu(!showMenu)}}

  >
 <MenuIcon fontSize="large" />
  </Button>
</Box>


    </Box>

    </>


  )
}

export default Layout
