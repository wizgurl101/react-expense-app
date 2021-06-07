import "./ChartBar.css";

const ChartBar = (props) => {
  //  determine the height of the chart-bar
  // initial value of 0%, this is the css style value for height
  let barFillHeight = "0%";

  // check that there is an expanse in a given month, therefore
  // max value of the chart data point be greater than zero
  if (props.maxValue > 0) {
    // determine the height of the fill bar and convert it back to a string
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
