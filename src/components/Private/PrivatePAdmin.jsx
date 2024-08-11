import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
export default function PrivatePAdmin({ children }) {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  return (
    <>
      {/* {
                authContext.userInfo !== null && (
                    <>
                        {
                            authContext.userInfo.role === "ADMIN" ? <>{children}</> : navigate("/login")
                        }
                    </>
                )
            } */}
      {children}
    </>
  );
}
