import { activeSongAtom } from "@/store/activeSong";
import { allAlbumsAtom } from "@/store/allAlbums";
import { playAtom } from "@/store/play";
import { playlistAtom } from "@/store/playlist";
import { Pause, PlayArrow } from "@mui/icons-material"
import { Box, Button, IconButton, Typography } from "@mui/material"
import { useAtom, useAtomValue } from "jotai";


const HomeMusicCard = ({music}:{music:any}) => {

  const [activeSong, setActiveSong] = useAtom(activeSongAtom);
  const [playlist, setPlaylist] = useAtom(playlistAtom);
  const play = useAtomValue(playAtom)
  const albums = useAtomValue(allAlbumsAtom);
  const songPlaying = playlist[activeSong];

  

  function handleMusicClick() {
    const activePlaylist = albums.find(
      (album: any) => album._id === music.album._id
    );
  
    if (!activePlaylist) {
      console.error("Unable to find active playlist for music:", music);
      return;
    }

    setPlaylist(activePlaylist.musics);  
    setActiveSong(activePlaylist?.musics?.map((e: any) => e._id).indexOf(music._id));
  }

  

  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      width:"150px",
      cursor:"pointer",
      position:"relative"
    }}>
      <img src={`http://localhost:8080/uploads/${music?.album.image}`} height={150} width={150} />
      <Box sx={{
        mt:2,
      }}>
      <Typography variant="body1" >{music.name}</Typography>
      <Typography variant="caption" >{music.description}</Typography>
      </Box>

      <Box 
      sx={{
        position:"absolute",
        right:"0",
        top:"120px"
      }}
      >
        <Button

sx={{
  backgroundColor:"#1db954",

  ":hover":{
    backgroundColor:"#158f3f",
  }
}}

        variant="contained" 
        onClick={handleMusicClick}
        >
          {songPlaying?._id == music._id && play ? <Pause fontSize="small" /> :  <PlayArrow fontSize="small" />}
        </Button>
      </Box>

    </Box>
  )
}

export default HomeMusicCard
