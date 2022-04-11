import React from 'react'
import "./Food.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Food({item}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", {state:{item}})
  }





  const {image} = item.recipe
  const {label} = item.recipe
  const {mealType} = item.recipe
  return (
    <div className = "fooddiv">
      <h3>{label}</h3>
      <img src={image} className = "foodimage"/>
      <button onClick={handleClick} className = "morebutton">More Info</button>
    </div>
  )
}

export default Food