import { ReactNode, Ref } from "react";
import "../styles/componentStyles/button.styles.css";

interface ButtonProps {
  id: string;
  onClick: () => void;
  buttonText: string;
  buttonType: "primary" | "secondary";
  buttonRef: Ref<HTMLButtonElement>;
  buttonIcon?: ReactNode;
}

const Button = ({
  id,
  onClick,
  buttonText,
  buttonType,
  buttonRef,
  buttonIcon,
}: ButtonProps) => {
  return (
    <button
      className={`button ${buttonType}`}
      id={id}
      ref={buttonRef}
      onClick={onClick}
    >
      {buttonText}
      {buttonIcon || null}
    </button>
  );
};

export default Button;
