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
}: TextInputProps) => (
  <div className="input-wrapper">
    {inputLabel && (
      <label className="label" htmlFor={id}>{inputLabel}</label>
    )}
    {inputType === "area" ? (
      <textarea
        id={id}
        className={`input area ${areaSize || ""}`}
        value={inputValue}
        placeholder={placeholder}
        onChange={onAreaChange}
      />) 
      : (
        <input
          id={id}
          className="input"
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder || ""}
        />
      )}
  </div>
);

export default TextInput;
