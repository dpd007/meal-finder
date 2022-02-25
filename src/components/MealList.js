const MealList = (props) => {
  const showHandler = (id) => {
    props.onShow(id);
  };
  return (
    <div className="row">
      {props.data.map((meal) => (
        <div
          className="card meal"
          key={meal.idMeal}
          style={{
            width: "18rem",
            marginLeft: "5px",
            marginRight: "5px",
            marginTop: "10px",
          }}
        >
          <img
            src={meal.strMealThumb}
            className="card-img-top"
            alt={meal.strMeal}
            style={{ padding: "15px" }}
            onClick={() => {
              showHandler(meal.idMeal);
            }}
          />
          <div className="card-body meal-info" style={{ color: "black" }}>
            <p
              className="card-text"
              style={{ fontSize: "18px", textAlign: "center" }}
            >
              {meal.strMeal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
