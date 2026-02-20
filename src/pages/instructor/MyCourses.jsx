import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function MyCourses() {
  const myCourses = [
    {
      title: "Complete Frontend Development",
      grade: "Secondary 2",
      lectures: [
        {
          name: "HTML Basics",
          students: 40,
          published: "2025-06-01",
          earnings: "400 EGP",
        },
        {
          name: "CSS Advanced",
          students: 35,
          published: "2025-06-05",
          earnings: "350 EGP",
        },
        {
          name: "JS Fundamentals",
          students: 45,
          published: "2025-06-10",
          earnings: "450 EGP",
        },
      ],
    },
    {
      title: "JavaScript Mastery",
      grade: "Preparatory 2",
      lectures: [
        {
          name: "JS Intro",
          students: 30,
          published: "2025-04-01",
          earnings: "300 EGP",
        },
        {
          name: "DOM Manipulation",
          students: 25,
          published: "2025-04-05",
          earnings: "250 EGP",
        },
        {
          name: "ES6 Features",
          students: 35,
          published: "2025-04-10",
          earnings: "350 EGP",
        },
      ],
    },
    {
      title: "HTML & CSS Fundamentals",
      grade: "Primary 3",
      lectures: [
        {
          name: "HTML Basics",
          students: 20,
          published: "2025-02-01",
          earnings: "200 EGP",
        },
        {
          name: "CSS Basics",
          students: 25,
          published: "2025-02-05",
          earnings: "250 EGP",
        },
      ],
    },
  ];

  // ترتيب Grades بشكل مخصص
  const gradeOrder = {
    "Primary 1": 1,
    "Primary 2": 2,
    "Primary 3": 3,
    "Primary 4": 4,
    "Primary 5": 5,
    "Primary 6": 6,
    "Preparatory 1": 7,
    "Preparatory 2": 8,
    "Preparatory 3": 9,
    "Secondary 1": 10,
    "Secondary 2": 11,
    "Secondary 3": 12,
  };

  const sortedCourses = myCourses.sort((a, b) => {
    const aOrder = gradeOrder[a.grade] || 999;
    const bOrder = gradeOrder[b.grade] || 999;
    if (aOrder === bOrder) {
      return b.lectures.length - a.lectures.length; 
    }
    return aOrder - bOrder;
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="relative min-h-screen bg-linear-to-r from-gray-900 via-black to-gray-900 text-white pt-24">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold mb-2">My Courses</h1>
            <p className="text-gray-400">
              Track your published courses, lectures, students, and earnings.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Grade</th>
                  <th className="px-6 py-4 text-left font-semibold">Course</th>
                  <th className="px-6 py-4 text-left font-semibold">Lecture</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Students
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Published
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Earnings
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedCourses.map((course) =>
                  course.lectures.map((lec, idx) => (
                    <tr
                      key={`${course.title}-${idx}`}
                      className="border-t border-white/10 hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-4 font-medium">
                        {idx === 0 ? course.grade : ""}
                      </td>
                      <td className="px-6 py-4 font-medium">{course.title}</td>
                      <td className="px-6 py-4 text-gray-300">{lec.name}</td>
                      <td className="px-6 py-4 text-center">{lec.students}</td>
                      <td className="px-6 py-4 text-center">{lec.published}</td>
                      <td className="px-6 py-4 text-center font-medium">
                        {lec.earnings}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyCourses;
