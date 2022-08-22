import "./styles/main.scss";
import { useState } from "react";
import Home from "./views/Home";

function App() {
  const [user, setUser] = useState(null);
  return <Home setUser={setUser} user={user} />;
}

export default App;
