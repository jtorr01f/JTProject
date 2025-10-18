'use client';
import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { opCharacters } from "@/src/constants/onePieceCharacters";
import Link from "next/link";
import '../styles/onePieceTwentyQuestions.css';
import Tooltip from "../components/Tooltip";
import { IconExclamationCircle } from "@tabler/icons-react";
import { RadioGroupComponent } from "../components/RadioGroup";
import { useWindowSize } from "../hooks/useWindowSize";

type Character = {
  name?: string;
  additionalInformation?: string;
};

type VoidFunc = () => void;
type EventFunc = (e: ChangeEvent<HTMLInputElement>) => void
type QuestionOptions = {
  id: number,
  question: string,
  answer: string
}
const OnePieceTwentyQuestions: FC = () => {
  const [characterInfo, setCharacterInfo] = useState<Character | null>(null);
  const [questionText, setQuestionText] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [questionsList, setQuestionsList] = useState<QuestionOptions[]>([]);

  const { width } = useWindowSize();

  const onCharacterGenerated: VoidFunc = () => {
    const randomIndex = Math.floor(Math.random() * opCharacters.length);
    setCharacterInfo(opCharacters[randomIndex]);
  }

  const resetInfo: VoidFunc = () => setCharacterInfo(null);

  const updateQuestionText: EventFunc = (e) => setQuestionText(e.target.value);

  const updateQuestionList: VoidFunc = () => {
    const currentSet = { id: questionsList.length, question: questionText, answer: selectedValue }
    const newArray = [...questionsList, currentSet];
    if (questionText.length > 0 && selectedValue.length > 0) {
      setQuestionText("");
      setSelectedValue("");
      setQuestionsList(newArray);
    }
  }

  const tooltipText = "Click the Jolly Roger to randomly generate a character. Once you know your character, "
  + "your opponent will ask questions to narrow them down while you do the same with them, the first to guess the character, wins! "
  + "Use the question tracker to log what you've asked about their character."
  + "If you dont know that character, click on them to go to the character wiki! happy guessing!";

  const options = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'kinda', label: 'Kinda' },
      { value: 'inconclusive', label: 'Inconclusive' },
    ];

  return (
    <section>
      <div className="opWrapper">
        <div className="opHeader">
          <p className="opHeaderText" style={{ marginRight: '10px' }}>One Piece Twenty Questions</p>
          <Tooltip text={tooltipText}>
            <IconExclamationCircle className="bingo-info-icon" />
          </Tooltip>
        </div>
        <p className="opHeaderSubtext">Currently there are {opCharacters.length} characters in the List</p>
        <button className="opButton" onClick={onCharacterGenerated} />
        <button className="clearButton" onClick={resetInfo}>Clear</button>
        <p className="opLinkHeader">
          {characterInfo ? "Your Character is..." : "Click the Jolly Roger to get your character!"}
        </p>
        {characterInfo && (
          <div>
            <Link
              className="opLink"
              href={characterInfo.additionalInformation} 
              target="_blank" 
              rel="noopener noreferrer">
              {characterInfo.name}
            </Link>
          </div>
        )}
        <div className="opQuestionWrapper">
          <p>Notes</p>
          <div className="opQuestionBtnGroup">
            <input className="opQuestion" placeholder="Question Asked" value={questionText} onChange={updateQuestionText} />
            <button className="opAddButton" onClick={updateQuestionList}>Update List</button>
          </div>
          <RadioGroupComponent options={options} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <ul className="opList">
            {questionsList.map((item) => (
              <li className="opListItem" key={item.id}>{`- ${item.question}:  ${item.answer}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OnePieceTwentyQuestions;