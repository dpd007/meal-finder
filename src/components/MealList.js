const MealList = (props) => {
  return (
    <div>
      {props.data.map((meal) => (
        <div className="meal" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MealList;
