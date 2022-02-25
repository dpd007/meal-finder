const SuffledMeal = (props) => {
  const id = props.meals[Math.floor(Math.random() * props.meals.length)].idMeal;
  const meal = props.meals.filter((meal) => meal.idMeal === id);
  const ingredients = [];
  const measures = [];
  const getIngredients = (meal) => {
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`] !== "" && meal[`strMeasure${i}`] !== "") {
        ingredients.push(meal[`strIngredient${i}`]);
        measures.push(meal[`strMeasure${i}`]);
      }
    }
  };
  const ingredientsList = (meal) => {
    getIngredients(meal);
    return ingredients.map((ingredient, index) => (
      <li key={index}>
        {ingredient}-{measures[index]}
      </li>
    ));
  };
  return (
    <div id="single__meal">
      {meal.map((meal) => (
        <div className="single__meal" key={meal.idMeal}>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="single__meal__info">
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
          </div>
          <div className="main">
            <p>{meal.strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>{ingredientsList(meal)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuffledMeal;
