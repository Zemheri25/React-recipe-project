import "./App.css";
import Login from "./Pages/Login/Login"
import { useState } from "react";
import Main from "./Pages/Home/Main";

function App() {
  const [value, setValue] = useState(false);

  const realusername = "Zemheri25";
  const realpassword = "79134256";

  const addUser = (user) => {
    if (realusername == user?.username && realpassword == user?.password) {
      setValue(true)
    }
    else {
      console.log("yanlış")
    }
  };

  const removeUser = () => {
    setValue(false)
  }

  return (
    <div className="App">{value ? <Main removeUser = {removeUser}/> : <Login addUser={addUser} />}</div>
  );
}

export default App;
