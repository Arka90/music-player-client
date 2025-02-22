import { Box, Typography } from "@mui/material"
import AlbumCard from "./AlbumCard"
import { useEffect, useState } from "react"
import axios from "axios";
import {useAtom, useSetAtom} from 'jotai'
import { activeAlbumAtom } from "@/store/activeAlbum";
import { allAlbumsAtom } from "@/store/allAlbums";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteOutlined, Home } from "@mui/icons-material";
import { showMenuAtom } from "@/store/showMenu";


const Sidenav = () => {


  const [showMenu , setShowMenu] = useAtom(showMenuAtom)


  

  const [albums , setAlbums] = useAtom(allAlbumsAtom);

  const [activeAlbum , setActiveAlbum] = useAtom(activeAlbumAtom);

  useEffect(()=>{

    async function getAlbums(){

      let response = await axios.get('http://localhost:8080/api/v1/album');

      setAlbums(response.data.albums);
      

    }

    getAlbums();
    
  },[])


 

  return (
    <Box sx={{
      bgcolor:"#212121",
      height:"100vh",
      padding:"18px",
      borderRadius:"4px",
      display:"flex",
      flexDirection:"column",
      gap:"10px",



    }}>

      <Box>


        <Box sx={{
          display:"flex",
          alignItems:"center",
          gap:"15px",
          marginBottom:"18px",
          marginTop:"18px",
          cursor:"pointer"
        }}
        onClick={()=>{
          setShowMenu(false)
          setActiveAlbum("")
      }
        }
        >


        <Home sx={{
           color:activeAlbum ? "#fff" : "#1db954"
        }} fontSize="medium" /> <Typography sx={{
          fontSize:"1.2rem",
          color:activeAlbum ? "#fff" : "#1db954"
        }} >Home</Typography>
        </Box>

      </Box>

      <Typography variant="h6" ># Summer Hits</Typography>
      {albums.map((album:any) => (
        <AlbumCard key={album._id} album={album} setActiveAlbum={setActiveAlbum} activeAlbum={activeAlbum} />
      ))}

    <Box sx={{
      display:"flex",
      alignItems:"center",
      gap:"12px",
      marginBottom:"30px",
      marginTop:"18px",
      cursor:"pointer"
    }}
    
    onClick={() => {
    setShowMenu(false)
      setActiveAlbum("favorites")
    }}

    >

        <FavoriteBorderIcon 
        
        sx={{
          color:activeAlbum === 'favorites' ?  "#1db954" : "#fff"
       }} fontSize="medium"


        />
        <Typography
        
        sx={{
          color:activeAlbum === 'favorites' ?  "#1db954" : "#fff",
          fontSize:"1.2rem",
          

         
        }}

        >Favorites</Typography>

    </Box>

    </Box>
  )
}

export default Sidenav
