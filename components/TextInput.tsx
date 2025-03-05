import { ChangeEvent } from "react";
import "../styles/componentStyles/textInput.styles.css";

type TextInputProps = {
  id: string;
  inputType: string;
  placeholder?: string;
  inputLabel?: string;
  inputValue: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onAreaChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  areaSize?: "sm" | "lg";
};

const TextInput = ({
  id,
  inputType,
  placeholder,
  inputLabel,
  inputValue,
  areaSize,
  onAreaChange,
  onInputChange,
}: TextInputProps) => {
  const Area = () => (
    <textarea
      id={id}
      className={`input area ${areaSize || ""}`}
      value={inputValue}
      placeholder={placeholder}
      onChange={onAreaChange}
    />
  );
  const Input = () => (
    <input
      id={id}
      className="input"
      value={inputValue}
      onChange={onInputChange}
      placeholder={placeholder || ""}
    />
  );
  return (
    <>
      {inputLabel && (
        <label className="label" htmlFor={id} title={inputLabel} />
      )}
      {inputType === "area" ? <Area /> : <Input />}
    </>
  );
};

export default TextInput;
