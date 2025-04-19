import React from 'react'
import { useState } from 'react'

const Meals = () => {

    const [loadedMeals, setLoadedMeals] = useState([])
    
    async function getMeals() {
        const response = await fetch("http://localhost:3000/meals")

        if(!response.ok) {
            // ... handle error
        }

        const mealsData = await response.json()

        setLoadedMeals(mealsData)
    }

    getMeals()

  return (
    <ul>
      
    </ul>
  )
}

export default Meals
