export default function Item(props){
  return <li style={{textDecoration: props.packed ? 'line-through' : 'none'}}>
    <input type="checkbox" checked={props.packed} onChange={() => props.handleUpdateItem(props.id)}/>
    {props.description} ({props.quantity})
    </li>;
}