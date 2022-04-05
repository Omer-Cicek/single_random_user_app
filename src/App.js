import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const userApi = 'https://randomuser.me/api/';

  // useEffect(

  //   , []);

  return (
    <div className="App">
      <h1>Random User App</h1>
    </div>
  );
}

export default App;
