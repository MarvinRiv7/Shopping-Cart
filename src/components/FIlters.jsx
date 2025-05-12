import React, { useState } from 'react'
import './Filters.css'

export const FIlters = () => {
    const [minPrice, setminPrice] = useState(0)
    const handleChangeMinPrice = (event) => {
        setminPrice(event.target.value)
    }
  return (
    <section className='filters'>
        <div>
            <label htmlFor="price">Price</label>
            <input type="range" 
            id="price"
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
        </div>
        <div>
            <label htmlFor="category">Category</label>
            <select id="category">
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="fragances">Fragances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
            </select>
        </div>
    </section>
  )
}
// beauty, fragances, furniture, groceries