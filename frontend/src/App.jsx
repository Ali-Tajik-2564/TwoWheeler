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
function App() {
  const router = useRoutes(routes);
  const queryClient = new QueryClient();
  const [userId, setUserId] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const GetUser = () => {};
  const login = (userInfo, id) => {
    setUserId(id);

    setUserInfo(userInfo);
    setIsLoggedIn(true);

    localStorage.setItem('user', JSON.stringify(id));
  };
  const logout = useCallback(() => {
    setUserId(null);
    setUserInfo(null);
    localStorage.removeItem('user');
  }, []);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'));

    if (localStorageData) {
      fetch(`http://localhost:3000/users?id=${localStorageData}`)
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfo(userData);
        });
    } else {
      setIsLoggedIn(false);
    }
    GetUser();
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
