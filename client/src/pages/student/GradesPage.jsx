import React from "react";
import { useAppContext } from "../../context/AppContext";
import GradeCard from "../../components/student/GradeCard"; // adjust the path if needed

const GradesPage = () => {
  const { grades } = useAppContext();

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">
          All Grades
          <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Overview
          </span>
        </h1>
        <p className="mt-3 text-gray-400">
          Choose a grade to start your learning journey.
        </p>
      </div>

      {/* Grades Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {grades.map((grade) => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </div>
    </section>
  );
};

export default GradesPage;
