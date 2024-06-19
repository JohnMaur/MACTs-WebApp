// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import "./index.css"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css"
import { AuthProvider } from './AuthContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);


// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Correct import
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Login from './Components/Login.jsx';
// import Admin_landingPage from './Components/Admin/Admin_landingPage.jsx';
// import AddFaculty from './Components/Admin/AddFaculty';

// import Dashboard from './Components/Practice/Dashboard';
// import Teacher from './Components/Practice/Teacher';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const router = React.useMemo(() =>
//     createBrowserRouter([
//       {
//         path: '/login',
//         element: <Login setIsLoggedIn={setIsLoggedIn} />,
//       },
//       {
//         path: '/dashboard',
//         element: <Admin_landingPage />,
//       },
//       {
//         path: '/Faculty_registration',
//         element: <AddFaculty />,
//       },
//     ]),
//     []
//   );

//   // const [collapsed, setCollapsed] = React.useState(false);
//   return (
//     <React.StrictMode>
//       <RouterProvider router={router}>
//       </RouterProvider>
//     </React.StrictMode>
//   );
// };

// createRoot(document.getElementById('root')).render(<App />); 



