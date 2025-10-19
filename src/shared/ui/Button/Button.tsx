import clsx from "clsx";
import styles from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: any;
  variant: "buy" | "sell" | "cancel" | "confirm";
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "cancel",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.button, className, styles[variant])}
    >
      {children}
    </div>
  );
};

export default Button;
