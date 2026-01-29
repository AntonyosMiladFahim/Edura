import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';
import { useNavigate } from 'react-router';
import { BookOpen, Play, Lock, KeyRound } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function StudentView() {
  const { courses } = useApp();
  const navigate = useNavigate();
  const [isEnteringCode, setIsEnteringCode] = useState(false);
  const [lectureCode, setLectureCode] = useState('');

  const handleEnterCode = () => {
    if (!lectureCode) {
      toast.error('Please enter a lecture code');
      return;
    }

    // Find lecture with matching code
    let foundLecture = null;
    for (const course of courses) {
      const lecture = course.lectures.find(
        (l) => l.code.toUpperCase() === lectureCode.toUpperCase()
      );
      if (lecture) {
        foundLecture = lecture;
        break;
      }
    }

    if (foundLecture) {
      setLectureCode('');
      setIsEnteringCode(false);
      navigate(`/lecture/${foundLecture.id}`);
    } else {
      toast.error('Invalid lecture code');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          My Courses
        </h1>
        <Button
          onClick={() => setIsEnteringCode(true)}
          className="gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
        >
          <KeyRound className="w-5 h-5" />
          Enter Lecture Code
        </Button>
      </div>

      <Dialog open={isEnteringCode} onOpenChange={setIsEnteringCode}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Lecture Code</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Enter the 6-character code provided by your teacher
            </p>
            <Input
              value={lectureCode}
              onChange={(e) => setLectureCode(e.target.value.toUpperCase())}
              placeholder="ABC123"
              className="text-center text-2xl font-mono font-bold tracking-widest"
              maxLength={6}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEnterCode();
                }
              }}
            />
            <Button onClick={handleEnterCode} className="w-full">
              Access Lecture
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {courses.length === 0 ? (
        <div className="text-center py-24">
          <BookOpen className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">No courses available</h2>
          <p className="text-gray-500">Check back later for new courses</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              <div className={`h-40 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/90" />
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h2>
                  <p className="text-gray-600">{course.grade}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Play className="w-4 h-4" />
                    <span>{course.lectures.length} Lectures</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:bg-pink-50">
                    View Course
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
