import React from "react";
import classNames from "classnames";
import "./button.scss";

export interface ButtonProps {
  type?: "primary" | "secondary" | "branded-primary" | "tertiary";
  buttonStyle?: "base" | "rounded";
  textColor?: string;
  backgroundColor?: string;
  size?: "medium" | "large";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  type = "primary",
  buttonStyle = "base",
  textColor,
  backgroundColor,
  size = "medium",
  onClick,
  label,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "btn",
        `btn__${size}`,
        `btn__${type}`,
        `btn__${buttonStyle}`
      )}
      style={textColor ? { color: textColor } : {}, backgroundColor ? {background: backgroundColor} : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
