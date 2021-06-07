import { useState } from "react";
import ExpenseListing from "./components/Expenses/ExpenseListing";
import NewExpense from "./components/NewExpense/NewExpense";

/**
 * Expense Tracker Application
 */
const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addNewExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <ExpenseListing expensesArray={expenses} />
    </>
  );
};

export default App;
