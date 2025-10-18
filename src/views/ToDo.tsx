"use client";

import { FC, useEffect, useState } from "react";
import Tooltip from "../components/Tooltip";
import { IconExclamationCircle, IconX } from "@tabler/icons-react";
import "../styles/Views/toDo.css";
import { Checkbox } from "../components/Checkbox";

type ToDoItem = {
  id: string;
  toDo: string;
  done: boolean;
}

const ToDo: FC = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [toDoText, setToDoText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [filterIncomplete, setFilterIncomplete] = useState<boolean>(false);

  useEffect(() => {
    const storedItems = localStorage.getItem(`todo-items`);
    if (storedItems) {
      setToDoItems(JSON.parse(storedItems));
    }
  }, []);

  const addToDo = () => {
    const text = toDoText.trim();
    if (!text) return;
    
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto 
        ? crypto.randomUUID()
        : String(Date.now());

    localStorage.setItem(`todo-items`, JSON.stringify([...toDoItems, { id, toDo: text, done: false }]));
    
    setToDoItems(prev => [...prev, { id, toDo: text, done: false }]);
    setToDoText("");
  };

  const filteredList = toDoItems.filter(({ toDo }) => {
    const matchesSearch = toDo.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filterIncomplete ? !toDoItems.find(item => item.toDo === toDo)?.done : true;
    return matchesSearch && matchesFilter;
  });

  const finishedItems = toDoItems.filter(item => item.done);

  const toolTipText = "Here is a basic to do list! I use local storage as the DB since I dont have any external DB implemented yet.";

  return (
    <section className="toDoWrapper">
      <div className="toDoHeader">
        <p className="toDoHeaderText">To Do</p>
        <Tooltip text={toolTipText}><IconExclamationCircle className="info-icon" /></Tooltip>
      </div>
      <div className="toDoSearchWrapper">
        <p>{`${toDoItems.length} Items on the list, ${finishedItems.length} are completed`}</p>
        <input className="toDoSearch" value={searchText} placeholder="search" onChange={(e) => { setSearchText(e.target.value) }} />
        <div>
          <label htmlFor="incompleteFilter">Show Incomplete Only</label>
          <Checkbox id="incompleteFilter" checked={filterIncomplete} onChange={() => setFilterIncomplete(!filterIncomplete)} />
        </div>
      </div>
      <div className="addToDoWrapper">
        <input className="addToDoInput" placeholder="New To Do" value={toDoText} onChange={(e) => setToDoText(e.target.value)}/>
        <button onClick={addToDo}>
          Add To Do
        </button>
      </div>
      

      <h3>{"Current To Do's"}</h3>
      {filteredList.map((toDoItem) => (
        <div className="toDoItemWrapper" key={toDoItem.id}>
          <p className="toDoItemText">{toDoItem.toDo}</p>
          <div className="toDoItemActions">
            <Checkbox 
              id={`toDoCheckbox-${toDoItem.id}`}  
              checked={toDoItem.done} 
              onChange={(checked) => {
                setToDoItems(prev => prev.map(item => item.id === toDoItem.id ? { ...item, done: checked } : item));
              }} />
            <button
              type="button"
              className="toDoDeleteButton"
              onClick={() => setToDoItems(toDoItems.filter((item) => item.id !== toDoItem.id))}
            >
              <IconX className="toDoDeleteX" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ToDo;