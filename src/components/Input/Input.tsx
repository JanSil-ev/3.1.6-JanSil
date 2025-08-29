import { ChangeEvent, useContext } from "react";
import { FormContext } from "../../Form";
import "./Input.css";

interface InputProps {
  id: string;
  placeholder: string;
}

export const Input = ({ id, placeholder }: InputProps) => {
  const context = useContext(FormContext);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  context?.setFormData(prevData => ({
    ...prevData,
    [id]: e.target.value
  }));
};

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="form-input"
      onChange={handleChange}
    />
  );
};
