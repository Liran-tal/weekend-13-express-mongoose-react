import React, {useState} from 'react';
import './App.css';
import {
  getAllUsers,

} from "./utils/utils"

function App() {
  const [userId, setUserId] = useState("");
  const [newUser, setNewUser] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
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
      <div>
        <button onClick={() => getAllUsers(setUsers)}>
          All Users
        </button>
        <button onClick={() => getActiveUsers(setUsers)}>
          Active Users
        </button>
        <button onClick={() => getUsersByCash(setUsers, range)}>
          Filter by Cash
        </button>
      </div>
      <br/>
      <div>
        <button onClick={() => getUserById(setUsers, userId)}>
          Specific User
        </button>
        <button onClick={() => updateUserIsActive(userId)}>
          Update User Activity
        </button>
        <button onClick={() => updateUserCash(setUpdateSuccess, userId, amount)}>
          Update User Cash
        </button>
        <button onClick={() => updateUserCredit(setUpdateSuccess, userId, amount)}>
          Update User Credit
        </button>
        <label>
          User Id
          <input
            type="text"
            defaultValue={userId}
            onChange={({target}) => setUserId(target.value)}
          />
        </label>
        <label>
          Amount of cash
          <input
            type="number"
            defaultValue={0}
            onChange={({target}) => setCash(target.value)}
          />
        </label>
        <label>
          Amount of crefit
          <input
            type="number"
            defaultValue={0}
            onChange={({target}) => setCredit(target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <button onClick={() => transferCash(setUpdateSuccess, userId, transferTargetId, amount)}>
          Transfer Cash
        </button>
        <label>
          User Id to withdraw
          <input
            type="text"
            defaultValue={userId}
            onChange={({target}) => setUserId(target.value)}
          />
        </label>
        <label>
          User Id to deposit
          <input
            type="text"
            defaultValue={targetId}
            onChange={({target}) => setUserId(target.value)}
          />
        </label>
        <label>
          Amount of cash
          <input
            type="number"
            defaultValue={0}
            onChange={({target}) => setCash(target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
