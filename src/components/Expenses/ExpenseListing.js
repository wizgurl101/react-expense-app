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
  const [filteredYear, setFilteredYear] = useState("2021");

  // get year selected from filter
  const selectYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // array of expenses
  const filteredExpenses = props.expensesArray.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card classname="expenses-listing">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYearFliter={selectYearFilterHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseListing;
