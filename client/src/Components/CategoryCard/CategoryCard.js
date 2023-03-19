import React from 'react'
import './CategoryCard.css'
const CategoryCard = (props) => {
  return (
    <div className='CategoryImage'>
        <img src={props.CategoryImage} alt="CategoryImg"/>
    </div>
  )
}

export default CategoryCard