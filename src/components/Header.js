import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import IMG from "../images/img.png"

function Header() {
  return (
    <>
        <Box sx={{display:"flex",justifyContent:"center", alignItems:"center",paddingTop:"65px",minHeight:{xs:"60vh",md:"100vh"}, backgroundImage: `url(https://images.unsplash.com/photo-1648816891720-9597e2e5ebac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80)`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}}>
           <Container>
           <Typography variant='h2' component="h2">This is Heading</Typography>
           <Typography variant='h5' component="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, perspiciatis!</Typography>
           </Container>
           
        </Box>
    </>
  )
}

export default Header