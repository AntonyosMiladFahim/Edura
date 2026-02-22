import React from "react";
import Navbar from "../components/student/Navbar";
import Footer from "../components/student/Footer";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

function ParentPage() {
  const { getItems, getById } = useAppContext();
  const { id } = useParams();

  const parents = getItems("parents") || [];
  const parent = id ? getById("parents", id) : parents[0] || null;

  if (!parent) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="pt-24 max-w-4xl mx-auto p-6">
          No parent data available.
        </div>
        <Footer />
      </div>
    );
  }

  const children = (parent.children || [])
    .map((c) => getById("students", c.childId))
    .filter(Boolean);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
        <Navbar />
      </div>

      <div className="pt-24 min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 space-y-10">
          {/* Parent Info */}
          <div className="bg-white/10 rounded-2xl p-6">
            <h1 className="text-3xl font-extrabold">
              Welcome, {parent.fullName}
            </h1>
            <p className="text-gray-300 mt-2">
              📧 {parent.email} | 📞 {parent.phone}
            </p>
          </div>

          {/* Children */}
          {children.map((child) => (
            <div
              key={child.id}
              className="bg-white/5 rounded-2xl p-6 space-y-6"
            >
              {/* Child Header */}
              <div className="flex items-center gap-4">
                <img
                  src={child.avatar}
                  alt={child.fullName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold">{child.fullName}</h2>
                  <p className="text-gray-400 text-sm">
                    Age: {child.age} | Gender: {child.gender}
                  </p>
                </div>
              </div>

              {/* Academic Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  🎯 Attendance
                  <p className="text-2xl font-bold">
                    {child.attendancePercent}%
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  📚 Enrolled Courses
                  <p className="text-2xl font-bold">
                    {child.enrolledCourses.length}
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  🆘 Emergency Contact
                  <p className="text-sm text-gray-300 mt-1">
                    {child.emergencyContact.name} (
                    {child.emergencyContact.relation})
                  </p>
                </div>
              </div>

              {/* Courses */}
              <div className="space-y-4">
                {child.enrolledCourses.map((course) => (
                  <div
                    key={course.courseId}
                    className="bg-white/10 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <span className="text-sm text-indigo-400">
                        Progress: {course.progressPercent}%
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Final Grade:</span>
                        <p className="font-semibold">
                          {child.grades?.[course.courseId] || "—"}
                        </p>
                      </div>

                      <div>
                        <span className="text-gray-400">Quiz Average:</span>
                        <p className="font-semibold">
                          {child.quizResults?.[course.courseId] || "—"}%
                        </p>
                      </div>

                      <div>
                        <span className="text-gray-400">Enrolled:</span>
                        <p>{course.enrolledDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes */}
              {child.notes && (
                <div className="bg-white/10 p-4 rounded-xl text-sm text-gray-300">
                  📝 {child.notes}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ParentPage;
