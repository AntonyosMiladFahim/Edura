import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';
import { Plus, BookOpen, Edit, Trash2, Copy, Video, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import type { Course, Lecture, PDF, Quiz } from '@/app/context/AppContext';

export function TeacherDashboard() {
  const { courses, addCourse, updateCourse, deleteCourse, addLecture, updateLecture, deleteLecture } = useApp();
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [isAddingLecture, setIsAddingLecture] = useState<string | null>(null);
  const [newCourse, setNewCourse] = useState({ name: '', grade: '' });
  const [newLecture, setNewLecture] = useState<Partial<Lecture>>({
    title: '',
    videoUrl: '',
  });

  const handleAddCourse = () => {
    if (!newCourse.name || !newCourse.grade) {
      toast.error('Please fill in all fields');
      return;
    }

    const course: Course = {
      id: Date.now().toString(),
      name: newCourse.name,
      grade: newCourse.grade,
      lectures: [],
      color: ['from-orange-400 via-pink-500 to-purple-600', 'from-blue-400 via-cyan-500 to-teal-600', 'from-green-400 via-emerald-500 to-teal-600'][Math.floor(Math.random() * 3)],
    };

    addCourse(course);
    setNewCourse({ name: '', grade: '' });
    setIsAddingCourse(false);
    toast.success('Course created successfully!');
  };

  const handleAddLecture = (courseId: string) => {
    if (!newLecture.title || !newLecture.videoUrl) {
      toast.error('Please fill in all fields');
      return;
    }

    const lecture: Lecture = {
      id: Date.now().toString(),
      title: newLecture.title,
      code: Math.random().toString(36).substring(2, 8).toUpperCase(),
      videoUrl: newLecture.videoUrl,
      courseId,
      pdfs: [],
      quiz: [
        {
          id: Date.now().toString(),
          question: 'Sample question - please update',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
          correctAnswer: 0,
        },
      ],
    };

    addLecture(courseId, lecture);
    setNewLecture({ title: '', videoUrl: '' });
    setIsAddingLecture(null);
    toast.success(`Lecture created with code: ${lecture.code}`);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const regenerateCode = (lectureId: string) => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    updateLecture(lectureId, { code: newCode });
    toast.success(`New code generated: ${newCode}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Teacher Dashboard
        </h1>
        <Dialog open={isAddingCourse} onOpenChange={setIsAddingCourse}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
              <Plus className="w-5 h-5" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="courseName">Course Name</Label>
                <Input
                  id="courseName"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  placeholder="e.g., Mathematics"
                />
              </div>
              <div>
                <Label htmlFor="grade">Grade</Label>
                <Input
                  id="grade"
                  value={newCourse.grade}
                  onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value })}
                  placeholder="e.g., Grade 10"
                />
              </div>
              <Button onClick={handleAddCourse} className="w-full">
                Create Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-24">
          <BookOpen className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">No courses yet</h2>
          <p className="text-gray-500 mb-6">Create your first course to get started</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h2>
                    <p className="text-gray-600">{course.grade}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => {
                        deleteCourse(course.id);
                        toast.success('Course deleted');
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Lectures ({course.lectures.length})
                    </h3>
                    <Dialog
                      open={isAddingLecture === course.id}
                      onOpenChange={(open) => setIsAddingLecture(open ? course.id : null)}
                    >
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Plus className="w-4 h-4" />
                          Add Lecture
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create New Lecture</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="lectureTitle">Lecture Title</Label>
                            <Input
                              id="lectureTitle"
                              value={newLecture.title}
                              onChange={(e) => setNewLecture({ ...newLecture, title: e.target.value })}
                              placeholder="e.g., Introduction to Algebra"
                            />
                          </div>
                          <div>
                            <Label htmlFor="videoUrl">Video URL</Label>
                            <Input
                              id="videoUrl"
                              value={newLecture.videoUrl}
                              onChange={(e) => setNewLecture({ ...newLecture, videoUrl: e.target.value })}
                              placeholder="https://example.com/video.mp4"
                            />
                          </div>
                          <Button onClick={() => handleAddLecture(course.id)} className="w-full">
                            Create Lecture
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {course.lectures.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No lectures yet</p>
                  ) : (
                    <div className="grid gap-3">
                      {course.lectures.map((lecture) => (
                        <div
                          key={lecture.id}
                          className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-pink-200 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{lecture.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Video className="w-4 h-4" />
                                  Video
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="w-4 h-4" />
                                  {lecture.pdfs.length} PDFs
                                </div>
                                <div className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg font-mono font-bold text-orange-700">
                                  {lecture.code}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyCode(lecture.code)}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => regenerateCode(lecture.id)}
                              >
                                Regenerate Code
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  deleteLecture(lecture.id);
                                  toast.success('Lecture deleted');
                                }}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
