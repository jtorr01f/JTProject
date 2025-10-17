"use client";

import { useState } from "react";

type ToDoItem = {
  id: string;
  toDo: string;
}

const ToDo = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [toDoText, setToDoText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const addToDo = () => {
    const text = toDoText.trim();
    if (!text) return;
    
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto 
        ? crypto.randomUUID()
        : String(Date.now());
    
    setToDoItems(prev => [...prev, { id, toDo: text }]);
    setToDoText("");
  };

  const filteredList = toDoItems.filter(({ toDo }) => toDo.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <section>
      <input value={searchText} placeholder="search" onChange={(e) => { setSearchText(e.target.value) }} />
      <h3>New To Do:</h3>
      <input value={toDoText} onChange={(e) => setToDoText(e.target.value)}/>
      <button onClick={addToDo}>
        Add To Do
      </button>

      <h3>{"Current To Do's"}</h3>
      <ul
        style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '300px', 
        padding: '3px', 
        borderBottom: '1px grey solid' 
      }} 
      >
        {filteredList.map((toDoItem) => (
          <>
            <li 
              key={toDoItem.id} 
              id={toDoItem.id.toString()} 
            >
              {toDoItem.toDo}
            </li>
            <button 
              type="button"
              style={{ 
                cursor: 'pointer', 
                borderRadius: '100%', 
                backgroundColor: 'red', 
                color: 'white', 
                padding: '5px', 
                border: 'none' 
              }} 
              onClick={() => setToDoItems(toDoItems.filter((item) => item.id !== toDoItem.id))}
            >
              X
            </button>
          </>
        ))}
      </ul>
    </section>
  );
}

export default ToDo;