import { Outlet } from 'react-router';
import { AppProvider } from '@/app/context/AppContext';
import { Navigation } from './Navigation';

export function RootLayout() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <Navigation />
        <main className="pt-20">
          <Outlet />
        </main>
      </div>
    </AppProvider>
  );
}
