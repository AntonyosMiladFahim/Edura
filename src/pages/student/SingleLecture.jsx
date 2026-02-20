import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function SingleLecture() {
  const {  subject } = useParams();
  const navigate = useNavigate();

  const [openChapter, setOpenChapter] = useState(null);
  const [title, setTitle] = useState(subject || "Lecture");

  useEffect(() => {
    if (subject) setTitle(subject);
  }, [subject]);

  const courseStructure = [
    {
      title: "Introduction to Web",
      duration: "5 Lectures • 1h 20m",
      lectures: [
        { name: "What is Web Development?", time: "12m", preview: true },
        { name: "HTML Basics", time: "18m" },
        { name: "CSS Overview", time: "20m" },
      ],
    },
    {
      title: "Advanced Topics",
      duration: "8 Lectures • 3h",
      lectures: [
        { name: "JavaScript Deep Dive", time: "40m" },
        { name: "React Fundamentals", time: "50m" },
        { name: "Performance Optimization", time: "35m" },
      ],
    },
  ];

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <>
      <div className="relative min-h-screen bg-linear-to-r from-gray-900 via-black to-gray-900 text-white">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header */}
            <div>
              <button
                onClick={() => navigate(-1)}
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                ← Back
              </button>

              <h1 className="text-4xl font-extrabold mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-gray-300 max-w-2xl">
                This lesson page shows details for the selected lecture.
              </p>

              <p className="text-sm text-gray-400 mt-4">
                Course by{" "}
                <span className="text-indigo-400 font-medium">Instructor</span>
              </p>
            </div>

            {/* Course Structure */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-6">Course Content</h2>

              <div className="space-y-4">
                {courseStructure.map((chapter, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-xl overflow-hidden"
                  >
                    {/* Chapter Header */}
                    <button
                      onClick={() => toggleChapter(index)}
                      className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-white/5 transition"
                    >
                      <div>
                        <p className="font-medium">{chapter.title}</p>
                        <p className="text-sm text-gray-400">
                          {chapter.duration}
                        </p>
                      </div>

                      <span
                        className={`transform transition-transform duration-300 ${
                          openChapter === index ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Lectures */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openChapter === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <ul className="border-t border-white/10 px-5 py-4 space-y-3 text-sm text-gray-300">
                        {chapter.lectures.map((lecture, i) => (
                          <li
                            key={i}
                            className="flex justify-between items-center hover:text-white transition"
                          >
                            <span>{lecture.name}</span>
                            <span className="text-indigo-400">
                              {lecture.preview ? "Preview • " : ""}
                              {lecture.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Course Description</h3>
              <p className="text-gray-300 leading-relaxed">
                This course is designed to take you from beginner to advanced
                frontend developer. You will build real projects, understand
                core concepts deeply, and gain practical experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl">
              <div className="h-44 bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-semibold">
                Course Preview
              </div>

              <div className="p-6 space-y-6">
                {/* Price */}
                <div>
                  <p className="text-3xl font-bold">49.99 EGP</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="line-through">99.99 EGP</span>
                    <span className="text-green-400 font-semibold">
                      50% off
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex justify-between text-sm text-gray-300">
                  <span>⏱ 12h</span>
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] transition font-semibold shadow-lg">
                  Enroll Now
                </button>

                {/* Benefits */}
                <div>
                  <p className="font-semibold mb-3">This course includes:</p>
                  <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                    <li>Lifetime access</li>
                    <li>Hands-on projects</li>
                    <li>Downloadable resources</li>
                    <li>Quizzes & assignments</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SingleLecture;
