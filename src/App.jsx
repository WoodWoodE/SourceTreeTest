import './App.css'
import {useState, useRef} from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import List from './Components/List'

const mockData = [
  {
    id:0,
    isDone:false,
    content:"밥짓기",
    date: new Date().getTime()
  },
  {
    id:1,
    isDone:false,
    content:"React공부하기",
    date: new Date().getTime()
  },
]

function App() {

  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(2);

  const onCreate = (content) =>{
    const newTodo = {
      id:idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime(),
    }

    setTodos(
      [
      newTodo,
      ...todos
      ]
    )
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  )
}

export default App
