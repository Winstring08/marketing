import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ShieldIcon, ArrowRightIcon } from '../components/Icons';

const NotFound: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.error-404', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.from('.error-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl"
          >
            <ShieldIcon size={48} className="text-white" />
          </motion.div>

          <div className="error-404 mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <div className="error-content space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              페이지를 찾을 수 없습니다
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 
              URL을 다시 확인하거나 홈페이지로 돌아가주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                홈으로 돌아가기
                <ArrowRightIcon size={20} className="ml-2" />
              </Link>
              
              <Link
                to="/product"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              >
                제품 둘러보기
              </Link>
            </div>
          </div>

          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              자주 찾는 페이지
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/security" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
                보안 기술
              </Link>
              <Link to="/product" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
                제품 기능
              </Link>
              <Link to="/download" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
                다운로드
              </Link>
              <Link to="/" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
                홈페이지
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/20 to-blue-200/20 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default NotFound;