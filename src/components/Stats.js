export default function Stats({items, handleClearAll}) {
  const numItems = items.length
  // const packedCount = items.reduce((acc, cur) => cur.packed === true? acc + 1 : acc, 0)
  const packedCount = items.filter(item => item.packed === true).length
  const percentage = numItems === 0 ? 0 : Math.round((packedCount / numItems) * 100);


  return (
    <footer className="stats">
      {percentage === 100 ? <em>You got everything!</em> : <em>You have {numItems} items in the list. You already packed {packedCount} ({percentage}%).</em>}
      <br></br>
      <br></br>
      <button onClick={handleClearAll} disabled={items.length === 0}>CLEAR ALL ITEMS</button>
    </footer>
  );
}
