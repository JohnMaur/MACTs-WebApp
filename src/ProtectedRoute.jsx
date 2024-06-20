import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn, userType } = useContext(AuthContext);
  return isLoggedIn ? <Element {...rest} /> : <Navigate to={userType === 'admin' ? "/login/admin" : "/login"} />;
};

export default ProtectedRoute;
