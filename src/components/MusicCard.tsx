import { activeSongAtom } from "@/store/activeSong";
import { allAlbumsAtom } from "@/store/allAlbums";
import { playAtom } from "@/store/play";
import { playlistAtom } from "@/store/playlist";
import { Box, Button, Typography } from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ScaleLoader } from "react-spinners";
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import { favrouteSongsAtom } from "@/store/favoriteSongs";
import { FavoriteOutlined } from "@mui/icons-material";

const MusicCard = ({ music, index , isFavroute }: { music: any; index: any , isFavroute?:boolean }) => {
  const [activeSong, setActiveSong] = useAtom(activeSongAtom);
  const [playlist, setPlaylist] = useAtom(playlistAtom);
  const [favrouteSongs , setFavrouteSongs] = useAtom(favrouteSongsAtom)
  const play = useAtomValue(playAtom)
  const albums = useAtomValue(allAlbumsAtom);

  function handeMusicClick(e:any) {


    

   

      if(isFavroute){

        setPlaylist(favrouteSongs);
        setActiveSong(index)
        return

    }


    const activePlaylist = albums.find(
      (album: any) => album._id === music.album
    );
    setPlaylist(activePlaylist.musics);
    setActiveSong(index);




  }


  function handelFavorite(e:any){
    if(favrouteSongs.length == 0){
      setFavrouteSongs([music]);
    }else{
      const isSongExsists = favrouteSongs.find(
        (song: any) => song._id === music._id
      );

      if(isSongExsists){

        const newFavList = favrouteSongs.filter((song:any)=> song._id !== music._id);
        setFavrouteSongs(newFavList);

      }else{
        setFavrouteSongs((prev:any)=>[...prev , music])
      }
      
    }

    e.stopPropagation();

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
      onClick={(e) => handeMusicClick(e)}
    >
      <Box sx={{
        width:"3%",

        '@media (max-width: 960px)': {
          width:"10%"
        }

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
        <Box
        
        sx={{
        
          display:'flex',
          alignItems:"center",
          justifyContent:"space-between",
          width:"30%",
          '@media (max-width: 670px)': {
            width:"50%"
          }

        }}

        
        >
        <Typography 
        variant="subtitle1">{music?.name}</Typography>
        
        <Button
        onClick={handelFavorite}
        >
        {favrouteSongs.findIndex((song:any) => song._id === music._id) == -1 ? <FavoriteBorderIcon 
        sx={{
          color:  "#1db954"
        }} 
        fontSize="medium"
        />  : <FavoriteOutlined 
        
        sx={{
          color:"#1db954"
        }}
        
        /> }
        </Button>

        </Box>
        <Box 

        sx={
          {

            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            width:"60%",

            '@media (max-width: 670px)': {
              width:"20%"
            }
          }
        }
        >

        <Typography
        
        sx={
          {
            '@media (max-width: 670px)': {
              display:"none"
            }
          }
        }
        
        variant="subtitle1">{music?.description}</Typography>
        <Typography variant="subtitle1">{music?.duration}</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default MusicCard;
