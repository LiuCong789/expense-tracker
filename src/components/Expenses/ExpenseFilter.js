import "./ExpenseFilter.css";

import React from "react";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label htmlFor="">Filter by year</label>
        <select
          name=""
          id=""
          value={props.selected}
          onChange={dropDownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
