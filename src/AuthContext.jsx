import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token on load:', token); // Add this line to check the token
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate('/login/admin');
    }
  }, [navigate]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login/admin');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
  
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const adminToken = localStorage.getItem('adminToken');
//     const facultyToken = localStorage.getItem('facultyToken');
//     return !!adminToken || !!facultyToken;
//   });

//   useEffect(() => {
//     const adminToken = localStorage.getItem('adminToken');
//     const facultyToken = localStorage.getItem('facultyToken');
//     if (adminToken) {
//       setIsLoggedIn(true);
//       navigate('/dashboard');
//     } else if (facultyToken) {
//       setIsLoggedIn(true);
//       navigate('/dashboard');
//     } else {
//       navigate('/login/admin');
//     }
//   }, [navigate]);

//   const loginAdmin = (token) => {
//     localStorage.setItem('adminToken', token);
//     setIsLoggedIn(true);
//     navigate('/dashboard');
//   };

//   const loginFaculty = (token, userType, userId) => {
//     localStorage.setItem('facultyToken', token);
//     setIsLoggedIn(true);
//     if (userType === 'teacher') {
//       navigate(`/dashboard/Teacher/${userId}`);
//     } else if (userType === 'librarian') {
//       navigate(`/dashboard/Library`);
//     } else if (userType === 'gym') {
//       navigate(`/dashboard/Gym`);
//     } else if (userType === 'guard') {
//       navigate(`/dashboard/Gatepass`);
//     } else if (userType === 'registrar') {
//       navigate(`/dashboard/Registrar`);
//     }
//   };

//   const logoutAdmin = () => {
//     localStorage.removeItem('adminToken');
//     setIsLoggedIn(false);
//     navigate('/login/admin');
//   };

//   const logoutFaculty = () => {
//     localStorage.removeItem('facultyToken');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, loginAdmin, loginFaculty, logoutAdmin, logoutFaculty }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


