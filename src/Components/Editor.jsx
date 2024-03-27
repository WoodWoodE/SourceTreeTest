import "./Editor.css"
import {useState, useRef} from 'react'

const Editor = ({onCreate}) => {

  const [content, setContent] = useState("")

  const contentRef = useRef("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDownContent = (e) => {
    if(e.keyCode == "13"){
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(content == ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content) 
    setContent("");
  }

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} placeholder="새로운 Todo..." onChange={onChangeContent} onKeyDown={onKeyDownContent}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
  
export default Editor;