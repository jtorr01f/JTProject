import { FC } from "react";

interface RadioOptions {
  options: { value: string, label: string }[];
  selectedValue: string;
  setSelectedValue: (eventValue) => void
}

export const RadioGroupComponent: FC<RadioOptions> = ({ options, selectedValue, setSelectedValue }) => {
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {options.map((option) => (
        <div key={option.value} style={{ margin: '.7rem' }}>
          <label>
            <input
              type="radio"
              name="radioGroup"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}