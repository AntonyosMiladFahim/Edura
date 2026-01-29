import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./components/HomePage";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { StudentView } from "./components/StudentView";
import { CourseView } from "./components/CourseView";
import { LectureView } from "./components/LectureView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "teacher", Component: TeacherDashboard },
      { path: "student", Component: StudentView },
      { path: "course/:courseId", Component: CourseView },
      { path: "lecture/:lectureId", Component: LectureView },
    ],
  },
]);
