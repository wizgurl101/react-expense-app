import ExpenseListing from "./components/Expenses/ExpenseListing";
import NewExpense from "./components/NewExpense/NewExpense";

/**
 * Expense Tracker Application
 */
const App = () => {
  // test data
  const expenses = [
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

  return (
    <>
      <NewExpense />
      <ExpenseListing expensesArray={expenses} />
    </>
  );
};

export default App;
