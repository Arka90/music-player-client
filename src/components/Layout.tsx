import { Box } from "@mui/material"
import Sidenav from "./Sidenav"
import { useState } from "react";
import Main from "./Main";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useAtomValue } from "jotai";
import { activeAlbumAtom } from "@/store/activeAlbum";
import MusicPlayer from "./MusicPlayer";
import Home from "./Home";
import { Favorite } from "@mui/icons-material";
import Favorites from "./Favorites";


const Layout = () => {

  const activeAlbum = useAtomValue(activeAlbumAtom);

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
    </Box>
    </>


  )
}

export default Layout
