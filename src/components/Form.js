import React, { useState } from 'react';

 export default function Form({handleAddItems, sortCriteria, setSortCriteria}) {
  const [description, setDescription] = useState("");
  const[quantity, setQuantity] = useState(1);


  function handleSubmit(e){
    e.preventDefault();

    if (description.trim() === "") return;
    
    const item = {
      id: Date.now(),
      description: description.trim(),
      quantity: quantity,
      packed: false
    };

    handleAddItems(item);
    setDescription("");
    setQuantity(1);
  }


  return (
    <div>
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} name="quantity" onChange={(e) => setQuantity(Number(e.target.value))}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="text" value={description} placeholder="Item..." name="description" onChange={(e) => setDescription(e.target.value)} required/>
      <button type="submit">Add</button>
    </form>
    <div className="sort-container">
      <h3>Sort by:</h3>
      <select value={sortCriteria} name="sortCriteria" onChange={(e) => setSortCriteria(e.target.value)}>
        <option value="input">Input Order</option>
        <option value="description">Description</option>
        <option value="packed">Packed Status</option>
      </select>
    </div>
    </div>
  );
}
