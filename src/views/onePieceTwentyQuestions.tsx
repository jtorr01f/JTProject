'use client';
import React, { useState } from "react";
import { opCharacters } from "@/src/constants/onePieceCharacters";
import Link from "next/link";
import '../styles/onePieceTwentyQuestions.css';
import Tooltip from "../components/Tooltip";
import { IconExclamationCircle } from "@tabler/icons-react";

type Character = {
  name?: string;
  additionalInformation?: string;
};

export default function OnePieceTwentyQuestions() {
  const [characterInfo, setCharacterInfo] = useState<Character | null>(null);
  const onCharacterGenerated = () => {
    const randomIndex = Math.floor(Math.random() * opCharacters.length);
    setCharacterInfo(opCharacters[randomIndex]);
  }

  const tooltipText = "Click the Jolly Roger to randomly generate a character. Once you know your character, " 
  + "your opponent will ask questions to narrow them down while you do the same with them, the first to guess the character, wins! " 
  + "If you dont know that character, click on them to go to the character wiki! happy guessing!";

  return (
    <section>
      <div className="button-link">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ marginRight: '10px' }}>One Piece Twenty Questions</h1>
          <Tooltip text={tooltipText}>
            <IconExclamationCircle className="bingo-info-icon" />
          </Tooltip>
        </div>

        <h3>Currently there are {opCharacters.length} characters in the List</h3>
        <button className="button" onClick={onCharacterGenerated} />
        <button style={{ marginTop: '20px', marginBottom: '20px', backgroundColor: 'grey', color: 'white', padding: '10px',  }} onClick={() => setCharacterInfo(null)}>Clear</button>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px white solid', borderRadius: '8px', width: '600px', padding: '20px' }}>
          <h3>
            {characterInfo ? "Your Character is..." : "Click the Jolly Roger to get your character!"}
          </h3>
          {characterInfo && (
          <div>
            <Link
              className="link"
              href={characterInfo.additionalInformation} 
              target="_blank" 
              rel="noopener noreferrer">
              {characterInfo.name}
            </Link>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}