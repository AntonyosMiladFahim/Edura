import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";
import { useAppContext } from "../../context/AppContext";

function SingleLecture() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItems } = useAppContext();

  const [lecture, setLecture] = useState(null);
  const [course, setCourse] = useState(null);
  const [openChapter, setOpenChapter] = useState(null);

  useEffect(() => {
    const courses = getItems("courses") || [];
    for (const c of courses) {
      const found = (c.lectures || []).find((l) => l.id === id);
      if (found) {
        setLecture(found);
        setCourse(c);
        break;
      }
    }
  }, [id, getItems]);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  if (!lecture) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold">Lecture not found</h2>
      </div>
    );
  }

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
        <Navbar />
      </div>

      <div className="relative min-h-screen pt-24 bg-linear-to-r from-gray-900 via-black to-gray-900 text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Back */}
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              ← Back
            </button>

            {/* Header */}
            <div>
              <h1 className="text-4xl font-extrabold mb-4">{lecture.name}</h1>
              <p className="text-gray-300 max-w-2xl">
                {lecture.summary || "Lecture details and content overview."}
              </p>

              <p className="text-sm text-gray-400 mt-4">
                From course{" "}
                <span className="text-indigo-400 font-medium">
                  {course?.title}
                </span>
              </p>
            </div>

            {/* Lecture Content (Accordion like Course UI) */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold mb-6">Lecture Sections</h2>

              <div className="space-y-4">
                {(lecture.sections || []).map((section, index) => (
                  <div
                    key={section.id}
                    className="border border-white/10 rounded-xl overflow-hidden"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => toggleChapter(index)}
                      className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-white/5 transition"
                    >
                      <div>
                        <p className="font-medium">{section.title}</p>
                        <p className="text-sm text-gray-400">
                          {section.durationMins || section.duration || "--"}{" "}
                          mins
                        </p>
                      </div>

                      <span
                        className={`transform transition-transform duration-300 ${
                          openChapter === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Section Body */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openChapter === index
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="border-t border-white/10 px-5 py-4 text-sm text-gray-300">
                        {section.videos && section.videos.length ? (
                          <ul className="space-y-3">
                            {section.videos.map((video) => (
                              <li
                                key={video.id}
                                className="flex items-center justify-between"
                              >
                                <div>
                                  <p className="font-medium text-gray-100">
                                    {video.title}
                                  </p>
                                  <p className="text-xs text-gray-400">
                                    {video.durationMins || "--"} mins
                                  </p>
                                </div>
                                {/* <button className="text-indigo-400 hover:underline">
                                  Play
                                </button> */}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex justify-between">
                            <span>{section.title}</span>
                            <span className="text-indigo-400">Open</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Lecture Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This lecture is part of a structured course designed to guide
                you step by step through the learning journey with clear
                explanations and practical sections.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl">
              <div className="h-44 bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-semibold">
                Lecture Overview
              </div>

              <div className="p-6 space-y-6">
                {/* Meta */}
                <div>
                  <p className="text-3xl font-bold">
                    {lecture.durationMins || "--"} mins
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {lecture.students || 0} students
                  </p>
                </div>

                <div className="flex justify-between text-sm text-gray-300">
                  <span>📘 {lecture.sections?.length || 0} Sections</span>
                  <span>🎓 Part of course</span>
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] transition font-semibold shadow-lg">
                  Start Lecture
                </button>

                {/* Info */}
                <div>
                  <p className="font-semibold mb-3">This lecture includes:</p>
                  <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                    <li>Structured sections</li>
                    <li>Clear explanations</li>
                    <li>Lifetime access</li>
                    <li>Progress tracking</li>
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
