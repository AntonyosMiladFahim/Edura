import { useParams, useNavigate } from 'react-router';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Play, FileText, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CourseView() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses } = useApp();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className={`bg-gradient-to-br ${course.color} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-white/20"
            onClick={() => navigate('/student')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          <h1 className="text-5xl font-bold text-white mb-2">{course.name}</h1>
          <p className="text-xl text-white/90">{course.grade}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Lectures ({course.lectures.length})
        </h2>

        {course.lectures.length === 0 ? (
          <div className="text-center py-24">
            <Play className="w-24 h-24 mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No lectures yet</h3>
            <p className="text-gray-500">Check back later for new content</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {course.lectures.map((lecture, index) => (
              <motion.div
                key={lecture.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20"></div>
                  <Play className="w-16 h-16 text-white/80 relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{lecture.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {lecture.pdfs.length} Resources
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock className="w-4 h-4" />
                      Quiz Required
                    </div>
                  </div>
                  <Button
                    onClick={() => navigate(`/lecture/${lecture.id}`)}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                  >
                    Start Lecture
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
