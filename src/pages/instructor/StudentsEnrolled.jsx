import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function StudentsEnrolled() {
  const { getItems } = useAppContext();
  const students = getItems("students") || [];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-3xl font-extrabold text-white mb-8">
            Students Enrolled
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => {
              const name =
                student.fullName || `${student.firstName} ${student.lastName}`;
              const email = student.email || "-";
              const phone = student.phone || "-";
              const parent = student.emergencyContact || {};
              const courseTitle =
                (student.enrolledCourses &&
                  student.enrolledCourses[0] &&
                  student.enrolledCourses[0].title) ||
                "-";

              return (
                <Link
                  to={`/instructor/student/${student.id}`}
                  key={student.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition"
                >
                  <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
                  <p className="text-gray-300 text-sm">
                    Grade: {student.grade || "-"}
                  </p>
                  <p className="text-gray-300 text-sm">Course: {courseTitle}</p>
                  <p className="text-gray-300 text-sm">Email: {email}</p>
                  <p className="text-gray-300 text-sm">Phone: {phone}</p>
                  <p className="text-gray-300 text-sm">
                    Parent: {parent.name || "-"} ({parent.phone || "-"})
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentsEnrolled;
