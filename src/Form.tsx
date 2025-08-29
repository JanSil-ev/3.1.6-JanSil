import { ReactNode, FormEvent, createContext } from 'react';
import { Row } from './components/Row/Row';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';


interface FormContextType {
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProps {
  children: ReactNode;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export const Form = ({ children, setFormData }: FormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <FormContext.Provider value={{ setFormData }}>
      <form className="form" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

Form.Row = Row;
Form.Input = Input;
Form.Button = Button;

export { FormContext };