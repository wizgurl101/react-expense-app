import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // transform the dataPoint object to a number using map
  // this will give an array of all the expenses amount called dataPointValues
  const dataPointValues = props.chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  // find the maximum expenses amount in a given year
  // use the spread operator to pull out each element in the dataPointValues array
  // to be used as agruments for Math max function
  const totalMaxAmount = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.chartDataPoints.map((chartDataPoint) => (
        <ChartBar
          key={chartDataPoint.label}
          value={chartDataPoint.value}
          maxValue={totalMaxAmount}
          label={chartDataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
