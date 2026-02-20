import React, { useState } from "react";
import Navbar from "../../components/student/Navbar";
import Footer from "../../components/student/Footer";

function Add() {
  const [grades, setGrades] = useState([
    "Primary 1",
    "Primary 2",
    "Preparatory 1",
    "Secondary 1",
  ]);
  const [courses, setCourses] = useState([
    { title: "HTML Basics", grade: "Primary 1" },
    { title: "JavaScript Mastery", grade: "Preparatory 1" },
  ]);

  const [sections, setSections] = useState([
    { name: "", time: "", video: null },
  ]);

  const handleAddSection = () => {
    setSections([...sections, { name: "", time: "", video: null }]);
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleAddGrade = (e) => {
    e.preventDefault();
    const gradeName = e.target.gradeName.value.trim();
    const imageFile = e.target.gradeImage.files[0];
    if (gradeName && !grades.includes(gradeName)) {
      setGrades([...grades, gradeName]);
      e.target.reset();
      alert(`Grade "${gradeName}" added!`);
      if (imageFile) alert(`Image for Grade uploaded: ${imageFile.name}`);
    }
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const title = e.target.courseTitle.value.trim();
    const grade = e.target.courseGrade.value;
    const imageFile = e.target.courseImage.files[0];
    if (title) {
      setCourses([...courses, { title, grade }]);
      e.target.reset();
      alert(`Course "${title}" added to ${grade}!`);
      if (imageFile) alert(`Image for Course uploaded: ${imageFile.name}`);
    }
  };

  const handleAddLecture = (e) => {
    e.preventDefault();
    const lectureName = e.target.lectureName.value.trim();
    const courseTitle = e.target.courseForLecture.value;
    const imageFile = e.target.lectureImage.files[0];
    if (lectureName) {
      console.log("Sections:", sections); // يمكن ربطه بالـ API لاحقًا
      alert(`Lecture "${lectureName}" added to course "${courseTitle}"!`);
      e.target.reset();
      setSections([{ name: "", time: "", video: null }]);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const studentName = e.target.studentName.value.trim();
    const studentEmail = e.target.studentEmail.value.trim();
    const studentGrade = e.target.studentGrade.value;
    const studentCourse = e.target.studentCourse.value;
    const imageFile = e.target.studentImage.files[0];
    if (studentName && studentEmail) {
      alert(
        `Student "${studentName}" added to ${studentCourse} (${studentGrade})`,
      );
      if (imageFile) alert(`Profile image uploaded: ${imageFile.name}`);
      e.target.reset();
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
        <Navbar />
      </div>

      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-14 text-white space-y-10">
          <h1 className="text-3xl font-extrabold mb-8 text-center">
            Add New Items
          </h1>

          {/* Add Grade */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Add Grade</h2>
            <form onSubmit={handleAddGrade} className="flex flex-col gap-3">
              <input
                type="text"
                name="gradeName"
                placeholder="Grade Name (e.g. Primary 3)"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                required
              />
              <input
                type="file"
                name="gradeImage"
                accept="image/*"
                className="text-white bg-white/10 rounded-lg p-1"
              />
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg w-32">
                Add Grade
              </button>
            </form>
          </div>

          {/* Add Course */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Add Course</h2>
            <form onSubmit={handleAddCourse} className="flex flex-col gap-3">
              <input
                type="text"
                name="courseTitle"
                placeholder="Course Title"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                required
              />
              <select
                name="courseGrade"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              >
                {grades.map((g, idx) => (
                  <option key={idx} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <input
                type="file"
                name="courseImage"
                accept="image/*"
                className="text-white bg-white/10 rounded-lg p-1"
              />
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg w-32">
                Add Course
              </button>
            </form>
          </div>

          {/* Add Lecture */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Add Lecture</h2>
            <form onSubmit={handleAddLecture} className="flex flex-col gap-3">
              <input
                type="text"
                name="lectureName"
                placeholder="Lecture Name"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                required
              />
              <select
                name="courseForLecture"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              >
                {courses.map((c, idx) => (
                  <option key={idx} value={c.title}>
                    {c.title} ({c.grade})
                  </option>
                ))}
              </select>
              <input
                type="file"
                name="lectureImage"
                accept="image/*"
                className="text-white bg-white/10 rounded-lg p-1"
              />

              {/* Sections */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Sections</h3>
                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 mb-2 bg-white/5 p-2 rounded-lg"
                  >
                    <input
                      type="text"
                      placeholder="Section Name"
                      value={sec.name}
                      onChange={(e) =>
                        handleSectionChange(idx, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 12m)"
                      value={sec.time}
                      onChange={(e) =>
                        handleSectionChange(idx, "time", e.target.value)
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                      required
                    />
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        handleSectionChange(idx, "video", e.target.files[0])
                      }
                      className="text-white bg-white/10 rounded-lg p-1"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddSection}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg w-32 mt-2"
                >
                  Add Section
                </button>
              </div>

              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg w-32 mt-4">
                Add Lecture
              </button>
            </form>
          </div>

          {/* Add Student */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <form onSubmit={handleAddStudent} className="flex flex-col gap-3">
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="studentEmail"
                placeholder="Student Email"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400"
                required
              />
              <select
                name="studentGrade"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              >
                {grades.map((g, idx) => (
                  <option key={idx} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <select
                name="studentCourse"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white"
              >
                {courses.map((c, idx) => (
                  <option key={idx} value={c.title}>
                    {c.title} ({c.grade})
                  </option>
                ))}
              </select>
              <input
                type="file"
                name="studentImage"
                accept="image/*"
                className="text-white bg-white/10 rounded-lg p-1"
              />
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg w-32">
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Add;
