import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

const GradePage = () => {
  const { id } = useParams();
  const { grades, getItems, getById } = useAppContext();

  const grade = getById("grades", id) || grades.find((g) => g.id === id);

  if (!grade) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold">Grade not found</h2>
      </div>
    );
  }

  const courses = (getItems("courses") || []).filter(
    (c) => String(c.gradeId) === String(grade.id),
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <section className="pt-24 min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold">{grade.name} Courses</h1>
            <p className="text-gray-400 mt-2">{grade.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.length === 0 && (
              <div className="col-span-full text-center text-gray-400">
                No courses found for this grade.
              </div>
            )}

            {courses.map((course) => (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                className="group block rounded-2xl p-6 bg-white/5 hover:bg-white/7 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold group-hover:text-white">
                      {course.title}
                    </h2>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="mt-4 text-sm text-gray-400">
                      <span>Lectures: {course.lectures?.length || 0}</span>
                      <span className="mx-2">•</span>
                      <span>Price: {course.price}</span>
                    </div>
                  </div>

                  <div className="shrink-0 self-center">
                    <div className="text-indigo-400 font-medium">Open →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GradePage;
