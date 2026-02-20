import React from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function MyEnrolled() {
  const myCourses = [
    {
      title: "Complete Frontend Development",
      grade: "Secondary",
      lectures: 42,
      duration: "12h",
      progress: 65,
      status: "In Progress",
    },
    {
      title: "JavaScript Mastery",
      grade: "Preparatory",
      lectures: 30,
      duration: "8h",
      progress: 100,
      status: "Completed",
    },
    {
      title: "HTML & CSS Fundamentals",
      grade: "Primary",
      lectures: 18,
      duration: "4h",
      progress: 20,
      status: "In Progress",
    },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      {/* Page content with padding top so content is not hidden behind navbar */}
      <div className="relative min-h-screen bg-linear-to-r from-gray-900 via-black to-gray-900 text-white pt-24">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold mb-2">My Enrollled Courses</h1>
            <p className="text-gray-400">
              Track your enrolled courses, progress, and lectures.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Course</th>
                  <th className="px-6 py-4 text-left font-semibold">Grade</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Lectures
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Progress
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {myCourses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4 font-medium">{course.title}</td>
                    <td className="px-6 py-4 text-gray-300">{course.grade}</td>
                    <td className="px-6 py-4 text-center">{course.lectures}</td>
                    <td className="px-6 py-4 text-center">{course.duration}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">
                          {course.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          course.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-indigo-500/20 text-indigo-400"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium text-xs">
                        Continue
                      </button>
                    </td>
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

export default MyEnrolled;
