import {Container, Grid} from '@mui/material'
import React from 'react'

import ProductItem from './ProductItem'
function ProductList() {
  return (
    <Container>
        <Grid container spacing={2}>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        
        
        

        </Grid>
    </Container>
  )
}

export default ProductList