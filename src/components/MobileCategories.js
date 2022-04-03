import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

function MobileCategories() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ];
  return (
    <Box>
    
        <Autocomplete  disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Movie" />}/>
    </Box>
  )
}

export default MobileCategories