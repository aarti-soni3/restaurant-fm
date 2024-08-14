import React, { useEffect, useState } from 'react'
import { foodData } from './food-data'

export default function Foods() {

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
      <button style={{ margin: 2 }} onClick={() => { SetCategoryValue('all') }}>All</button>
      <button style={{ margin: 2 }} onClick={() => { SetCategoryValue('burger') }}>Burger</button>
      <button style={{ margin: 2 }} onClick={() => { SetCategoryValue('pizza') }}>Pizza</button>
      <button style={{ margin: 2 }} onClick={() => { SetCategoryValue('salad') }}>Salad</button>
      <button style={{ margin: 2 }} onClick={() => { SetCategoryValue('chicken') }}>Chicken</button>

      <h4>Filter Price</h4>
      <button style={{ margin: 2 }} onClick={() => { SetPriceValue('all') }}>All</button>
      <button style={{ margin: 2 }} onClick={() => { SetPriceValue('$') }}>$</button>
      <button style={{ margin: 2 }} onClick={() => { SetPriceValue('$$') }}>$$</button>
      <button style={{ margin: 2 }} onClick={() => { SetPriceValue('$$$') }}>$$$</button>
      <button style={{ margin: 2 }} onClick={() => { SetPriceValue('$$$$') }}>$$$$</button>

      <p>{foods.map(item => (<li key={item.id}>{item.name}- {item.category} - {item.price}</li>))}</p>
    </div>
  )
}