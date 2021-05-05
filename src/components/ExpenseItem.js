import ExpenseDate from "./ExpenseItemDate";
import Card from "./Card";
import "./ExpenseItem.css";

/**
 * Expense Item component
 */
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate title={props.date} amount={props.amount} date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
