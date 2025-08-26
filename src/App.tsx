import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SecurityPolygonScene from './components/SecurityPolygon';
import Demo from './Demo';

const Home = lazy(() => import('./pages/Home'));
const Security = lazy(() => import('./pages/Security'));
const Product = lazy(() => import('./pages/Product'));
const Download = lazy(() => import('./pages/Download'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="fixed top-20 right-0 w-96 h-96 opacity-20 pointer-events-none z-0">
            </div>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/security" element={<Security />} />
                <Route path="/product" element={<Product />} />
                <Route path="/download" element={<Download />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
