import React from 'react'
import { formatCurrency } from '../util/currencyFormatter'
import Button from './UI/Button'
import { useCart } from '../context/CartContext'

const MealItem = ({meal}) => {
  const {dispatch} = useCart()
  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{formatCurrency.format(meal.price)}</p>
            <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
          <Button onClick={() => {dispatch({type: "ADD_MEAL", payload:meal})}}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}

export default MealItem
