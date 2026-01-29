import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Play, FileText, Download, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function LectureView() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const { courses } = useApp();

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // Find the lecture
  let lecture = null;
  let courseName = '';
  for (const course of courses) {
    const found = course.lectures.find((l) => l.id === lectureId);
    if (found) {
      lecture = found;
      courseName = course.name;
      break;
    }
  }

  if (!lecture) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600">Lecture not found</p>
      </div>
    );
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      toast.error('Please select an answer');
      return;
    }

    const currentQuestion = lecture.quiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      toast.success('Correct!');
    } else {
      toast.error('Incorrect answer');
    }

    if (currentQuestionIndex < lecture.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz complete
      const finalScore = isCorrect ? score + 1 : score;
      const percentage = (finalScore / lecture.quiz.length) * 100;
      
      if (percentage >= 50) {
        setQuizCompleted(true);
        toast.success(`Quiz completed! Score: ${finalScore}/${lecture.quiz.length}`);
      } else {
        toast.error(`Score too low: ${finalScore}/${lecture.quiz.length}. Please try again.`);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
      }
    }
  };

  if (!quizCompleted) {
    const currentQuestion = lecture.quiz[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="shadow-2xl border-2 border-orange-100">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    Question {currentQuestionIndex + 1} of {lecture.quiz.length}
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">Complete the Quiz to Access Lecture</CardTitle>
                <p className="text-center text-gray-600 mt-2">{lecture.title}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {currentQuestion.question}
                  </h3>
                  <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                            selectedAnswer === index
                              ? 'border-pink-500 bg-pink-50'
                              : 'border-gray-200 hover:border-pink-200 bg-white'
                          }`}
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-medium">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleAnswerSubmit}
                  className="w-full py-6 text-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  {currentQuestionIndex < lecture.quiz.length - 1 ? 'Next Question' : 'Submit Quiz'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-white mb-1">{lecture.title}</h1>
          <p className="text-white/90">{courseName}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-24 h-24 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 text-lg">Video Player</p>
                  <p className="text-white/50 text-sm mt-2">{lecture.videoUrl}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this lecture</h2>
              <p className="text-gray-600">
                This lecture covers important concepts in {courseName}. Make sure to review the
                resources below and take notes as you watch.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quiz Result */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900">Quiz Passed!</h3>
                  <p className="text-sm text-green-700">Score: {score}/{lecture.quiz.length}</p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Resources
              </h3>
              {lecture.pdfs.length === 0 ? (
                <p className="text-gray-500 text-sm">No resources available</p>
              ) : (
                <div className="space-y-2">
                  {lecture.pdfs.map((pdf) => (
                    <div
                      key={pdf.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-900">{pdf.name}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
