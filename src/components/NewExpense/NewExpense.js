import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
/**
 * NewExpenses component contain the form to add a new expense
 */
const NewExpense = (props) => {
  // state variable to determine to show add new expense button
  // or show the form to edit an expanse
  const [isEditing, setIsEditing] = useState(false);

  // FUNCTIONS
  //  get form data to pass to App.js
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    // send the new expense object to App.js
    props.onAddNewExpense(expenseData);

    // close the expanse form
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // prop named onCancel is pass to the child component to reference this function
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>+ Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
