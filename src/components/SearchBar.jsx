import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
function SearchBar() {
 const [searchTerm, setSearchTerm] = useState('')
 const navigate = useNavigate()

 const handleSubmittedSearch = (e) => {
  e.preventDefault()

  if (searchTerm) {
   navigate(`/search/${searchTerm}`)

   setSearchTerm('')
  }
 }
 return (
  <Paper
   component='form'
   onSubmit={handleSubmittedSearch}
   sx={{
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    mr: { sm: 5 },
   }}>
   <input
    type='text'
    placeholder='Search...'
    className='search-bar'
    value={searchTerm}
    onChange={(e) => {
     setSearchTerm(e.target.value)
    }}
   />
   <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
    <Search />
   </IconButton>
  </Paper>
 )
}

export default SearchBar
