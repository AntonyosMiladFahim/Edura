import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";
import { Link } from "react-router-dom";

function StudentsEnrolled() {
  const students = [
    {
      id: 1,
      name: "Ali Ahmed",
      email: "ali@example.com",
      phone: "01012345678",
      parentName: "Mohamed Ahmed",
      parentPhone: "01087654321",
      grade: "Primary 3",
      course: "HTML & CSS Fundamentals",
    },
    {
      id: 2,
      name: "Sara Mohamed",
      email: "sara@example.com",
      phone: "01023456789",
      parentName: "Fatma Mohamed",
      parentPhone: "01098765432",
      grade: "Preparatory 2",
      course: "JavaScript Mastery",
    },
    {
      id: 3,
      name: "Omar Khaled",
      email: "omar@example.com",
      phone: "01034567890",
      parentName: "Khaled Hassan",
      parentPhone: "01087651234",
      grade: "Secondary 1",
      course: "Complete Frontend Development",
    },
  ];

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
            {students.map((student) => (
              <Link
                to={`/student/${student.id}`}
                key={student.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition"
              >
                <h2 className="text-xl font-bold text-white mb-2">
                  {student.name}
                </h2>
                <p className="text-gray-300 text-sm">Grade: {student.grade}</p>
                <p className="text-gray-300 text-sm">
                  Course: {student.course}
                </p>
                <p className="text-gray-300 text-sm">Email: {student.email}</p>
                <p className="text-gray-300 text-sm">Phone: {student.phone}</p>
                <p className="text-gray-300 text-sm">
                  Parent: {student.parentName} ({student.parentPhone})
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentsEnrolled;
