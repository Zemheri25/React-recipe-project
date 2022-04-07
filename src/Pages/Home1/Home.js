import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Home.css";
import Food from "../../components/Food";
import Select from "../../components/Select";

function Home() {
  const [food, setFood] = useState([]);

  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const APP_ID = "0b454b5d";
  const APP_KEY = "1552110ad0be32ef1b404c9df35bcfff";

  const getApi = async () => {
    try {
      const response = await axios(
        `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${type}`
      );
      setFood(response?.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const addValue = (neww) => {
    setType(neww);
  };

  const handleClick = async () => {
    getApi();
  };

  return (
    <div className="Home">
      <div className="formdiv">
        <input
          type="text"
          name="food"
          onChange={(e) => setValue(e.target.value)}
          className="foodinput"
        />
        <button className="searchbutton" onClick={handleClick}>
          Search
        </button>
        <Select addValue={addValue} />
      </div>

      <div className="foods">
        {food?.map((item, index) => {
          return <Food item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
