import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>TODO</h1>
        <p className='counter'>0 completed</p>
        <input type='text'></input>
        <button>OK</button>
        <small className='error' />
        <ul>
          <li><span className='Label'>Learn HTML</span>  </li>
          <li><span className='Trashcan'>Learn CSS</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
