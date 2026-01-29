import { Link } from 'react-router';
import { useApp } from '@/app/context/AppContext';
import { GraduationCap, BookOpen, Video, FileText, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HomePage() {
  const { userRole } = useApp();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-500/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Welcome to Edura
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              A modern learning management system designed for seamless education
            </p>
            <Link to={userRole === 'teacher' ? '/teacher' : '/student'}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700"
              >
                <GraduationCap className="w-6 h-6 mr-2" />
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Why Choose Edura?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BookOpen,
              title: 'Course Management',
              description: 'Easily create and manage multiple courses across different grades',
              color: 'from-orange-400 to-pink-500',
            },
            {
              icon: Video,
              title: 'Video Lectures',
              description: 'Upload and share engaging video content with students',
              color: 'from-pink-500 to-purple-500',
            },
            {
              icon: FileText,
              title: 'PDF Resources',
              description: 'Share supplementary materials and study guides',
              color: 'from-purple-500 to-blue-500',
            },
            {
              icon: Trophy,
              title: 'Interactive Quizzes',
              description: 'Test student knowledge before accessing lecture content',
              color: 'from-blue-500 to-cyan-500',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Edura today and discover a new way to teach and learn
          </p>
          <Link to={userRole === 'teacher' ? '/teacher' : '/student'}>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100"
            >
              Start Learning Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
