import { Box, Button, List, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MusicCard from "./MusicCard";
import {  useAtom, useAtomValue } from "jotai";
import { activeAlbumAtom } from "@/store/activeAlbum";
import { playAtom } from "@/store/play";
import { favrouteSongsAtom } from './../store/favoriteSongs';


const Favorites = () => {
  const [album , setAlbum] = useState<any>();
  const activeAlbum = useAtomValue(activeAlbumAtom);
  const favrouteSongs = useAtomValue(favrouteSongsAtom)
  const [play,setPlay] = useAtom(playAtom)

  useEffect(()=>{

    async function getAlbum(){
      // const response = await axios.get(`http://localhost:8080/api/v1/album/${activeAlbum}`)
      // setAlbum(response.data.album)
    }
    getAlbum();

  },[activeAlbum])

  

  function hndelPausePlay(){
    setPlay((prev)=>!prev)
  }


  return (
    <Box
    sx={{
      bgcolor:"#212121",
      height:"100vh",
      padding:"4px",
      borderRadius:"4px",
    }}
    >
      <Box sx={{
        display:"flex",
        gap:"25px",
      }} >
        <img src="/liked_song.png" width={200} height={200} />
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"

        }}>
          <Box>
          <Typography variant="h3">Liked Song</Typography>
          <Typography variant="body2" >{favrouteSongs.length} Songs</Typography>
          </Box>
        <Button variant="contained" sx={{
          height:"60px",
          width:"60px",
          borderRadius:"50%",
          backgroundColor:"#1db954",

          ":hover":{
            backgroundColor:"#158f3f",
          }

        }} 
        onClick={hndelPausePlay}
        >{play ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <List sx={{
            padding:"40px",
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>
            {favrouteSongs.length == 0 ? <h1>Empty</h1> : favrouteSongs?.map((music:any , index:any) =>(
              <MusicCard key={music._id} music={music} index={index} isFavroute={true} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Favorites
