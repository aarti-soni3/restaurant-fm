import React, { useEffect, useState } from 'react'
import { foodData } from './food-data'
import { Button, Stack } from '@mui/material';

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

      <h2>Top Rated Menu Items</h2>

      <h4>Filter Type</h4>
      <Stack spacing={2} direction='row'>
      <Button variant='contained' onClick={() => { SetCategoryValue('all') }}>All</Button>
      <Button variant='contained' onClick={() => { SetCategoryValue('burger') }}>Burger</Button>
      <Button variant='contained' onClick={() => { SetCategoryValue('pizza') }}>Pizza</Button>
      <Button variant='contained' onClick={() => { SetCategoryValue('salad') }}>Salad</Button>
      <Button variant='contained' onClick={() => { SetCategoryValue('chicken') }}>Chicken</Button>
      </Stack>

      <h4>Filter Price</h4>
      <Stack spacing={2} direction='row'>
      <Button variant='contained' onClick={() => { SetPriceValue('all') }}>All</Button>
      <Button variant='contained' onClick={() => { SetPriceValue('$') }}>$</Button>
      <Button variant='contained' onClick={() => { SetPriceValue('$$') }}>$$</Button>
      <Button variant='contained' onClick={() => { SetPriceValue('$$$') }}>$$$</Button>
      <Button variant='contained' onClick={() => { SetPriceValue('$$$$') }}>$$$$</Button>
      </Stack>
      <p>{foods.map(item => (<li key={item.id}>{item.name}- {item.category} - {item.price}</li>))}</p>
    </div>
  )
}