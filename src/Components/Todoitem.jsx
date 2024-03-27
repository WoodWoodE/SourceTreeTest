import "./Todoitem.css"

const Todoitem = ({isDone, content, date}) => {
  return (
    <div className="Todoitem">
      <input type="checkbox" checked={isDone} readOnly/>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}
  
export default Todoitem;