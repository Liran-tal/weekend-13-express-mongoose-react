import React, {useState} from 'react';
import './App.css';
import {
  getAllUsers,

} from "./utils/utils"

function App() {
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  const displayUsers = () => {
    return users.map((user) => {
      return (
        <div key={user._id}>
          <div>{`Id: ${user._id}`}</div>
          <div>{`Cash: ${user.cash}`}</div>
          <div>{`Credit: ${user.credit}`}</div>
        </div>
      )
    })
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>
        {displayUsers()}
      </div>
      <button
      onClick={() => getAllUsers(setUsers)}
      >
        All users
      </button>
    </div>
  );
}

export default App;
