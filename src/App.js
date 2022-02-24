import SearchMeal from "./components/SearchMeal";
import React, { useState, useEffect } from "react";
import MealList from "./components/MealList";
import SingleMeal from "./components/SingleMeal";
function App() {
  const axios = require("axios");
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(null);
  const [shuffledMeal, setShuffledMeal] = useState(null);
  const [isShuffleClicked, setShuffleClick] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const mealAddHandler = (text) => {
    setText(text);
  };
  const filterMealHandler = (id) => {
    setFilteredMeals(meals.filter((meal) => meal.idMeal === id));
  };
  const shuffleHandler = () => {
    setShuffleClick(true);
    // shuffleMealHandler();
    fetchData(URL, text);
    // const test = meals[Math.floor(Math.random * meals.length)];
    // console.log(test);
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
        >
          <h2>Search results for "typed name"</h2>
        </div>
        <div id="meals" className="meals d-flex">
          {isShuffleClicked === true || meals === null ? (
            <SingleMeal meals={meals} isShuffle={isShuffleClicked} />
          ) : (
            <MealList data={meals} onShow={filterMealHandler} />
          )}

          {/* {isShuffleClicked ? null : (
            <MealList data={meals} onShow={filterMealHandler} />
          )} */}
        </div>
        {filteredMeals && <SingleMeal meals={filteredMeals} />}
      </div>
    </div>
  );
}

export default App;
