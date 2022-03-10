import React, { useState, useEffect } from "react";
const SearchMeal = (props) => {
  const [inputText, setInputText] = useState("");
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const searchHandler = () => {
    props.getInput(inputText);
    setInputText("");
  };
  const shuffller = () => {
    props.onSuffle();
  };
  return (
    <div className="search__container">
      <input
        type="text"
        name="searchText"
        placeholder="Search for meals or keywords"
        id="searchText"
        value={inputText}
        onChange={inputChangeHandler}
      />
      <button id="submitBtn" onClick={searchHandler}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
      <button id="shuffleBtn" onClick={shuffller}>
        <i className="fa fa-random" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default SearchMeal;
