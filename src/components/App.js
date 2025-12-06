import React, { useState } from 'react';
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: Date.now(), description: "Shirt", quantity: 5, packed: false },
  { id: Date.now(), description: "Pants", quantity: 2, packed: false },
];


function App() {
  const[items, setItems] = useState([]);
  const[sortCriteria, setSortCriteria] = useState("");

  function handleAddItems(item){
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItems(id){
    setItems((prevItems) => prevItems.filter(item => item.id != id));
  }

  function handleUpdateItem(id){
    setItems((prevItems) => prevItems.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearAll(){
     if (window.confirm("Are you sure you want to clear all items?")) {
    setItems([]);
  }
  }

  function getSortedItems(){
    if (sortCriteria === "description") {
      return [...items].sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortCriteria === "packed") {
      return [...items].sort((a, b) => b.packed - a.packed);
    } else {
      return [...items].sort((a, b) => a.id - b.id);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
      <PackingList items={getSortedItems()} handleDeleteItems={handleDeleteItems} handleUpdateItem={handleUpdateItem} />
      <Stats items={items} handleClearAll={handleClearAll} />
    </div>
  );
}

export default App;
