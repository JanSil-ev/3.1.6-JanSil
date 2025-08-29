import { ReactNode } from "react";
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className="form-button" onClick={onClick}>
      {children}
    </button>
  );
};
