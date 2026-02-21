import React from "react";
import HomePage from "./pages/HomePage.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import GradesPage from "./pages/student/GradesPage.jsx";
import GradePage from "./pages/student/GradePage.jsx";
import MyLogin from "./pages/Login.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import SingleLecture from "./pages/student/SingleLecture.jsx";
import SingleCourse from "./pages/student/SingleCourse.jsx";
import MyEnrolled from "./pages/student/MyEnrolled.jsx";
import MyCourses from "./pages/instructor/MyCourses.jsx";
import StudentsEnrolled from "./pages/instructor/StudentsEnrolled.jsx";
import SingleStudent from "./pages/instructor/SingleStudent.jsx";
import Profile from "./pages/student/Profile.jsx";
import ParentPage from "./pages/ParentPage.jsx";
import Dashboard from "./pages/instructor/Dashboard.jsx";
import Add from "./pages/instructor/Add.jsx";
import Courses from "./pages/student/Courses.jsx";
// import './App.css'

function App() {
  // helper to redirect legacy /lecture/:id -> /course/:id preserving the id

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/grade/:id" element={<GradePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/lecture/:id" element={<SingleLecture />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        {/* legacy lecture route -> redirect to new course route */}
        {/* <Route path="/lecture/:id" element={<LectureRedirect />} /> */}
        <Route path="/my-enrolled" element={<MyEnrolled />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/students-enrolled" element={<StudentsEnrolled />} />
        <Route path="/student/:id" element={<Profile />} />
        <Route path="/instructor/student/:id" element={<SingleStudent />} />
        <Route path="/parent/:id" element={<ParentPage />} />
        <Route path="/courses/:gradeId" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
