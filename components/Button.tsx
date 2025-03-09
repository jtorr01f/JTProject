import { ReactNode, Ref } from "react";
import "../styles/componentStyles/button.styles.css";

export type ButtonProps = {
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
      {buttonIcon || null}
      <span className="button-text">
        {buttonText}
      </span>
    </button>
  );
};

export default Button;
