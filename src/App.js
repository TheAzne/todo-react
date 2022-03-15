import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    { label: "Learn HTML" },
    { label: "Learn CSS" },
    { label: "Learn JS" },

  ]);


  const taskElements = tasks.map(task => {
    return (
      <li key={task.label}>
        <span className='label'>{task.label}</span>
      </li>
    );
  });

  const onclickOk = () => {
    setText("");
    setTasks([
      ...tasks, {
        label: text,
      },
    ]);
  };

  const onTextChange = (event)=>{
    setText(event.target.value);
  };

  
  return (
    <div className="App">
      <div className='container'>
        <h1>TODO</h1>
        <p className='counter'>0 completed</p>
        <input type='text'
          value={text}
          onChange={onTextChange} />
        <button onClick={onclickOk}>OK</button>
        <small className='error' />
        <ul>
          {taskElements}
        </ul>
      </div>
    </div>
  );
}

export default App;
