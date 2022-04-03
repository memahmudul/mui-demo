import React, { useState } from 'react'
import {AppBar,Toolbar,Container, IconButton, Typography, Button,useMediaQuery,useTheme,Menu,MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import MyDrawer from './MyDrawer';
function Navbar() {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleClose = ()=>{
    setAnchorEl(null)
  }
  return (
    <>
    <AppBar color="secondary">
        <Toolbar>
            <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Typography variant="h4" component="h4">Mahmudul</Typography>
               {!matches? (<>
                <Box sx={{display:"flex",gap:"15px"}}>
                <Typography variant="h6" component="h6">Home</Typography>
                <Typography variant="h6" component="h6"  id="resources-button" onClick={handleClick} aria-controls={open? 'resources-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open? 'true': undefined}
                
                >Experience</Typography>
                <Typography variant="h6" component="h6">About</Typography>
                <Typography variant="h6" component="h6">Contact</Typography>

                </Box>

                <Box sx={{display:"flex",gap:"15px"}}>
                    <Button variant='contained' disableElevation="true">Login</Button>
                    <Button variant='contained' disableElevation="true">SignUp</Button>
                </Box>
               </>) : ( <MyDrawer/>)}
               <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{'aria-labelledby': 'resources-button'}} onClose={handleClose}>
               <MenuItem onClick={handleClose}>BLog</MenuItem>
               <MenuItem onClick={handleClose}>Podcast</MenuItem>

               </Menu>
               
            </Container>
        </Toolbar>
        
    </AppBar>

    </>
  )
}

export default Navbar