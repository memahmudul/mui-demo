import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MAN from "../images/man.png"
import Desktopcategories from "./Desktopcategories";

function ProductContainer() {
  return (
    <Box sx={{ mt: "-15vh",mb:"20px" }}>
      <Container>
       <Grid sx={{}} container spacing={2}>
       <Grid md={6} item sx={{display:"flex",alignItems:"end",flexDirection:{xs:"column",md:"row"}}}>
      <Box component="img" src={MAN} sx={{width:{xs:"100%",md:"40%"},mr:{md:"40px"}}}></Box>
      <Box>
        <Typography variant="h4" component="h4" sx={{fontWeight:"bold"}}>Winter Suits 2021</Typography>
        <Typography variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure eligendi dignissimos quam. Voluptatem, qui.</Typography>
        <Typography variant="h4" component="h4" sx={{fontWeight:"bold",color:"tomato"}}>$500</Typography>
        <Button variant="outlined">Add To Cart</Button>
      </Box>

       </Grid>
       <Grid md={6} item sx={{display:"flex",alignItems:"end",flexDirection:{xs:"column",md:"row"}}}>
      <Box component="img" src={MAN} sx={{width:{xs:"100%",md:"40%"},mr:{md:"40px"}}}></Box>
      <Box>
        <Typography variant="h4" component="h4" sx={{fontWeight:"bold"}}>Winter Suits 2021</Typography>
        <Typography variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure eligendi dignissimos quam. Voluptatem, qui.</Typography>
        <Typography variant="h4" component="h4" sx={{fontWeight:"bold",color:"tomato"}}>$500</Typography>
        <Button variant="outlined">Add To Cart</Button>
      </Box>

       </Grid>

       </Grid>
       
      </Container>
    </Box>
  );
}

export default ProductContainer;
