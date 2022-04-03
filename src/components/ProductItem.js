import React from 'react'
import { Box, Button, Container, Grid, Rating, Typography } from '@mui/material'
import MAN from "../images/man.png"
function ProductItem() {
  return (
    <Grid item md={4} lg={3} sx={{padding:"1rem",display:"flex",flexFlow:"column"}} >
        <Box component="img" src={MAN} sx={{width:{xs:"100%",md:"50%"},alignSelf:"center"}}></Box>
        <Typography variant='h6' component='h6'>Red shorts for sports</Typography>
        <Typography variant='body2' component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam quasi sunt a corrupti mollitia dolorum, sapiente architecto libero quos optio, molestiae ratione officiis itaque neque distinctio ducimus accusantium sequi!</Typography>
        <Typography variant='h4' component="h4">$90.00</Typography>
        <Rating name="disabled" value={3} disabled />
        <Button variant='outlined'>Add To Cart</Button>
        </Grid>
  )
}

export default ProductItem