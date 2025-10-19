import React from "react";
import '../styles/Components/checkbox.css';

export const Checkbox: React.FC<{
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}> = ({ id, checked, onChange, disabled }) => {
  return (
    <label className="container">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled} />
      <span className={`checkmark ${disabled ? 'disabled' : ''}`}></span>
    </label>
  );
}