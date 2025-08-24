import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sidebar from '../components/Sidebar';
import { 
  KeyIcon, DeviceIcon, ShareIcon, CheckIcon, RocketIcon, 
  WindowsIcon, AppleIcon, LinuxIcon, AndroidIcon, CloudIcon,
  LockIcon, ShieldIcon, DatabaseIcon, FlashIcon
} from '../components/Icons';

gsap.registerPlugin(ScrollTrigger);

const Product: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('credentials');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['credentials', 'autologin', 'sharing'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-hero', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.steps-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const sidebarItems = [
    { id: 'credentials', label: '계정정보 등록하기', icon: <KeyIcon size={20} /> },
    { id: 'autologin', label: '자동으로 로그인하기', icon: <DeviceIcon size={20} /> },
    { id: 'sharing', label: '비밀번호 공유하기', icon: <ShareIcon size={20} /> },
  ];

  const credentialSteps = [
    {
      number: '01',
      title: '브라우저 확장 프로그램 설치',
      description: '크롬, 파이어폭스, 엣지 등 모든 주요 브라우저 지원',
      icon: <DeviceIcon size={24} />
    },
    {
      number: '02',
      title: '마스터 비밀번호 설정',
      description: '단 하나의 강력한 비밀번호로 모든 계정 보호',
      icon: <LockIcon size={24} />
    },
    {
      number: '03',
      title: '계정 정보 저장',
      description: '웹사이트 방문 시 자동으로 자격증명 감지 및 저장',
      icon: <DatabaseIcon size={24} />
    },
    {
      number: '04',
      title: '기기 간 동기화',
      description: '모든 기기에서 실시간으로 계정 정보 동기화',
      icon: <CloudIcon size={24} />
    }
  ];

  const features = [
    {
      title: '원클릭 로그인',
      description: '복잡한 비밀번호를 기억할 필요 없이 클릭 한 번으로 로그인',
      icon: <FlashIcon size={20} />
    },
    {
      title: '자동 폼 필링',
      description: '회원가입 폼, 결제 정보 등을 자동으로 입력',
      icon: <RocketIcon size={20} />
    },
    {
      title: '생체 인증 지원',
      description: 'Face ID, Touch ID, Windows Hello 등 생체 인증으로 빠른 접근',
      icon: <ShieldIcon size={20} />
    }
  ];

  const platforms = [
    { name: 'Windows', icon: <WindowsIcon size={20} /> },
    { name: 'macOS', icon: <AppleIcon size={20} /> },
    { name: 'Linux', icon: <LinuxIcon size={20} /> },
    { name: 'Android', icon: <AndroidIcon size={20} /> },
    { name: 'iOS', icon: <AppleIcon size={20} /> }
  ];

  return (
    <div ref={pageRef} className="min-h-screen pt-20 bg-surface-light-200 dark:bg-surface-dark-500 discord-scrollbar">
      {/* Hero Section */}
      <section className="product-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-brand/10 dark:bg-brand/20 border-2 border-brand/20 dark:border-brand/30"
            >
              <KeyIcon size={40} className="text-brand" />
            </motion.div>
            <h1 className="text-5xl font-black mb-4 text-text-light dark:text-white">
              제품 기능
            </h1>
            <p className="text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Compass Security의 강력한 기능으로 비밀번호 관리를 혁신하세요
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Sidebar 
              items={sidebarItems} 
              activeSection={activeSection}
              onItemClick={(id) => setActiveSection(id)}
            />
          </div>

          <div className="lg:col-span-3 space-y-20">
            {/* Credentials Section */}
            <section id="credentials" className="steps-section">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand/10 dark:bg-brand/20 rounded-full">
                  <KeyIcon size={16} className="text-brand" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">자격증명 관리</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">
                자격증명 만드는 방법
              </h2>
              <p className="text-lg text-text-light dark:text-text-secondary mb-8">
                기기가 바뀌어도 사용할 수 있는 안전한 자격증명 관리 시스템
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {credentialSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="step-card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-discord p-6 hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-discord flex items-center justify-center">
                            <span className="text-brand">{step.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-xxs font-bold uppercase tracking-wider px-2 py-1 bg-brand/10 dark:bg-brand/20 text-brand rounded">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-text-light dark:text-white">
                            {step.title}
                          </h3>
                          <p className="text-sm text-text-light dark:text-text-secondary">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 card-elevated p-6">
                <div className="flex items-center mb-4">
                  <DeviceIcon size={24} className="text-brand mr-3" />
                  <h3 className="text-lg font-semibold text-text-light dark:text-white">
                    크로스 플랫폼 지원
                  </h3>
                </div>
                <p className="text-text-light dark:text-text-secondary mb-4">
                  Windows, macOS, Linux, iOS, Android 등 모든 플랫폼에서 동일한 경험을 제공합니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="flex items-center space-x-2 px-3 py-2 bg-surface-light-300 dark:bg-surface-dark-100 rounded-discord hover:bg-brand/10 dark:hover:bg-brand/20 transition-colors cursor-pointer">
                      <span className="text-brand">{platform.icon}</span>
                      <span className="text-sm font-medium text-text-light dark:text-text-primary">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Auto Login Section */}
            <section id="autologin" className="scroll-mt-24">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-status-success/10 rounded-full">
                  <div className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-status-success">Active Feature</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">
                자동 로그인하는 방법
              </h2>
              <p className="text-lg text-text-light dark:text-text-secondary mb-8">
                사용자 비밀번호 하나만 기억하고 있으면 모든 계정에 자동으로 로그인
              </p>

              <div className="card-elevated p-8 bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 border border-brand/20 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-white flex items-center">
                  <RocketIcon size={28} className="text-brand mr-3" />
                  원클릭 자동 로그인
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="p-4 rounded-discord hover:bg-surface-light-100 dark:hover:bg-surface-dark-400 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 text-brand">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold mb-1 text-text-light dark:text-white">{feature.title}</h4>
                          <p className="text-sm text-text-light dark:text-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-discord p-6">
                  <h3 className="text-xl font-bold mb-4 text-text-light dark:text-white flex items-center">
                    <DeviceIcon size={24} className="text-brand mr-3" />
                    브라우저 통합
                  </h3>
                  <ul className="space-y-3">
                    {['웹사이트 자동 감지', '안전한 자동 입력', '피싱 사이트 경고'].map((item, i) => (
                      <li key={i} className="flex items-center p-2 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-100 transition-colors">
                        <CheckIcon size={20} className="text-status-success mr-3" />
                        <span className="text-text-light dark:text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-discord p-6">
                  <h3 className="text-xl font-bold mb-4 text-text-light dark:text-white flex items-center">
                    <CloudIcon size={24} className="text-brand mr-3" />
                    앱 통합
                  </h3>
                  <ul className="space-y-3">
                    {['네이티브 앱 지원', 'SSH 키 관리', 'API 토큰 관리'].map((item, i) => (
                      <li key={i} className="flex items-center p-2 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-100 transition-colors">
                        <CheckIcon size={20} className="text-status-success mr-3" />
                        <span className="text-text-light dark:text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Sharing Section */}
            <section id="sharing" className="scroll-mt-24">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-light/10 rounded-full">
                  <ShareIcon size={16} className="text-brand-light" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-light">Secure Sharing</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">
                비밀번호 공유하는 방법
              </h2>
              <p className="text-lg text-text-light dark:text-text-secondary mb-8">
                공유받는 사람도 실제 비밀번호를 알 수 없는 안전한 공유 시스템
              </p>

              <div className="card-elevated overflow-hidden">
                <div className="bg-gradient-to-r from-brand to-brand-light p-6 text-white">
                  <ShareIcon size={32} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">제로 지식 공유</h3>
                  <p className="opacity-90">
                    비밀번호를 공유해도 실제 값은 누구도 볼 수 없습니다
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    {[
                      { num: '1', title: '공유 세션 생성', desc: '암호화된 자격증명에 대한 일회용 또는 영구 공유 세션을 생성합니다.' },
                      { num: '2', title: '권한 설정', desc: '읽기 전용, 일회성 사용, 만료 시간 등 세부 권한을 설정합니다.' },
                      { num: '3', title: '안전한 전달', desc: '오직 수신자의 계정 정보에 전달되며, 수신자에게 비밀번호가 노출되지 않게 사용 가능합니다.' }
                    ].map((step, i) => (
                      <div key={i} className="flex items-start p-4 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand/10 dark:bg-brand/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-brand font-bold">{step.num}</span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-text-light dark:text-white">{step.title}</h4>
                          <p className="text-text-light dark:text-text-secondary">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-status-warning/10 rounded-discord">
                    <div className="flex items-start space-x-3">
                      <ShieldIcon size={20} className="text-status-warning flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-text-light dark:text-text-secondary">
                          <strong className="text-status-warning">보안 팁:</strong> 공유된 비밀번호는 언제든지 회수할 수 있으며, 
                          모든 접근 기록이 감사 로그에 기록됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;