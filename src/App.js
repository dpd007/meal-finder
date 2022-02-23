import SearchMeal from "./components/SearchMeal";
import React, { useState, useEffect } from "react";
import MealList from "./components/MealList";
function App() {
  const axios = require("axios");
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState(null);
  // const [isFetchDone, setIsFetchDone] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const mealAddHandler = (text) => {
    setText(text);
  };
  useEffect(() => {
    if (text !== "") {
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
    }
  }, [text]);

  return (
    <div className="App">
      <div className="main__container container">
        <h1 style={{ textAlign: "center" }}>Meal Finder</h1>
        <SearchMeal getInput={mealAddHandler} />
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
        <div id="meals" className="meals">
          {meals && <MealList data={meals} />}
        </div>
      </div>
    </div>
  );
}

export default App;
