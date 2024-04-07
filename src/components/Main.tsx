import { Box, Button, List, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MusicCard from "./MusicCard";
import {  useAtom, useAtomValue } from "jotai";
import { activeAlbumAtom } from "@/store/activeAlbum";
import CircularProgress from '@mui/material/CircularProgress';
import { playAtom } from "@/store/play";
import Loader from "./Loader";
import { playlistAtom } from "@/store/playlist";


const Main = () => {

  const [album , setAlbum] = useState<any>();
  const activeAlbum = useAtomValue(activeAlbumAtom);
  const [loading , setLoading] = useState(false);
  const [playlist , setPlaylist] = useAtom(playlistAtom)
  const [play,setPlay] = useAtom(playAtom)
  const isActivePlaylist = playlist[0]?._id == album?.musics[0]?._id;
  
  

  useEffect(()=>{

    setLoading(true);
    async function getAlbum(){

      try{
        const response = await axios.get(`http://localhost:8080/api/v1/album/${activeAlbum}`)
        setAlbum(response.data.album)
      }catch(error){
        
        console.log(error);

      }finally{
setLoading(false)
      }


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
      {loading ? <Loader/> : <>
      
       <Box sx={{
        display:"flex",
        gap:"25px",
        marginTop:"60px"
      }} >
        <img src={`http://localhost:8080/uploads/${album?.image}`} width={200} height={200} />
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"

        }}>
          <Box>
          <Typography variant="h3">{album?.name}</Typography>
          <Typography variant="body2" >{album?.description}</Typography>
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
        >{isActivePlaylist && play ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <List sx={{
            padding:"40px",
            display:"flex",
            flexDirection:"column",
            gap:"15px",
            '@media (max-width: 780px)': {
              padding:"20px",
            }
          }}>
            {album?.musics.map((music:any , index:any) =>(
              <MusicCard key={music._id} music={music} index={index} />
            ))}
          </List>
        </Box>
      </Box>
      </>
      }
    </Box> 
  
  )
}

export default Main
