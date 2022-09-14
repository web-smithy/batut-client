import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ContextUser } from "./components/store/context";
import { getUser } from "./components/helper/index";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ErrorPage from "./views/Error";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getUser();
    // console.log("app", currentUser);
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {user && <Route path="/profile" element={<Profile />} />}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </ContextUser.Provider>
  );
}

export default App;
