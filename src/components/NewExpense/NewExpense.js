import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
/**
 * NewExpenses component contain the form to add a new expense
 */
const NewExpense = (props) => {
  //  get form data to pass to App.js
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    // send the new expense object to App.js
    props.onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
