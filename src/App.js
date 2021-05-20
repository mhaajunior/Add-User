import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (username, age) => {
    setUsersList((prevValue) => {
      return [...prevValue, { username, age, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
