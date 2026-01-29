import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface PDF {
  id: string;
  name: string;
  url: string;
}

export interface Lecture {
  id: string;
  title: string;
  code: string;
  videoUrl: string;
  pdfs: PDF[];
  quiz: Quiz[];
  courseId: string;
}

export interface Course {
  id: string;
  name: string;
  grade: string;
  lectures: Lecture[];
  color: string;
}

interface AppContextType {
  userRole: 'teacher' | 'student';
  setUserRole: (role: 'teacher' | 'student') => void;
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  addCourse: (course: Course) => void;
  updateCourse: (courseId: string, updates: Partial<Course>) => void;
  deleteCourse: (courseId: string) => void;
  addLecture: (courseId: string, lecture: Lecture) => void;
  updateLecture: (lectureId: string, updates: Partial<Lecture>) => void;
  deleteLecture: (lectureId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const generateCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const initialCourses: Course[] = [
  {
    id: '1',
    name: 'Mathematics',
    grade: 'Grade 10',
    color: 'from-orange-400 via-pink-500 to-purple-600',
    lectures: [
      {
        id: 'l1',
        title: 'Introduction to Algebra',
        code: generateCode(),
        videoUrl: 'https://example.com/video1.mp4',
        courseId: '1',
        pdfs: [
          { id: 'p1', name: 'Algebra Basics.pdf', url: '#' },
          { id: 'p2', name: 'Practice Problems.pdf', url: '#' },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is 2x + 3 = 7?',
            options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
            correctAnswer: 1,
          },
          {
            id: 'q2',
            question: 'Solve for y: 3y - 5 = 10',
            options: ['y = 3', 'y = 4', 'y = 5', 'y = 6'],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: 'l2',
        title: 'Quadratic Equations',
        code: generateCode(),
        videoUrl: 'https://example.com/video2.mp4',
        courseId: '1',
        pdfs: [
          { id: 'p3', name: 'Quadratics Guide.pdf', url: '#' },
        ],
        quiz: [
          {
            id: 'q3',
            question: 'What is the quadratic formula?',
            options: [
              'x = -b ± √(b² - 4ac) / 2a',
              'x = b ± √(b² + 4ac) / 2a',
              'x = -b ± √(b² + 4ac) / a',
              'x = b² - 4ac',
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Physics',
    grade: 'Grade 11',
    color: 'from-blue-400 via-cyan-500 to-teal-600',
    lectures: [
      {
        id: 'l3',
        title: 'Laws of Motion',
        code: generateCode(),
        videoUrl: 'https://example.com/video3.mp4',
        courseId: '2',
        pdfs: [
          { id: 'p4', name: 'Newton Laws.pdf', url: '#' },
        ],
        quiz: [
          {
            id: 'q4',
            question: 'What is Newton\'s First Law?',
            options: [
              'F = ma',
              'An object at rest stays at rest',
              'Every action has an equal reaction',
              'E = mc²',
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<'teacher' | 'student'>('student');
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const addCourse = (course: Course) => {
    setCourses([...courses, course]);
  };

  const updateCourse = (courseId: string, updates: Partial<Course>) => {
    setCourses(courses.map(c => c.id === courseId ? { ...c, ...updates } : c));
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(c => c.id !== courseId));
  };

  const addLecture = (courseId: string, lecture: Lecture) => {
    setCourses(courses.map(c => {
      if (c.id === courseId) {
        return { ...c, lectures: [...c.lectures, lecture] };
      }
      return c;
    }));
  };

  const updateLecture = (lectureId: string, updates: Partial<Lecture>) => {
    setCourses(courses.map(c => ({
      ...c,
      lectures: c.lectures.map(l => 
        l.id === lectureId ? { ...l, ...updates } : l
      ),
    })));
  };

  const deleteLecture = (lectureId: string) => {
    setCourses(courses.map(c => ({
      ...c,
      lectures: c.lectures.filter(l => l.id !== lectureId),
    })));
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        courses,
        setCourses,
        addCourse,
        updateCourse,
        deleteCourse,
        addLecture,
        updateLecture,
        deleteLecture,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
