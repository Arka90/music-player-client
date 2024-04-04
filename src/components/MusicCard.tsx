import { activeSongAtom } from "@/store/activeSong";
import { allAlbumsAtom } from "@/store/allAlbums";
import { playAtom } from "@/store/play";
import { playlistAtom } from "@/store/playlist";
import { Box, Typography } from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ScaleLoader } from "react-spinners";
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';

const MusicCard = ({ music, index }: { music: any; index: any }) => {
  const [activeSong, setActiveSong] = useAtom(activeSongAtom);
  const [playlist, setPlaylist] = useAtom(playlistAtom);
  const play = useAtomValue(playAtom)
  const albums = useAtomValue(allAlbumsAtom);

  function handeMusicClick() {
    const activePlaylist = albums.find(
      (album: any) => album._id === music.album
    );
    setPlaylist(activePlaylist.musics);
    setActiveSong(index);
  }


  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        padding: "5px",
        cursor: "pointer",
        paddingX: "15px",
        borderRadius: "8px",
        color: playlist[activeSong]?._id == music?._id ? "	#1db954" : "",
        ":hover": {
          backgroundColor: "rgba( 255, 255, 255, 0.2 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 7.5px )",
        },
      }}
      onClick={handeMusicClick}
    >
      <Box sx={{
        width:"3%"
      }}>
        {playlist[activeSong]?._id == music?._id && play ? <ScaleLoader width={2} height={18} margin={1} color="#1db954" /> : <Typography variant="subtitle1">{index + 1}</Typography>}

        
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
         
        }}
      >
        <Typography variant="subtitle1">{music?.name}</Typography>
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="60%"
        >
        <Box>
        <FavoriteBorderIcon 
        
        sx={{
          color:  "#1db954"
       }} fontSize="medium"


        />
        </Box>
        <Typography variant="subtitle1">{music?.description}</Typography>
        <Typography variant="subtitle1">{music?.duration}</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default MusicCard;
