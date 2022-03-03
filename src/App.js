import SearchMeal from "./components/SearchMeal";
import React, { useState, useEffect } from "react";
import MealList from "./components/MealList";
import SingleMeal from "./components/SingleMeal";
import SuffledMeal from "./components/SuffledMeal";
function App() {
  const axios = require("axios");
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(null);
  const [isShuffleClicked, setShuffleClick] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const mealAddHandler = (text) => {
    if (text === "") {
      alert("Please enter valid meal's name.");
    }
    setText(text);
    setShuffleClick(false);
  };
  const filterMealHandler = (id) => {
    setFilteredMeals(meals.filter((meal) => meal.idMeal === id));
  };
  const shuffleHandler = () => {
    setShuffleClick(true);
    fetchData(URL, text);
  };
  const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const meal = meals[randomIndex];
  };
  useEffect(() => {
    if (text !== "") {
      fetchData(URL, text);
    }
  }, [text]);
  const fetchData = (URL, text) => {
    axios
      .get(URL + text)
      .then((res) => {
        if (res.status !== 200) {
          throw Error("couldn't fetch data");
        }
        return setMeals(res.data.meals);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="App">
      <div className="main__container container">
        <h1 style={{ textAlign: "center" }}>Meal Finder</h1>
        <SearchMeal getInput={mealAddHandler} onSuffle={shuffleHandler} />
        <div
          id="result__handling"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        ></div>
        <div id="meals" className="meals">
          {isShuffleClicked === true ? null : (
            <h2 style={{ textAlign: "center" }}>Search results for {text}</h2>
          )}
          <div className="d-flex">
            {isShuffleClicked === false && meals ? (
              <MealList data={meals} onShow={filterMealHandler} />
            ) : isShuffleClicked === true && meals ? (
              <SuffledMeal meals={meals} />
            ) : null}
          </div>
        </div>
        {isShuffleClicked === false && filteredMeals ? (
          <SingleMeal meals={filteredMeals} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
