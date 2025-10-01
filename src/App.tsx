import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import NotFound from '@/pages/NotFound';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/layout/Footer';

const Home = lazy(() => import('@/pages/Home'));
const Security = lazy(() => import('@/pages/Security/Security'));
const Product = lazy(() => import('@/pages/Product/Product'));
const Download = lazy(() => import('@/pages/Download/Download'));

function App() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => { window.history.scrollRestoration = prev; };
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <header>
          <Navbar />
        </header>
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
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
      </Router>
    </ThemeProvider>
  );
}

export default App
