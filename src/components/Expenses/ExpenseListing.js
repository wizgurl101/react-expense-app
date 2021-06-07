import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../FilterExpenses/ExpenseFilter";
import Card from "../UI/Card";
import "./ExpenseListing.css";

/**
 * List all expense items
 */
const ExpenseListing = (props) => {
  // state variable
  const [filteredYear, setFilteredYear] = useState("2021");

  // get year selected from filter
  const selectYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // array of expenses with the selectedn year
  const filteredExpenses = props.expensesArray.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  let expensesContent = <p>No expenses found.</p>;

  // if expenses array is not empty, display expenses listing for the selected year
  if (filteredExpenses.length !== 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card classname="expenses-listing">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYearFliter={selectYearFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpenseListing;
