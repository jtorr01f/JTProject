"use client";
import { useState } from "react";
import { IconArrowBackUp, IconConfetti, IconExclamationCircle } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import '../styles/viewStyles/minecraftBingo.styles.css';
import Tooltip from "@/components/Tooltip";

type BingoItem = {
  key: string;
  value: string;
  number: number;
};

const Dashboard = () => {
  const [bingo, setBingo] = useState<BingoItem[]>([]);
  const bingoObj = ["B", "I", "N", "G", "O"];
  const items = [
    "Glowberry",
    "Cobweb",
    "Nether Star",
    "Breeze Rod",
    "Cake",
    "Pufferfish",
    "Pigstep",
    "Trident",
    "Golden Carrot",
    "Blaze Powder",
    "Emerald",
    "Redstone Dust",
    "Golden Apple",
    "Sniffer Egg",
    "Elytra",
    "Eye of Ender",
    "Trial Key",
    "Turtle Egg",
    "Red Coral",
    "Torchflower",
    "Amethyst",
    "Totem of Undying",
    "Exp Bottle",
    "Slime Ball",
  ];

  const tooltipText = "This simple feature is Minecraft Bingo! It was created to help a friend with an event they were hosting on a minecraft server. " +
  "The premise is simple, its bingo, but replace the numbers with minecraft items! Click the left button for a Bingo item, select the right to undo if need be.";

  const onItemUndo = () => {
    setBingo(bingo.slice(0, -1));
  };

  const getBingo = () => {
    const bingoItem: string = items[Math.floor(Math.random() * items.length)];
    const bingoLetter: string = bingoObj[Math.floor(Math.random() * bingoObj.length)];
    const newBingo: string = `${bingoLetter} - ${bingoItem}`;
    let isUnique = true;
    for(let i = 0; i < bingo.length; i++) {
      if (bingo[i].value === newBingo) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      setBingo([
        ...bingo,
        {
          key: uuidv4(),
          value: newBingo,
          number: bingo.length + 1,
        },
      ]);
    } else {
      return getBingo();
    }
  };

  return (
    <div className="bingo-wrapper">
      <div className="bingo-desc">
        <h3>Minecraft Bingo</h3>
        <Tooltip text={tooltipText}>
          <IconExclamationCircle className="bingo-info-icon" />
        </Tooltip>
      </div>
      <div className="bingo-header">
        <IconConfetti className="bingo-button" size={50} onClick={getBingo} />
        <IconArrowBackUp
          className="bingo-button"
          onClick={onItemUndo}
          size={50}
        />
      </div>
      <div className="bingo-list-wrapper">
        <ul className="bingo-items">
          {bingo.map((item: BingoItem) => {
            return (
              <div className="bingo-item-wrapper"id={item.key} key={item.key}>
                <li className="bingo-item">{`${item.number}.) ${item.value}`}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard
