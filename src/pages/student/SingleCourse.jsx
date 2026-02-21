import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function SingleCourse() {
  const { id } = useParams();
  const { getById } = useAppContext();

  const course = getById("courses", id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold">Course not found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <main className="pt-24 min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold">{course.title}</h1>
            <p className="text-gray-400 mt-2">{course.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(course.lectures || []).map((lec) => (
              <Link
                to={`/lecture/${lec.id}`}
                key={lec.id}
                className="block bg-white/5 rounded-2xl p-6 hover:bg-white/7 transition"
              >
                <h3 className="text-lg font-semibold">{lec.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Duration: {lec.durationMins} mins
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Sections: {(lec.sections || []).length}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SingleCourse;
