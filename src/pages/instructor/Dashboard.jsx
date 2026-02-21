import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function Dashboard() {
  const navigate = useNavigate();
  const { getItems } = useAppContext();
  const courses = getItems("courses") || [];

  // حساب الإجماليات
  const totalCourses = courses.length;
  const totalLectures = courses.reduce(
    (sum, course) => sum + (course.lectures ? course.lectures.length : 0),
    0,
  );
  const totalStudents = courses.reduce(
    (sum, course) =>
      sum +
      (course.lectures
        ? course.lectures.reduce((s, lec) => s + (lec.students || 0), 0)
        : 0),
    0,
  );
  const totalEarnings = courses.reduce(
    (sum, course) =>
      sum +
      (course.lectures
        ? course.lectures.reduce((s, lec) => s + (lec.earnings || 0), 0)
        : 0),
    0,
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h1 className="text-3xl font-extrabold mb-8">Instructor Dashboard</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">Total Earnings</h2>
              <p className="text-2xl font-bold">{totalEarnings} EGP</p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition"
              onClick={() => navigate("/my-courses")}
            >
              <h2 className="text-xl font-semibold mb-2">Total Courses</h2>
              <p className="text-2xl font-bold">{totalCourses}</p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition"
              onClick={() => navigate("/my-courses")}
            >
              <h2 className="text-xl font-semibold mb-2">Total Lectures</h2>
              <p className="text-2xl font-bold">{totalLectures}</p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition"
              onClick={() => navigate("/students-enrolled")}
            >
              <h2 className="text-xl font-semibold mb-2">Total Students</h2>
              <p className="text-2xl font-bold">{totalStudents}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
