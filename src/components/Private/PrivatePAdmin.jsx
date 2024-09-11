import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
export default function PrivatePAdmin({ children }) {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  console.log(authContext.userInfo);

  return (
    <>
      {authContext.userInfo && (
        <>
          {authContext.userInfo[0]?.roll === 'admin' ? (
            <>{children}</>
          ) : (
            navigate('/')
          )}
        </>
      )}
    </>
  );
}
