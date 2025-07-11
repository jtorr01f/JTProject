"use client";
import { useState, useEffect } from "react";
import { IconArrowBackUp, IconConfetti, IconExclamationCircle } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import '../styles/viewStyles/minecraftBingo.styles.css';
import Tooltip from "@/components/Tooltip";

type BingoItem = {
  key: string;
  value: string;
  number: number;
};

const items = [
  "Glowberry", "Cobweb", "Nether Star", "Breeze Rod", "Cake", 
  "Pufferfish", "Pigstep", "Trident", "Golden Carrot", "Blaze Powder", 
  "Emerald", "Redstone Dust", "Golden Apple", "Sniffer Egg", "Elytra", 
  "Eye of Ender", "Trial Key", "Turtle Egg", "Red Coral", "Torchflower", 
  "Amethyst", "Totem of Undying", "Exp Bottle", "Slime Ball",
];
const bingoObj = ["B", "I", "N", "G", "O"];

const getAllBingoCombinations = () => {
  const all = [];
  for (const letter of bingoObj) {
    for (const item of items) {
      all.push(`${letter} - ${item}`);
    }
  }
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
};

const Dashboard = () => {
  const [bingo, setBingo] = useState<BingoItem[]>([]);
  const [bingoPool, setBingoPool] = useState<string[]>([]);

  useEffect(() => {
    setBingoPool(getAllBingoCombinations());
  }, []);

  const tooltipText = "This simple feature is Minecraft Bingo! " + 
    "It was created to help a friend with an event they were hosting on a minecraft server. " +
    "The premise is simple, it's bingo, but replace the numbers with Minecraft items! " + 
    "Click the left button for a Bingo item, select the right to undo if need be.";

  const onItemUndo = () => {
    if (bingo.length === 0) return;
    const lastItem = bingo[bingo.length - 1];
    setBingoPool([lastItem.value, ...bingoPool]);
    setBingo(bingo.slice(0, -1));
  };

  const getBingo = () => {
    if (bingoPool.length === 0) {
      alert("Oopsie doopsie! No more items left in the pool! If someone hasnt won by now, they probably never will!");
      return;
    }
    const [next, ...rest] = bingoPool;
    setBingoPool(rest);
    setBingo([
      ...bingo,
      {
        key: uuidv4(),
        value: next,
        number: bingo.length + 1,
      },
    ]);
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
        <IconArrowBackUp className="bingo-button" onClick={onItemUndo} size={50} />
      </div>
      <div className="bingo-list-wrapper">
        <ul className="bingo-items">
          {bingo.map((item: BingoItem) => (
            <div className="bingo-item-wrapper" id={item.key} key={item.key}>
              <li className="bingo-item">{`${item.number}.) ${item.value}`}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;