import React from "react";
const ButtonV4 = ({
  children,
  color = "black",
  background = "1px solid black",
  outline,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  backgroundColor,
  padding,
}) => {
  console.log({ children, color, background, outline, primary, danger });

  const btnStyle = {
    color: color,
    backgroundColor,
    borderRadius: background,
    cursor: "pointer",
    borderRadius: "1px",
    padding,
  };

  if (primary) {
    btnStyle["backgroundColor"] = " #0d6efd";
  }
  if (secondary) {
    btnStyle["backgroundColor"] = "#6c757d";
  }

  if (success) {
    btnStyle["backgroundColor"] = " #198754";
  }

  if (danger) {
    btnStyle["backgroundColor"] = " #dc3545";
  }
  if (warning) {
    btnStyle["backgroundColor"] = " #ffc107";
  }
  if (info) {
    btnStyle["backgroundColor"] = " #0dcaf0";
  }
  if (light) {
    btnStyle["backgroundColor"] = " #f18315";
  }
  if (padding) {
    btnStyle["backgroundColor"] = " #f115ed";
    btnStyle["padding"] = " 10px 156px";
  }

  return <button style={btnStyle}>{children}</button>;
};
export default ButtonV4;
