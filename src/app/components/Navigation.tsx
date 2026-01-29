import { Link, useLocation } from 'react-router';
import { useApp } from '@/app/context/AppContext';
import { GraduationCap, User, Home } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const { userRole, setUserRole } = useApp();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Edura
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/">
              <Button
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>

            {userRole === 'teacher' ? (
              <Link to="/teacher">
                <Button
                  variant={location.pathname === '/teacher' ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/student">
                <Button
                  variant={location.pathname === '/student' ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <User className="w-4 h-4" />
                  My Courses
                </Button>
              </Link>
            )}

            <div className="flex items-center gap-2 ml-4 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setUserRole('student')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  userRole === 'student'
                    ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setUserRole('teacher')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  userRole === 'teacher'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
