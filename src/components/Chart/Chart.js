import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div classNamr="chart">
      {props.chartDataPoints.map((chartDataPoint) => (
        <CharBar
          key={chartDataPoint.label}
          value={chartDataPoint.value}
          maxValue={null}
          label={chartDataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
