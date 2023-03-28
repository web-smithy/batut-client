import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ContextUser from './components/store/context';
import { getUser } from './components/helper/index';
import Home from './views/Home';
import Profile from './views/Profile';
import ErrorPage from './views/Error';
import Webapp from './views/Webapp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const value = useMemo(() => [user, setUser], [user]);

  return (
    <ContextUser.Provider value={value}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {user && <Route path="/profile" element={<Profile />} />}
          <Route path="/webapp" element={<Webapp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </ContextUser.Provider>
  );
}

export default App;
