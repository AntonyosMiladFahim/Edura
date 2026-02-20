import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";
import { useParams } from "react-router-dom";

function SingleStudent() {
  const { id } = useParams();

  // في الواقع، البيانات دي هتيجي من API
  const student = {
    id: 1,
    name: "Ali Ahmed",
    email: "ali@example.com",
    phone: "01012345678",
    age: 12,
    grade: "Primary 3",
    parentName: "Mohamed Ahmed",
    parentPhone: "01087654321",
    parentEmail: "mohamed@example.com",
    courses: [
      {
        title: "HTML & CSS Fundamentals",
        lectures: 6,
        progress: 80,
        enrolledDate: "2025-02-01",
      },
      {
        title: "JavaScript Basics",
        lectures: 4,
        progress: 50,
        enrolledDate: "2025-03-01",
      },
    ],
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-14 text-white">
          <h1 className="text-3xl font-extrabold mb-6">{student.name}</h1>

          {/* Student Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Personal Info</h2>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
          </div>

          {/* Parent Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Parent Info</h2>
            <p>Name: {student.parentName}</p>
            <p>Phone: {student.parentPhone}</p>
            <p>Email: {student.parentEmail}</p>
          </div>

          {/* Courses Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Courses Enrolled</h2>
            <table className="min-w-full text-sm border border-white/10 rounded-lg">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Course</th>
                  <th className="px-4 py-2 text-center font-semibold">
                    Lectures
                  </th>
                  <th className="px-4 py-2 text-center font-semibold">
                    Progress
                  </th>
                  <th className="px-4 py-2 text-center font-semibold">
                    Enrolled Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {student.courses.map((c, idx) => (
                  <tr key={idx} className="border-t border-white/10">
                    <td className="px-4 py-2">{c.title}</td>
                    <td className="px-4 py-2 text-center">{c.lectures}</td>
                    <td className="px-4 py-2 text-center">{c.progress}%</td>
                    <td className="px-4 py-2 text-center">{c.enrolledDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SingleStudent;
