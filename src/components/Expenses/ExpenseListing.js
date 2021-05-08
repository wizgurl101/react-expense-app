import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../FilterExpenses/ExpenseFilter";
import Card from "../UI/Card";
import "./ExpenseListing.css";

/**
 * List all expense items
 */
const ExpenseListing = (props) => {
  // state variables
  const [expensesYear, setExpensesYear] = useState("");

  // array of expense items passed as a props
  const expenses = props.expensesArray;

  // get year selected from filter
  const selectYearFilterHandler = (filterData) => {
    console.log(filterData);
    setExpensesYear(filterData);
  };

  return (
    <div>
      <Card classname="expenses-listing">
        <ExpenseFilter onSelectYearFliter={selectYearFilterHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseListing;
