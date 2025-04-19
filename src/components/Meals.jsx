import React from 'react'
import { useState, useEffect } from 'react'

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
                <li key={meal.id}>{meal.name}</li>
            )
        })
      }
    </ul>
  )
}

export default Meals
