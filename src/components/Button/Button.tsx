import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import classNames from "classnames";
import '../Button/Button.module.scss'; 

export type ButtonType = "button" | "submit";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  variant?: "primary" | "secondary" | "branded-primary" | "tertiary";
  padding?: "medium" | "large";
  label?: string;
  onClick?: (event: React.MouseEvent) => void;
  isDisabled: boolean | undefined;
  icon?: React.ReactNode; 
  isFullWidth?: boolean;
  iconPosition: 'left' | 'right';
}

const Button: React.FC<IButtonProps> = ({
  variant = "primary",
  padding = "medium",
  onClick,
  label,
  isDisabled = false,
  icon,
  isFullWidth,
  iconPosition,
  ...rest
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        {
          btn__Disabled: isDisabled
        },
        "btn",
        `btn__${padding}`,
        `btn__${variant}`,
        `btn__${iconPosition}`,
        {
          btn__fullWidth: isFullWidth
        }

      )}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      
      <span className={classNames( "button-text", {btn__fullWidth: isFullWidth})}>
        {iconPosition === 'left' && icon && <span className="button-icon">{icon}</span>}
        {label}
        {iconPosition === 'right' && icon && <span className="button-icon">{icon }</span>}
      </span>
    </button>
  );
};

export default Button;
