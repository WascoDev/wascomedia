import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Videos } from './'
import { fetchFromApi } from './../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

function SearchFeed() {
 const { searchTerm } = useParams()
 const [videos, setVideos] = useState([])

 useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
   setVideos(data.items)
  )
 }, [searchTerm])

 return (
  <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
   <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
    Search Results for: <span style={{ color: '#f31503' }}>{searchTerm} </span>
    Videos
   </Typography>

   <Videos videos={videos} />
  </Box>
 )
}

export default SearchFeed
