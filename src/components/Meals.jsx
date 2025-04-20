import React from 'react'
import { useState, useEffect } from 'react'
import MealItem from './MealItem'

const Meals = () => {

    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function getMeals() {
            const response = await fetch("http://localhost:3000/meals")
    
            if(!response.ok) {
            }
    
            const mealsData = await response.json()
    
            setLoadedMeals(mealsData)
        }
        getMeals()
    }, [])

  return (
    <ul id='meals'>
      {
        loadedMeals.map(meal => {
            return (
                <MealItem key={meal.id} meal={meal}/>
            )
        })
      }
    </ul>
  )
}

export default Meals
