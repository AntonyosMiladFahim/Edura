import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const GradePage = () => {
  const { id } = useParams();
  const { grades } = useAppContext();

  const grade = grades.find((g) => g.id === id);

  if (!grade) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold">Grade not found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          {grade.name}
          <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Overview
          </span>
        </h1>
        <p className="text-gray-400 text-lg">{grade.description}</p>
      </div>

      {/* Example Subjects Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Example cards for subjects (replace with real subjects later) */}
        {["Lecture1", "Lecture2", "Lecture3", "Lecture4"].map((subject) => (
          <div
            key={subject}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-indigo-500/50 transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-white">{subject}</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Explore the {subject} lessons for {grade.name}.
            </p>
            <span className="mt-4 inline-block text-indigo-400 font-medium">
              View Lessons →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradePage;
