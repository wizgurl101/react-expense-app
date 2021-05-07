import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseListing.css";

/**
 * List all expense items
 */
function ExpenseListing(props) {
  // array of expense items passed as a props
  const expenses = props.expensesArray;
  return (
    <Card classname="expenses-listing">
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
  );
}

export default ExpenseListing;
