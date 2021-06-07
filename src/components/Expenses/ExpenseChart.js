import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  // array of chart object containing total sum of expenses amount per month in a given year
  // with each month having an intial value of 0 expenses
  const expenseChartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // loop through the array of expenses in a given year to update the
  // number of expenses for each month
  for (const expense of props.expenses) {
    // note getMonth starts at 0 for January
    const expenseMonth = expense.date.getMonth();
    // getMonth gives the exact index number for each month
    expenseChartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart chartDataPoints={expenseChartDataPoints} />;
};

export default ExpenseChart;
