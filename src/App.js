import { useState } from 'react';
import './App.css';

function App() {



  const [tasks, setTasks] = useState([
    { label: "Learn HTML" },
    { label: "Learn CSS" },
    { label: "Learn JS" },

  ]);
  //same thing
  // const myState = useState([
  //   { label: "Learn HTML" }, 
  //   { label: "Learn CSS" }, 
  //   { label: "Learn JS"},

  // const tasks = myState[0];
  // const setTasks = myState[1];

  // const taskElements= [
  //   <li>
  //   <span className='Label'>Learn HTML</span> 
  //   </li>,
  //   <li>
  //   <span className='Trashcan'>Learn CSS</span>
  //   </li>,
  // ];
  //update it for the better:

  const taskElements = tasks.map(task => {
    return (
      <li key={task.label}>
        <span className='label'>{task.label}</span>
      </li>

    );
  });

  const onclickOk = () => {

    // tasks.push({
    //   label:"new task!",
    // });

    // const updatedTasks = tasks.concat();
    // updatedTasks.push({
    //   label: "New tasks"
    // });
    // setTasks(updatedTasks);

    setTasks([
      ...tasks, {
        label: "New task"
      },
    ]);
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>TODO</h1>
        <p className='counter'>0 completed</p>
        <input type='text'></input>
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
