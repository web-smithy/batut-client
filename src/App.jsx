import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ContextUser } from "./components/store/context";
import Home from "./views/Home";
import Profile from "./views/Profile";

function App() {
  const [user, setUser] = useState(null);
  return (
    <ContextUser.Provider value={{ user, setUser }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </ContextUser.Provider>
  );
}

export default App;
