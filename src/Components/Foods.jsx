import React, { useEffect, useState } from 'react'
import { foodData } from './food-data'
import { Box, Button, Stack, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function Foods() {

  //  note : logic is right but the way i filter foods thats you done wrong - without declaring foods hook 
  //  don't make it hard by written code inside filter make it easy - make function variable and save it state n display
  const [foods, SetFoods] = useState(foodData);
  const [categoryValue, SetCategoryValue] = useState('all');
  const [priceValue, SetPriceValue] = useState('all');

  useEffect(() => {
    filteredFoods();
  }, [priceValue, categoryValue]);

  const filteredFoods = () => {

    var tempFoods = [...foodData];

    if (categoryValue !== 'all')
      tempFoods = tempFoods.filter(item => item.category === categoryValue)

    if (priceValue !== 'all')
      tempFoods = tempFoods.filter(item => item.price === priceValue)

    SetFoods(tempFoods);
  }

  return (
    <div>
      <Box sx={{ mt: 3 }}></Box>
      <Typography variant='h4' component='h2' align='center' color='orange' fontWeight='bold'>Top Rated Menu Items</Typography>

      <Grid2 container direction='row' justifyContent='space-between'>
        <Grid2 container direction="column" spacing={-5}>
          <Typography variant='subtitle1' align='left'>
            <Box sx={{ fontWeight: 'bold' }}>Filter Type</Box>
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' color='warning' onClick={() => { SetCategoryValue('all') }}>All</Button>
            <Button variant='contained' color='warning' onClick={() => { SetCategoryValue('burger') }}>Burger</Button>
            <Button variant='contained' color='warning' onClick={() => { SetCategoryValue('pizza') }}>Pizza</Button>
            <Button variant='contained' color='warning' onClick={() => { SetCategoryValue('salad') }}>Salad</Button>
            <Button variant='contained' color='warning' onClick={() => { SetCategoryValue('chicken') }}>Chicken</Button>
          </Stack>
        </Grid2>

        <Grid2 container direction='column' spacing={-5}>
          <Typography variant='subtitle1' align='right'>
            <Box sx={{ fontWeight: 'bold' }}>Filter Price</Box>
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' color='warning' onClick={() => { SetPriceValue('all') }}>All</Button>
            <Button variant='contained' color='warning' onClick={() => { SetPriceValue('$') }}>$</Button>
            <Button variant='contained' color='warning' onClick={() => { SetPriceValue('$$') }}>$$</Button>
            <Button variant='contained' color='warning' onClick={() => { SetPriceValue('$$$') }}>$$$</Button>
            <Button variant='contained' color='warning' onClick={() => { SetPriceValue('$$$$') }}>$$$$</Button>
          </Stack>
        </Grid2>
      </Grid2>

      <Box sx={{ mx: 4, my: 4 }}>
        <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {foods.map(item => (
            <Box sx={{ mx: 4, my: 4 }}>
              <Card key={item.id} sx={{ maxWidth: 350 , minWidth:300, boxShadow:6 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    src={`${item.image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography gutterBottom variant="h6" component="div">{item.name}</Typography>
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}> {item.price}</Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          )
          )}

        </Grid2>
      </Box>
      {/* <p>{foods.map(item => (<li key={item.id}>{item.name}- {item.category} - {item.price}</li>))}</p> */}
    </div>
  )
}