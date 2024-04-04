import { allAlbumsAtom } from "@/store/allAlbums";
import { Box, Typography } from "@mui/material"
import axios from "axios";
import { useAtomValue } from "jotai"
import { useEffect, useState } from "react"
import HomeMusicCard from "./HomeMusicCard";

const Home = () => {

  const albums = useAtomValue(allAlbumsAtom);
  const [song,setSong] = useState<any>([]);

  
  useEffect(()=>{

    async function getAllSongs(){
      
      let response = await axios.get('http://localhost:8080/api/v1/musics');

      console.log(response);
      
      setSong(response.data.music);

    }
    getAllSongs();

  },[])

  
  return (

    <Box sx={{
      bgcolor:"#212121",
      height:"100vh",
      padding:"18px",
      borderRadius:"4px",
    }}>
    <Box
    sx={{

     
      display:"flex",
      gap:"20px",
      flexWrap:"wrap",
      justifyContent:"space-arround"
    }}
    >

      {
        song?.map((item:any) =>(
          <HomeMusicCard key={item._key} music={item} />
        ))
      }
      
    </Box>

    </Box>


  )
}

export default Home
