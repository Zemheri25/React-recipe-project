import React from 'react'
import "./Food.css";
import { Link } from 'react-router-dom';

function Food({item}) {
  const {image} = item.recipe
  const {label} = item.recipe
  const {mealType} = item.recipe
  return (
    <div className = "fooddiv">
      <h3>{label}</h3>
      <img src={image} className = "foodimage"/>
      <h3>{mealType}</h3>
    </div>
  )
}

export default Food