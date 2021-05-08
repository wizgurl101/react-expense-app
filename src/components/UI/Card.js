import "./Card.css";
/**
 * Custom Card component for containing all listing expense items
 */
const Card = (props) => {
  // String containing the css class idenifier
  const styleClasses = "card " + props.className;

  // to make a wrapper component using props.children
  return <div className={styleClasses}>{props.children}</div>;
};

export default Card;
