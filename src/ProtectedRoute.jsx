import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/login/admin" />;
};

export default ProtectedRoute;

// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const ProtectedRoute = ({ element: Element, adminOnly = false, ...rest }) => {
//   const { isLoggedIn, isAdmin } = useContext(AuthContext);

//   // If adminOnly is true and the user is not an admin, redirect to admin login
//   if (adminOnly && !isAdmin) {
//     return <Navigate to="/login/admin" />;
//   }

//   // If user is not logged in, redirect to appropriate login page
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   // Otherwise, render the protected component
//   return <Element {...rest} />;
// };

// export default ProtectedRoute;
