import './App.css';

function App() {
  const tasks = [{ label: "Learn HTML" }, { label: "Learn CSS" }, {label: "Learn JS"}];

  // const taskElements= [
  //   <li>
  //   <span className='Label'>Learn HTML</span> 
  //   </li>,
  //   <li>
  //   <span className='Trashcan'>Learn CSS</span>
  //   </li>,
  // ];
  //Vi gör om den:

  const taskElements = tasks.map(task => {
    return (
      <li key={task.label}>
        <span className='label'>{task.label}</span>
      </li>
  
   );
});

return ( 
  <div className="App">
    <div className='container'>
      <h1>TODO</h1>
      <p className='counter'>0 completed</p>
      <input type='text'></input>
      <button>OK</button>
      <small className='error' />
      <ul>
        {taskElements}
      </ul>
    </div>
  </div>
);
}

export default App;
