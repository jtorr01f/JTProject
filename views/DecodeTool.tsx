"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { ChangeEvent, useRef, useState } from "react";
import "../styles/viewStyles/decodeTool.styles.css";

const DecodeTool = () => {
  const [textToDecode, setTextToDecode] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const decodeRef = useRef(null);
  const copyButtonRef = useRef(null);
  const clearButtoRef = useRef(null);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextToDecode(e.target.value);
  };

  const onDecodeClicked = () => {
    setDecodedText(atob(textToDecode));
  };
  const onClearTextClicked = () => {
    setTextToDecode("");
  };
  const onCopyClicked = () => {
    navigator.clipboard.writeText(decodedText);
  };

  return (
    <div className="decode-wrapper">
      <TextInput
        id="decodeTextArea"
        inputType="area"
        areaSize="lg"
        inputValue={textToDecode}
        onAreaChange={handleTextChange}
      />
      <div className="decode-button-wrapper">
        <Button
          id="decodeTextButton"
          onClick={onDecodeClicked}
          buttonRef={decodeRef}
          buttonText="Decode"
          buttonType="primary"
        />
        {textToDecode.length > 0 && (
          <Button
            id="clearDecodedTextButton"
            onClick={onClearTextClicked}
            buttonRef={clearButtoRef}
            buttonText="Clear Text"
            buttonType="secondary"
          />
        )}
      </div>

      <div className="decode-results-wrapper">
        {decodedText.length > 0 && (
          <>
            <label htmlFor="decode-results">Results</label>
            <p className="decode-results" id="decode-results">{decodedText}</p>
            <Button
              id="copyDecodedTextButton"
              onClick={onCopyClicked}
              buttonRef={copyButtonRef}
              buttonText="Copy Text"
              buttonType="secondary"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DecodeTool;
