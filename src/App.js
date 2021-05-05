import ExpenseItem from "./components/ExpenseItem";

/**
 * Expense Tracker Application
 */
function App() {
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
      amount: 9.99,
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
    </>
  );
}

export default App;
