import cn from "classnames";
import { FC } from "react";

import styles from "./styles.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button: FC<Props> = ({
  className = "",
  children,
  disabled = false,
  onClick = undefined,
  type = "button",
}) => (
  <button
    className={cn(styles.button, className)}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
