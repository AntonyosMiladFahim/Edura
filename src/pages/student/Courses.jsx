import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function Courses() {
  const { gradeId } = useParams();
  const { getItems, getById } = useAppContext();

  const grade = getById("grades", gradeId);
  const courses = (getItems("courses") || []).filter(
    (c) => String(c.gradeId) === String(gradeId),
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold">
              {grade ? grade.name : "Courses"}
            </h1>
            <p className="text-gray-400">
              Browse available courses and their lectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                className="block bg-white/5 rounded-2xl p-6 hover:bg-white/7 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                      {course.description}
                    </p>
                    <p className="mt-3 text-sm text-gray-400">
                      Price: {course.price} EGP • Lectures:{" "}
                      {course.lectures?.length || 0}
                    </p>
                  </div>
                  <div className="shrink-0 self-center text-indigo-400 font-medium">
                    Open →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Courses;
