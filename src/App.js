import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function App() {
  const [users, setUsers] = useState({});
  const userApi = 'https://randomuser.me/api/';

  const fetchUser = async () => {
    const res = await axios(userApi);
    setUsers(res.data.results[0]);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>Random User App</h1>
      <main className="main-div">
        <section className="app-row-image">
          <img src={users.picture?.large} alt="" className="app-img" />
          <p className="app-name">
            {users.name?.title} {users.name?.first} {users.name?.last}
          </p>
        </section>
        <section className="app-row">
          <AiOutlineMail className="app-icons" />
          <h4>{users.email} </h4>
        </section>
        <section className="app-row">
          <AiOutlinePhone className="app-icons" />
          <h4>{users.phone} </h4>
        </section>
        <section className="app-row">
          <GoLocation className="app-icons" />
          <h4>
            {' '}
            {users?.location?.country}-{users?.location?.city}{' '}
          </h4>
        </section>
        <button className="btn-change" onClick={() => fetchUser()}>
          Change User
        </button>
      </main>
    </div>
  );
}

export default App;
