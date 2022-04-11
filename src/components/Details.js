import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Diet from "../assets/diet.svg"
import "./Details.css"

function Details() {
  const location = useLocation();

 const food =  location.state.item
 console.log(food)
  const {label} = food.recipe
  const {label: calc} = food.recipe.totalNutrients.CA
  const {quantity} = food.recipe.totalNutrients.CA
  const {unit} = food.recipe.totalNutrients.CA

  const {label: carb} = food.recipe.totalNutrients.CHOCDF
  const {quantity : quantity2} = food.recipe.totalNutrients.CHOCDF
  const {unit : unit2} = food.recipe.totalNutrients.CHOCDF

  const {label: chole} = food.recipe.totalNutrients.CHOLE
  const {quantity : quantity3} = food.recipe.totalNutrients.CHOLE
  const {unit : unit3} = food.recipe.totalNutrients.CHOLE

  const {label: energy} = food.recipe.totalNutrients.ENERC_KCAL
  const {quantity : quantity4} = food.recipe.totalNutrients.ENERC_KCAL
  const {unit : unit4} = food.recipe.totalNutrients.ENERC_KCAL

  const {label: Fat} = food.recipe.totalNutrients.FAT
  const {quantity : quantity5} = food.recipe.totalNutrients.FAT
  const {unit : unit5} = food.recipe.totalNutrients.FAT

  const {label: Protein} = food.recipe.totalNutrients.PROCNT
  const {quantity : quantity6} = food.recipe.totalNutrients.PROCNT
  const {unit : unit6} = food.recipe.totalNutrients.PROCNT


  const {ingredients} = food.recipe


  return (
    <div className='moreinfodiv'>
      <div className='top'>
      <h1>{label}</h1>
      <img src={Diet} alt="diet" className='dietimage'/>
      </div>


      <div className='details'>
            <div className='nutrients'>
                <h2>Nutrients</h2>
                <h2>{calc} {quantity.toFixed()} {unit}</h2>
                <h2>{carb} {quantity2.toFixed()} {unit2}</h2>
                <h2>{chole} {quantity3.toFixed()} {unit3}</h2>
                <h2>{energy} {quantity4.toFixed()} {unit4}</h2>
                <h2>{Fat} {quantity5.toFixed()} {unit5}</h2>
                <h2>{Protein} {quantity6.toFixed()} {unit6}</h2>
            </div>

            <div className='imagediv'>
            <img src={food.recipe.image} alt="image" className='imagedetails'/>
            </div>


            <div className='tarif'>
              <ol>
                {ingredients.map(item => {
                  return <li className='li'><h3>{item.text}</h3></li>
                })}
              </ol>
            </div>
      </div>
    </div>
  )
}

export default Details