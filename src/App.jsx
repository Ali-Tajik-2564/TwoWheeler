import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import AuthContext from './Contexts/AuthContext';
import { useCallback, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
function App() {
  const router = useRoutes(routes);
  const queryClient = new QueryClient();
  const [userId, setUserID] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const login = (id, userInfo) => {
    setUserID(id);

    setUserInfo(userInfo);

    localStorage.setItem('user', JSON.stringify(id));

    setIsLoggedIn(true);
  };
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserID(null);
    setUserInfo(null);
    localStorage.removeItem('user');
  }, []);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'));

    if (localStorageData) {
      fetch(`https://twowheeler-backend.liara.run/users?id=${localStorageData}`)
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfo(userData);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [login, logout]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider
          value={{
            userId,
            userInfo,
            login,
            logout,
            isLoggedIn,
          }}>
          <Headers />

          {router}
          <Footer />
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
