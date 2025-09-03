import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from './components/layout/Footer';
import Demo from './Demo';
import LoadingSpinner from './components/ui/LoadingSpinner';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Security = lazy(() => import('./pages/Security/Security'));
const Product = lazy(() => import('./pages/Product'));
const Download = lazy(() => import('./pages/Download'));
// const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-1">
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
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
