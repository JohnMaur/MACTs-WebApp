import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // Import Navigate for fallback

// Admin Route

// Login route
import AdminLogin from './Components/Login-Admin';
import FacultyLogin from './Components/FacultyLogin';
import Admin_landingPage from './Components/Admin/Admin_landingPage';

// Admin Registration route
import Teacher from './Components/Admin/Registration-pages/Teacher-registration';
import Registrar from './Components/Admin/Registration-pages/Registrar-registration';
import Librarian from './Components/Admin/Registration-pages/Librarian-registration';
import Gym from './Components/Admin/Registration-pages/Gym-registration';
import Guard from './Components/Admin/Registration-pages/Guard-registration';

// Admin Attendance route
import AttendancePage from './Components/Admin/Attendance/Attendancen-page';
import AttendancePageReport from './Components/Admin/Attendance/Report/Attendance-page-report';

import StudentCp1 from './Components/Admin/Student-Page/StudentCP-1D';
import StudentCp2 from './Components/Admin/Student-Page/StudentCP-2D';
import StudentCp3 from './Components/Admin/Student-Page/StudentCP-3D';
import StudentCp4 from './Components/Admin/Student-Page/StudentCP-4D';

import RFID_page from './Components/Admin/RFID-Registratration/RFID-Page';
import DevicePageRegistration from './Components/Admin/Device-Registration/Device-page';

// Admin Report Route
import AdminLibraryReport from './Components/Admin/Report/Library/Library-page';
import AdminGymReport from './Components/Admin/Report/Gym/Gym-page';
import AdminRegistrarReport from './Components/Admin/Report/Registrar/Registrar-page';
import AdminGatepassReport from './Components/Admin/Report/Gatepass/Gatepass-page';

// Teacher import
import Teacher_landingPage from './Components/Faculty/Teacher/Teacher-landingPage';
import FacultyAddAttendancePage from './Components/Faculty/Teacher/AddAttendancePage';
import FacultyAttendancePageReport from './Components/Faculty/Teacher/Report/Attendance-page-report';
import Teacher_RFID_page from './Components/Faculty/Teacher/Teacher-RFID-Registration';

// Librarian import
import Librarian_landingPage from './Components/Faculty/Librarian/Librarian_landing_page';
import LibraryReport from './Components/Faculty/Librarian/Libraray_Report';

// Gym import
import GymLandingPage from './Components/Faculty/Gym/Gym_landingPage';
import GymReport from './Components/Faculty/Gym/Gym_Report';

// Guard import
import GuardLandingPage from './Components/Faculty/Guard/Guard_ladingPage';
import GuardReport from './Components/Faculty/Guard/Guard_Report';

// Registrar import
import RegistrarLandingPage from './Components/Faculty/Registar/Registrar_landingPage';
import RegistrarReport from './Components/Faculty/Registar/RegistrarReport';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login/admin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<FacultyLogin setIsLoggedIn={setIsLoggedIn} />} />

        // Admin Route
        <Route path="/dashboard" element={isLoggedIn ? <Admin_landingPage /> : <Navigate to="/login/admin" />} />

        <Route path="/Registration/Teacher" element={isLoggedIn ? <Teacher /> : <Navigate to="/login/admin" />} />
        <Route path="/Registration/Registrar" element={isLoggedIn ? <Registrar /> : <Navigate to="/login/admin" />} />
        <Route path="/Registration/Librarian" element={isLoggedIn ? <Librarian /> : <Navigate to="/login/admin" />} />
        <Route path="/Registration/Gym" element={isLoggedIn ? <Gym /> : <Navigate to="/login/admin" />} />
        <Route path="/Registration/Guard" element={isLoggedIn ? <Guard /> : <Navigate to="/login/admin" />} />

        // Attendance route AttendancePage
        <Route path="/Attendance" element={isLoggedIn ? <AttendancePage /> : <Navigate to="/login/admin" />} /> 
        <Route path="/attendance/report/:attendance_code" element={isLoggedIn ? <AttendancePageReport /> : <Navigate to="/login/admin" />} />

        <Route path="/Attendance/BTVTEICT-CP-1D" element={isLoggedIn ? <StudentCp1 /> : <Navigate to="/login/admin" />} />
        <Route path="/Attendance/BTVTEICT-CP-2D" element={isLoggedIn ? <StudentCp2 /> : <Navigate to="/login/admin" />} />
        <Route path="/Attendance/BTVTEICT-CP-3D" element={isLoggedIn ? <StudentCp3 /> : <Navigate to="/login/admin" />} />
        <Route path="/Attendance/BTVTEICT-CP-4D" element={isLoggedIn ? <StudentCp4 /> : <Navigate to="/login/admin" />} />

        // Admin Report Route 
        <Route path="/Library/Report" element={isLoggedIn ? <AdminLibraryReport /> : <Navigate to="/login/admin" />} />
        <Route path="/Gym/Report" element={isLoggedIn ? <AdminGymReport /> : <Navigate to="/login/admin" />} />
        <Route path="/Registrar/Report" element={isLoggedIn ? <AdminRegistrarReport /> : <Navigate to="/login/admin" />} />
        <Route path="/Gatepass/Report" element={isLoggedIn ? <AdminGatepassReport /> : <Navigate to="/login/admin" />} />

        // Teacher Route
        <Route path="/dashboard/Teacher/:userId" element={isLoggedIn ? <Teacher_landingPage /> : <Navigate to="/login" />} />

        <Route path="/Add/Attendance/:userId" element={isLoggedIn ? <FacultyAddAttendancePage /> : <Navigate to="/login" />} />
        <Route path="/Faculty/attendance/report/:attendance_code" element={isLoggedIn ? <FacultyAttendancePageReport /> : <Navigate to="/login/admin" />} />  
        {/* <Route path="/RFID_Registration/:userId" element={isLoggedIn ? <Teacher_RFID_page /> : <Navigate to="/login" />} /> */}

        // Librarian Route
        <Route path="/dashboard/Library" element={isLoggedIn ? <Librarian_landingPage /> : <Navigate to="/login" />} />
        <Route path="/Facility/Library/Report/" element={isLoggedIn ? <LibraryReport /> : <Navigate to="/login" />} />

        // Gym Route
        <Route path="/dashboard/Gym" element={isLoggedIn ? <GymLandingPage /> : <Navigate to="/login" />} />
        <Route path="/Facility/Gym/Report" element={isLoggedIn ? <GymReport /> : <Navigate to="/login" />} />

        // Guard Route
        <Route path="/dashboard/Gatepass" element={isLoggedIn ? <GuardLandingPage /> : <Navigate to="/login" />} />
        <Route path="/Facility/Gatepass/Report" element={isLoggedIn ? <GuardReport /> : <Navigate to="/login" />} />

        // Registrar Route
        <Route path="/dashboard/Registrar" element={isLoggedIn ? <RegistrarLandingPage /> : <Navigate to="/login" />} />
        <Route path="/Facility/Registrar/Report" element={isLoggedIn ? <RegistrarReport /> : <Navigate to="/login" />} />

        <Route path="/Registration/RFID" element={isLoggedIn ? <RFID_page /> : <Navigate to="/login/admin" />} />
        <Route path="/Registration/Device" element={isLoggedIn ? <DevicePageRegistration /> : <Navigate to="/login/admin" />} />

      </Routes>
    </Router>
  );
}

export default App;