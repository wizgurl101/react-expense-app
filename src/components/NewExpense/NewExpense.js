import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
/**
 * NewExpenses component contain the form to add a new expense
 */
const NewExpense = () => {
  return (
    <div className="new-expense">
      <NewExpenseForm />
    </div>
  );
};

export default NewExpense;
