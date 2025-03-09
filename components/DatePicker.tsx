import DatePicker from "react-datepicker";
import "@/styles/componentStyles/datepicker.styles.css";

type DateInputProps = {
  id: string;
  inputLabel: string;
  selectedDate: Date;
  onDateSelected: (date: Date | null) => void;
}

const DateInput = ({ id, selectedDate, onDateSelected, inputLabel }: DateInputProps) => (
  <div className="date-picker-wrapper">
    <label className="label" htmlFor={id}>{inputLabel}</label>
    <DatePicker
      id={id}
      className="date-picker"
      selected={selectedDate} 
      onSelect={onDateSelected}
    />
  </div>
)

export default DateInput