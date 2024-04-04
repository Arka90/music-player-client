import { showMenuAtom } from "@/store/showMenu";
import { Box, Typography } from "@mui/material"
import { useSetAtom } from "jotai";

const AlbumCard = ({album , setActiveAlbum , activeAlbum}:any) => {

  const setShowMenu = useSetAtom(showMenuAtom)

  function handelAlbumClick(){
    setActiveAlbum(album._id);
    setShowMenu(false)
  }

  return (
    <Box 
    sx={{
      display:"flex",
      alignItems:"center",
      gap:"20px",
      borderRadius:"8px",
      bgcolor:activeAlbum === album._id ? "#484848":"",
      ":hover" :{
        backgroundColor:"#484848"
      },
      cursor:"pointer"
    }}
    onClick={handelAlbumClick}
    >

      <img height={50} width={50} src={`http://localhost:8080/uploads/${album.image}`} />
      
      <Box>
          <Typography>{album.name}</Typography>
          <Typography variant="caption">Total song : {album.musics.length}</Typography>
      </Box>

    </Box>
  )
}

export default AlbumCard;
