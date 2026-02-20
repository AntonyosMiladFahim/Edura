import React from "react";
import Navbar from "../components/student/Navbar";
import Footer from "../components/student/Footer";

function ParentPage() {
  const parent = {
    name: "Mohamed Ahmed",
    email: "mohamed@example.com",
    phone: "01087654321",
    children: [
      {
        id: 1,
        name: "Ali Ahmed",
        grade: "Primary 3",
        courses: [
          {
            title: "HTML & CSS Fundamentals",
            lectures: [
              {
                name: "HTML Basics",
                quizzes: [
                  { name: "Quiz 1", score: 85 },
                  { name: "Quiz 2", score: 90 },
                ],
              },
              {
                name: "CSS Basics",
                quizzes: [
                  { name: "Quiz 1", score: 75 },
                  { name: "Quiz 2", score: 80 },
                ],
              },
            ],
          },
          {
            title: "JavaScript Basics",
            lectures: [
              {
                name: "JS Intro",
                quizzes: [{ name: "Quiz 1", score: 88 }],
              },
              {
                name: "DOM Manipulation",
                quizzes: [{ name: "Quiz 1", score: 92 }],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Sara Ahmed",
        grade: "Preparatory 2",
        courses: [
          {
            title: "JavaScript Mastery",
            lectures: [
              {
                name: "JS Intro",
                quizzes: [
                  { name: "Quiz 1", score: 80 },
                  { name: "Quiz 2", score: 85 },
                ],
              },
              {
                name: "DOM Manipulation",
                quizzes: [
                  { name: "Quiz 1", score: 78 },
                  { name: "Quiz 2", score: 82 },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h1 className="text-3xl font-extrabold mb-6">
            Welcome, {parent.name}
          </h1>
          <p className="text-gray-300 mb-8">
            Email: {parent.email} | Phone: {parent.phone}
          </p>

          {parent.children.map((child) => (
            <div
              key={child.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4">{child.name}</h2>
              <p className="text-gray-300 mb-4">Grade: {child.grade}</p>

              {child.courses.map((course, idxCourse) => (
                <div
                  key={idxCourse}
                  className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>

                  {course.lectures.map((lecture, idxLecture) => (
                    <div
                      key={idxLecture}
                      className="mb-4 bg-white/10 rounded-lg p-3"
                    >
                      <h4 className="font-medium mb-2">{lecture.name}</h4>
                      <table className="min-w-full text-sm border border-white/10 rounded-lg">
                        <thead className="bg-white/5 text-gray-300">
                          <tr>
                            <th className="px-3 py-1 text-left font-semibold">
                              Quiz
                            </th>
                            <th className="px-3 py-1 text-center font-semibold">
                              Score
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {lecture.quizzes.map((quiz, idxQuiz) => (
                            <tr
                              key={idxQuiz}
                              className="border-t border-white/10"
                            >
                              <td className="px-3 py-1">{quiz.name}</td>
                              <td className="px-3 py-1 text-center">
                                {quiz.score}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ParentPage;
