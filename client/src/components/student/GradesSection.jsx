    import React from "react";
    import { Link } from "react-router-dom";
    import { useAppContext } from "../../context/AppContext";
    import GradeCard from "./GradeCard";

    const GradesSection = () => {
    const { grades } = useAppContext();

    return (
        <section className="py-20 bg-black text-white">
        {/* Title */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">
            Learn by{" "}
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Grade
            </span>
            </h2>

            <p className="mt-3 text-gray-400">
            Choose your grade and start your learning journey.
            </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {grades.slice(0, 4).map((grade) => (
            <GradeCard key={grade.id} grade={grade} />
            ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
            <Link
            to="/grades"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
            Show All Grades
            </Link>
        </div>
        </section>
    );
    };

    export default GradesSection;
