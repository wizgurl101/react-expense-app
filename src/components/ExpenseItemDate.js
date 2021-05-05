import "./ExpenseItemDate.css";
/**
 * Render the date of an expense item
 */
function ExpenseItemDate(props) {
  // format date into month, year and day variables
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item-date">
      <div className="expense-item-date__month">{month}</div>
      <div className="expense-item-date__year">{year}</div>
      <div className="expense-item-date__day">{day}</div>
    </div>
  );
}

export default ExpenseItemDate;
