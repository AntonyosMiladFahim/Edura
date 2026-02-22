    import React from "react";
    import { Link } from "react-router-dom";

    const GradeCard = ({ grade }) => {
    return (
        <Link to={`/grade/${grade.id}`}>
        <div
            className="
            bg-white/5
            border border-white/10
            rounded-2xl
            p-6
            text-center
            hover:-translate-y-2
            hover:border-indigo-500/50
            transition
            cursor-pointer
            "
        >
            <h3 className="text-xl font-bold text-white">{grade.name}</h3>

            <p className="mt-2 text-gray-400 text-sm">{grade.description}</p>

            <span className="mt-4 inline-block text-indigo-400 font-medium">
            View Subjects →
            </span>
        </div>
        </Link>
    );
    };

    export default GradeCard;
