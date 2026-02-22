import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function Profile() {
  const { id } = useParams();
  const { getById } = useAppContext();

  const student = getById("students", id);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="pt-24 max-w-4xl mx-auto p-6">Student not found.</div>
        <Footer />
      </div>
    );
  }

  const name = student.fullName || `${student.firstName} ${student.lastName}`;
  const courseList = (student.enrolledCourses || [])
    .map((c) => c.title)
    .join(", ");

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="bg-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-6">
              <img
                src={student.avatar}
                alt={name}
                className="w-28 h-28 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-sm text-gray-300">{student.bio}</p>
                <p className="mt-2 text-gray-300">Email: {student.email}</p>
                <p className="text-gray-300">Phone: {student.phone}</p>
                <p className="text-gray-300">Courses: {courseList || "-"}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/3 p-4 rounded">
                <h3 className="font-semibold">Attendance</h3>
                <p className="text-gray-300">
                  {student.attendancePercent ?? "-"}%
                </p>
              </div>
              <div className="bg-white/3 p-4 rounded">
                <h3 className="font-semibold">Interests</h3>
                <p className="text-gray-300">
                  {(student.interests || []).join(", ") || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
