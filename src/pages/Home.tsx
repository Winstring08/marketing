import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldIcon, LockIcon, KeyIcon, ShareIcon, DeviceIcon, CloudIcon, 
  ArrowRightIcon, CheckIcon, SparklesIcon, RocketIcon, FlashIcon,
  ServerIcon, DatabaseIcon, CrownIcon 
} from '../components/Icons';
import SecurityPolygonScene from '../components/SecurityPolygon';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
        y: 50,
        // opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <KeyIcon size={24} />,
      title: '원터치 로그인',
      description: '단 하나의 마스터 키로 모든 계정에 접근',
      badge: 'SECURE'
    },
    {
      icon: <DeviceIcon size={24} />,
      title: '크로스 플랫폼',
      description: '모든 디바이스에서 실시간 동기화',
      badge: 'SYNC'
    },
    {
      icon: <ShareIcon size={24} />,
      title: '제로 노출 공유',
      description: '비밀번호 노출 없이 팀원과 협업',
      badge: 'TEAM'
    }
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-surface-light-200 dark:bg-surface-dark-500 discord-scrollbar">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <SecurityPolygonScene />
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand/10 dark:bg-brand/20 rounded-full border border-brand/20 dark:border-brand/30">
                  <SparklesIcon size={16} className="text-brand" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">Enterprise Security</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="hero-text text-6xl lg:text-7xl font-black text-text-light dark:text-white leading-tight">
                  비밀번호 관리의<br />
                  <span className="gradient-text">새로운 표준</span>
                </h1>
                
                {/* Description */}
                <p className="hero-text text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Compass Security는 최첨단 암호화 기술과 직관적인 인터페이스로<br />
                  기업의 디지털 자산을 안전하게 보호합니다
                </p>
                
                {/* CTA Buttons */}
                <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    to="/product"
                    className="btn-brand inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <RocketIcon size={20} className="mr-2" />
                    무료로 시작하기
                  </Link>
                  <Link
                    to="/security"
                    className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <ShieldIcon size={20} className="mr-2" />
                    보안 기능 살펴보기
                  </Link>
                </div>

                {/* Stats */}
                <div className="pt-12 flex justify-center gap-12">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="text-3xl font-bold text-brand">1M+</div>
                    <div className="text-xs uppercase tracking-wider text-text-muted">사용자</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-3xl font-bold text-brand">99.9%</div>
                    <div className="text-xs uppercase tracking-wider text-text-muted">가용성</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="text-3xl font-bold text-brand">256-bit</div>
                    <div className="text-xs uppercase tracking-wider text-text-muted">암호화</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-surface-light-100 dark:bg-surface-dark-600">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">
                핵심 기능
              </h2>
              <p className="text-text-light dark:text-text-secondary">
                기업의 보안을 위한 필수 기능들
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-discord p-6 h-full hover:transform hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-lg flex items-center justify-center">
                        <div className="text-brand">
                          {feature.icon}
                        </div>
                      </div>
                      <span className="text-xxs font-bold uppercase tracking-wider px-2 py-1 bg-surface-light-300 dark:bg-surface-dark-100 text-text-muted rounded">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-text-light dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-light dark:text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-surface-light-200 dark:bg-surface-dark-500">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-status-success/10 rounded-full mb-4">
                  <div className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-status-success">Active Protection</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-white">
                  기업의 디지털 자산을<br />
                  완벽하게 보호합니다
                </h2>
                <p className="text-text-light dark:text-text-secondary mb-8 leading-relaxed">
                  최첨단 암호화 기술과 제로 트러스트 아키텍처로
                  어떤 위협으로부터도 안전합니다.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: <LockIcon size={16} />, text: 'End-to-End 암호화로 완벽한 데이터 보호' },
                    { icon: <ShieldIcon size={16} />, text: 'Zero-Knowledge 아키텍처로 프라이버시 보장' },
                    { icon: <KeyIcon size={16} />, text: 'Multi-Factor 인증으로 접근 제어 강화' },
                    { icon: <CheckIcon size={16} />, text: 'ISO 27001 및 SOC 2 Type II 인증 획득' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors">
                      <div className="text-brand flex-shrink-0">{item.icon}</div>
                      <span className="text-sm text-text-light dark:text-text-primary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-elevated p-8">
                <h3 className="text-lg font-bold mb-6 text-text-light dark:text-white text-center">
                  보안 성능 지표
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors cursor-pointer">
                    <ServerIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">AES-256</div>
                    <div className="text-xs text-text-muted">암호화 표준</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors cursor-pointer">
                    <DatabaseIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">ECC</div>
                    <div className="text-xs text-text-muted">키 교환</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors cursor-pointer">
                    <CloudIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">99.9%</div>
                    <div className="text-xs text-text-muted">가용성</div>
                  </div>
                  <div className="bg-surface-light-200 dark:bg-surface-dark-400 rounded-lg p-4 text-center hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors cursor-pointer">
                    <ShieldIcon size={24} className="mx-auto mb-2 text-brand" />
                    <div className="text-xl font-bold text-text-light dark:text-white">Zero</div>
                    <div className="text-xs text-text-muted">데이터 유출</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-light-100 dark:bg-surface-dark-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-12 text-center bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 border-brand/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 dark:bg-brand/20 rounded-full mb-6">
                <CrownIcon size={32} className="text-brand" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">
                지금 바로 시작하세요
              </h2>
              <p className="text-lg text-text-light dark:text-text-secondary mb-8 max-w-2xl mx-auto">
                14일 무료 체험으로 Compass Security의 모든 기능을 경험해보세요.
                신용카드 없이 바로 시작할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/download"
                  className="btn-brand inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <FlashIcon size={20} className="mr-2" />
                  무료로 시작하기
                </Link>
                <Link
                  to="/product"
                  className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  제품 더 알아보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;