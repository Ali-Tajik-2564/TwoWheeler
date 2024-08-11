import './App.css';
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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    console.log('localStorageDate', localStorageData);
    if (localStorageData) {
      fetch('http://localhost:4000/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorageData}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfo(userData);
          console.log(isLoggedIn);
        });
    } else {
      setIsLoggedIn(false);
    }
    GetUser();
  }, [login, logout]);
  return (
    <>
      <AuthContext.Provider
        value={{
          userId,
          userInfo,
          login,
          logout,
          isLoggedIn,
        }}>
        {/* <QueryClientProvider client={queryClient}> */}
        {/* <ReactQueryDevtools
          initialIsOpen={false}
          position="right"
          buttonPosition="top-right"
        /> */}
        <Headers />
        {router}
        <Footer />
        {/* </QueryClientProvider> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
