'use client';
import React, { useState } from "react";
import { opCharacters } from "@/src/constants/onePieceCharacters";
import Link from "next/link";
import '../styles/onePieceTwentyQuestions.css';
import Tooltip from "../components/Tooltip";
import { IconExclamationCircle } from "@tabler/icons-react";
import useWindowSize from "../hooks/useWindowSize";

type Character = {
  name?: string;
  additionalInformation?: string;
};

export default function OnePieceTwentyQuestions() {
  const [characterInfo, setCharacterInfo] = useState<Character | null>(null);
  const { width } = useWindowSize();

  const onCharacterGenerated = () => {
    const randomIndex = Math.floor(Math.random() * opCharacters.length);
    setCharacterInfo(opCharacters[randomIndex]);
  }

  const isSmallScreen = width < 650;

  const tooltipText = "Click the Jolly Roger to randomly generate a character. Once you know your character, " 
  + "your opponent will ask questions to narrow them down while you do the same with them, the first to guess the character, wins! " 
  + "If you dont know that character, click on them to go to the character wiki! happy guessing!";

  return (
    <section style={{ width: isSmallScreen ? '350px' : '100%' }}>
      <div className="opWrapper">
        <div className="opHeader">
          <p className="opHeaderText" style={{ marginRight: '10px' }}>One Piece Twenty Questions</p>
          <Tooltip text={tooltipText}>
            <IconExclamationCircle className="bingo-info-icon" />
          </Tooltip>
        </div>
        <p className="opHeaderSubtext">Currently there are {opCharacters.length} characters in the List</p>
        <button className="opButton" onClick={onCharacterGenerated} />
        <button className="clearButton" onClick={() => setCharacterInfo(null)}>Clear</button>
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
      </div>
    </section>
  );
}