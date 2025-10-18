import React from "react";
import '../styles/Components/checkbox.css';

export const Checkbox: React.FC<{
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = ({ id, checked, onChange }) => {
  return (
    <label className="container">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="checkmark"></span>
    </label>
  );
}