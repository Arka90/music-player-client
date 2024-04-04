import { Box } from "@mui/material"

const AlbumCard = ({album , setActiveAlbum , activeAlbum}:any) => {


  function handelAlbumClick(){
    setActiveAlbum(album._id);
  }

  return (
    <Box 
    sx={{
      overflow:"hidden",
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
          <h3>{album.name}</h3>
          <p>Total song : {album.musics.length}</p>
      </Box>

    </Box>
  )
}

export default AlbumCard;
