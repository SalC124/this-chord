import { useEffect, useState } from 'react';
import './index.css'; // Import the CSS file
import AddMsg from './components/AddMsg';
import MsgList from './components/MsgList';

// import MsgSearch from './components/MsgSearch';
import msgService from "./services/msgs.js"
import userService from "./services/users.js"
import loginService from './services/login.js';

function App() {
  const [msgs, setMsgs] = useState([]);
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [userObject, setUserObject] = useState([]);

  useEffect(() => {
    msgService.getMsgs().then((data) => setMsgs(data))
    const interval = setInterval(() => {
      msgService.getMsgs().then((data) => setMsgs(data));
      userService.getUsers().then((data) => setUsers(data));
      console.log("updated tings")
    }, 500);
    return () => clearInterval(interval);
  }, []);


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      setUserObject((userObject) => user);
      console.log("Login Successfull");
    } catch (error) {
      console.log("Invalid Credentials", error);
    }
    setUsername("");
    setPassword("");
  };

  const handleAddMsg = (e, newMsg, setNewMsg) => {
    e.preventDefault();
    console.log("submitted")
    const token = userObject.token;
    if (newMsg.trim() !== "") {
      setNewMsg("");
      msgService.addMsg(newMsg.trim(), token);
      msgService.getMsgs();
    }
  };

  const IsLoggedIn = () => {
    return userObject.token ? (
      <div>
        <p>You are logged in as {userObject.username}</p>
        <h1>Messages</h1>
        <div className="card">
          <MsgList msgs={msgs} />
        </div>
      </div>
    ) : (
      <p>You are not logged in. In order to see messages, you must do so</p>
    )
  }


  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>

      {/*}<MsgSearch msgs={msgs} />{*/}

      <IsLoggedIn />

      <div id="text-input-container">
        <AddMsg handleSubmit={handleAddMsg} />
      </div>
    </>
  );
}

export default App;
