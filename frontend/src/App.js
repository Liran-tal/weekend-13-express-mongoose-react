import React, {useState} from 'react';
import './App.css';
import axios from './api/Axios.Api';

function App() {
  const [userId, setUserId] = useState([]);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>

      </div>
      <button
      onClick={() => axios.getUsers()}
      >
        All users
      </button>
    </div>
  );
}

export default App;
