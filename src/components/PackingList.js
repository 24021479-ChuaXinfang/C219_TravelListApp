import Item from "./Item";

export default function PackingList({items, handleDeleteItems, handleUpdateItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id} >
          <Item id={item.id} description={item.description} quantity={item.quantity} packed={item.packed} handleUpdateItem={handleUpdateItem} />
          <button onClick={() => handleDeleteItems(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}