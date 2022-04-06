import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../Pages/Home1/Home.css"
import { useState } from 'react';

export default function BasicSelect({ addValue}) {
  const [meal, setMeal] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setMeal(event.target.value)
    addValue(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }} className = "select">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Meal Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={meal}
          label="Meal"
          onChange={handleChange}
        >
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"lunch"}>Lunch</MenuItem>
          <MenuItem value={"dinner"}>Dinner</MenuItem>
          <MenuItem value={"Snack"}>Snack</MenuItem>
          <MenuItem value={"teatime"}>Teatime</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
