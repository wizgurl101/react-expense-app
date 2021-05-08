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

  // array of expense items passed as a props
  const expenses = props.expensesArray;

  // get year selected from filter
  const selectYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card classname="expenses-listing">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYearFliter={selectYearFilterHandler}
        />
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
