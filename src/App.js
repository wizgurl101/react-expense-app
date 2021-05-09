import { useState } from "react";
import ExpenseListing from "./components/Expenses/ExpenseListing";
import NewExpense from "./components/NewExpense/NewExpense";

// dummy data
const dummyData = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 299.99,
    date: new Date(),
  },
  {
    id: "e2",
    title: "Life Insurance",
    amount: 19.99,
    date: new Date(),
  },
  {
    id: "e3",
    title: "Netflix",
    amount: 9.99,
    date: new Date(),
  },
];

/**
 * Expense Tracker Application
 */
const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

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
