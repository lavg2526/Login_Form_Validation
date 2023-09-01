import "./styles.css";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdValid, setPwdValid] = useState(false);
  const [flag, setFlag] = useState(false);
  const handleUser = (e) => {
    setUser(e.target.value);
    if (user.includes("@")) {
      setUserValid(true);
    } else {
      setUserValid(false);
    }
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
    if (pwd.length >= 8) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };
  const handleLogin = () => {
    if (userValid && pwdValid) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <div className="App">
      {!flag && (
        <form>
          <label>UserName:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => handleUser(e)}
          ></input>
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => handlePwd(e)}
          ></input>
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
      {flag && <p>'Logged in successfully'</p>}
    </div>
  );
}
