import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ContextUser } from "./components/store/context";
import Home from "./views/Home";
import Profile from "./views/Profile";

function App() {
  const [user, setUser] = useState(null);
  return (
    <ContextUser.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ContextUser.Provider>
  );
}

export default App;
