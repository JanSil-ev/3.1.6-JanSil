import { ReactNode } from "react";
import "./Row.css";

interface RowProps {
  children: ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return <div className="form-row">{children}</div>;
};
