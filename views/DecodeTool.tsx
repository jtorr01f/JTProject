"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { ChangeEvent, useRef, useState } from "react";
import "../styles/viewStyles/decodeTool.styles.css";
import Tooltip from "@/components/Tooltip";
import { IconExclamationCircle } from "@tabler/icons-react";

const DecodeTool = () => {
  const [textToDecode, setTextToDecode] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const decodeRef = useRef(null);
  const copyButtonRef = useRef(null);
  const clearButtonRef = useRef(null);
  const clearResultsButtonRef = useRef(null);

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
  const onClearResultsClicked = () => {
    setDecodedText("");
  }

  const isValidURL = (text: string)=> {
    try {
      new URL(text);
      return true;
    } catch (error) {
      if (error instanceof Error) {
        return false;
      } else {
        console.error('An unknown error occurred:', error);
        return false;
      }    
    }
  }

  const tooltipText = "This is a simple url decoder tool! It was created to help me with a coding challenge in an application. " 
    + "Simply put in encoded base64 url text and BOOM! You have yourself a decoded, clickable link "


  return (
    <div className="decode-wrapper">
      <div className="decode-header">
        <h3>Base64 URL Decoder</h3>
        <Tooltip text={tooltipText}>
          <IconExclamationCircle className="decode-info-icon"/>
        </Tooltip>
      </div>
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
            buttonRef={clearButtonRef}
            buttonText="Clear Text"
            buttonType="secondary"
          />
        )}
      </div>

      <div className="decode-results-wrapper">
       {decodedText.length > 0 && (
          <>
            <label htmlFor="decode-results"><h4>Results</h4></label>
            {isValidURL(decodedText) ? (<a className="decode-results" id="decode-results" href={decodedText}>{decodedText}</a>) 
              : (<p className="decode-results" id="decode-results">{decodedText}</p>)}
              <div className="results-button-wrapper">
                <Button
                  id="copyDecodedTextButton"
                  onClick={onCopyClicked}
                  buttonRef={copyButtonRef}
                  buttonText="Copy Text"
                  buttonType="secondary"
                />
                <Button
                  id="clearDecodedTextButton"
                  onClick={onClearResultsClicked}
                  buttonRef={clearResultsButtonRef}
                  buttonText="Clear Results"
                  buttonType="secondary"
                />
              </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DecodeTool;
