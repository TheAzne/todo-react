import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    { completed: false, label: "Learn HTML" },
    { completed: false, label: "Learn CSS" },
    { completed: false, label: "Learn JS" },

  ]);

  const taskElements = tasks.map((task, index) => {
    const onClickTask = () => {
      setTasks([
        ...tasks.slice(0, index),
        {
          ...task,
          completed: !task.completed,
        },
        ...tasks.slice(index + 1),
      ]);
    };

    const onClickTrashcan = () => {
      setTasks(tasks.filter((taskToFilter) => taskToFilter !== task));
    };

return (
  <li key={task.label} className={task.completed ? "completed": null}>
    <span className='label' onClick={onClickTask}>{task.label}</span>
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

const onTextChange = (event) => {
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
