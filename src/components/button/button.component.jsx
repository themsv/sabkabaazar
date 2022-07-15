import "./button.styles.css";

const Button = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};

export default Button;
