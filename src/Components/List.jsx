import "./List.css"
import {useState} from 'react'
import Todoitem from "./Todoitem";

const List = ({todos, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=>{
      console.log(todo.content.includes(search))
      console.log(todo.content)
      return todo.content.toLowerCase().includes(search.toLowerCase());
    })
  }

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List🎈</h4>
      <input value={search} placeholder="검색어를 입력해주세요" onChange={onChangeSearch}/>
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return <Todoitem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })}
      </div>
    </div>
  );
}
  
export default List;