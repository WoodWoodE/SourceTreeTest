import "./Todoitem.css"

const Todoitem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckbox = () =>{
    onUpdate(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className="Todoitem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}
  
export default Todoitem;