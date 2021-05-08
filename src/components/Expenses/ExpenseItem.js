import { useState } from "react";

import ExpenseDate from "./ExpenseItemDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/**
 * Expense Item component
 */
const ExpenseItem = (props) => {
  // state variables
  const [title, setTitle] = useState(props.title);

  // change title button event handler
  const clickHandler = () => {
    setTitle("Updated title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate title={props.date} amount={props.amount} date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
