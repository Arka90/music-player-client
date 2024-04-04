import { activeSongAtom } from "@/store/activeSong";
import { allAlbumsAtom } from "@/store/allAlbums";
import { playAtom } from "@/store/play";
import { playlistAtom } from "@/store/playlist";
import { Box } from "@mui/material"
import { useAtomValue , useAtom, useSetAtom} from "jotai";
import AudioPlayer from 'react-h5-audio-player';

const MusicPlayer = () => {

  const playlist = useAtomValue(playlistAtom);
  const [activeSong , setActiveSong] = useAtom(activeSongAtom)
  const setPlay = useSetAtom(playAtom)

  function handelEndOfSong(e:any){
      if(playlist.length-1 >= activeSong){
        setActiveSong((activeSong:any) =>activeSong+1)
      }
  }

  function handelNext(e:any){
    if(playlist.length-1 >= activeSong){
      setActiveSong((activeSong:any) =>activeSong+1)
    }
  }

  function handelPrev(e:any){
    if(activeSong > 0){
      setActiveSong((activeSong:any) =>activeSong-1)
    }
  }


  return (
    <Box>
    <AudioPlayer
      style={{ color: "#fff", background: "#121212" }}
      onEnded={handelEndOfSong}
      onClickNext={handelNext}
      onClickPrevious={handelPrev}
      onPause={()=>setPlay(false)}
      onPlay={()=>setPlay(true)}
      showSkipControls
      src={playlist[activeSong] ? `http://localhost:8080/uploads/${playlist[activeSong]?.url}` :""}
      layout="stacked-reverse"
      />
    </Box>
  )
}

export default MusicPlayer
