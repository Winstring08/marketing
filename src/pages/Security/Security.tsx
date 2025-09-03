import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sidebar from '../../components/layout/Sidebar';
import { ShieldIcon, LockIcon, KeyIcon, CloudIcon, CheckIcon, DatabaseIcon, ServerIcon, FlashIcon } from '../../components/Icons';

gsap.registerPlugin(ScrollTrigger);

const Security: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('encryption');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['encryption', 'end-to-end', 'master-key'];
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
      gsap.from('.security-hero', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.comparison-card', {
        scrollTrigger: {
          trigger: '.comparison-section',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const sidebarItems = [
    { id: 'encryption', label: '수준높은 암호화', icon: <LockIcon size={20} /> },
    { id: 'end-to-end', label: '사용자만 아는 비밀번호', icon: <KeyIcon size={20} /> },
    { id: 'master-key', label: '기기에 상관없이 로그인', icon: <CloudIcon size={20} /> },
  ];

  const encryptionMethods = [
    {
      name: '기존 방식',
      title: '비대칭키 암호 전송 → 대칭키 전환',
      pros: ['초기 연결 보안', 'RSA/DSA 표준'],
      cons: ['복잡한 키 관리', '성능 오버헤드', '중간자 공격 위험'],
      color: 'bg-surface-light-300 dark:bg-surface-dark-400',
      badgeColor: 'bg-text-muted/20 text-text-muted'
    },
    {
      name: 'Compass 방식',
      title: 'ECC Ephemeral Key Exchange',
      pros: ['완벽한 전방향 보안성', '적은 연산량', '강력한 보안성', '자동 키 폐기'],
      cons: [],
      color: 'bg-brand/5 dark:bg-brand/10 border-brand/20',
      badgeColor: 'bg-brand/10 dark:bg-brand/20 text-brand'
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen pt-16 bg-surface-light-200 dark:bg-surface-dark-500 discord-scrollbar">
      {/* Hero Section */}
      <section className="security-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-brand/10 dark:bg-brand/20 border-2 border-brand/20 dark:border-brand/30"
            >
              <ShieldIcon size={40} className="text-brand" />
            </motion.div>
            <h1 className="text-5xl font-black mb-4 text-text-light dark:text-white">
              보안 기술
            </h1>
            <p className="text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Compass Security는 최첨단 암호화 기술과 제로 트러스트 아키텍처로 
              기업의 중요한 데이터를 완벽하게 보호합니다
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
            {/* Encryption Comparison Section */}
            <section id="encryption" className="comparison-section">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand/10 dark:bg-brand/20 rounded-full">
                  <DatabaseIcon size={16} className="text-brand" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">암호화 기술</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-white">
                타 암호화 방식과의 비교
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {encryptionMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="comparison-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`card-discord p-6 h-full ${method.color} ${
                      method.name === 'Compass 방식' ? 'border border-brand/20' : ''
                    }`}>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-discord text-xs font-bold uppercase tracking-wider ${method.badgeColor} mb-4`}>
                        {method.name === 'Compass 방식' && <FlashIcon size={14} />}
                        <span>{method.name}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-text-light dark:text-white">
                        {method.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-status-success mb-2">장점</h4>
                          <ul className="space-y-2">
                            {method.pros.map((pro, i) => (
                              <li key={i} className="flex items-start">
                                <CheckIcon size={16} className="text-status-success mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-text-light dark:text-text-secondary">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {method.cons.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-status-danger mb-2">단점</h4>
                            <ul className="space-y-2">
                              {method.cons.map((con, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-status-danger mr-2">×</span>
                                  <span className="text-sm text-text-light dark:text-text-secondary">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      {method.name === 'Compass 방식' && (
                        <div className="mt-6 pt-4 border-t border-brand/20">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-status-success">권장 방식</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* End-to-End Encryption Section */}
            <section id="end-to-end" className="scroll-mt-24">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-status-success/10 rounded-full">
                  <div className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-status-success">Active Protection</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-white">
                서버에서도 알 수 없는 비밀번호
              </h2>
              <div className="card-elevated p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-white flex items-center">
                      <LockIcon size={24} className="text-brand mr-3" />
                      엔드투엔드 암호화
                    </h3>
                    <p className="text-text-light dark:text-text-secondary mb-6 leading-relaxed">
                      모든 비밀번호는 사용자의 디바이스에서 암호화되어 서버로 전송됩니다. 
                      서버는 암호화된 데이터만 저장하며, 복호화 키는 오직 사용자만이 가지고 있습니다.
                    </p>
                    <ul className="space-y-3">
                      {[
                        { title: '클라이언트 사이드 암호화', desc: '모든 데이터는 전송 전 암호화' },
                        { title: '제로 지식 아키텍처', desc: '서버는 암호화된 데이터만 보관' },
                        { title: '사용자 전용 키', desc: '복호화 키는 사용자만 소유' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start p-3 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 bg-brand/10 dark:bg-brand/20 rounded-discord flex items-center justify-center mr-3">
                            <span className="text-brand font-bold text-sm">{i + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-white">{item.title}</h4>
                            <p className="text-sm text-text-light dark:text-text-secondary">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="card-discord p-6">
                      <div className="flex items-center justify-between mb-4">
                        <LockIcon size={24} className="text-brand" />
                        <span className="text-xxs font-mono bg-surface-light-300 dark:bg-surface-dark-100 px-2 py-1 rounded">
                          AES-256-GCM
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-surface-light-300 dark:bg-surface-dark-100 rounded animate-pulse" />
                        <div className="h-2 bg-surface-light-300 dark:bg-surface-dark-100 rounded animate-pulse w-3/4" />
                        <div className="h-2 bg-surface-light-300 dark:bg-surface-dark-100 rounded animate-pulse w-1/2" />
                      </div>
                      <div className="mt-4 pt-4 border-t border-surface-light-300 dark:border-surface-dark-100">
                        <div className="flex items-center space-x-2">
                          <ServerIcon size={16} className="text-brand" />
                          <span className="text-xs text-text-muted">
                            암호화된 데이터 전송 중...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Master Key Section */}
            <section id="master-key" className="scroll-mt-24">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-light/10 rounded-full">
                  <KeyIcon size={16} className="text-brand-light" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-light">Key Management</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-white">
                기기가 바뀌어도 어디서든 로그인
              </h2>
              <div className="card-elevated p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-brand/10 dark:bg-brand/20 mr-4">
                    <KeyIcon size={32} className="text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-white">
                    생성형 마스터키 시스템
                  </h3>
                </div>
                <p className="text-text-light dark:text-text-secondary mb-8 leading-relaxed">
                  사용자의 마스터 비밀번호로부터 고유한 암호화 키를 생성합니다. 
                  이 키는 어떤 기기에서든 동일하게 재생성되어, 기기 변경 시에도 
                  모든 데이터에 접근할 수 있습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { num: '1', title: '마스터 비밀번호 입력', desc: '사용자가 기억하는 단 하나의 비밀번호' },
                    { num: '2', title: 'PBKDF2 키 유도', desc: '100,000+회 반복으로 강력한 키 생성' },
                    { num: '3', title: '데이터 복호화', desc: '모든 기기에서 동일한 접근 가능' }
                  ].map((step, i) => (
                    <div key={i} className="text-center p-4 rounded-discord hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-discord-lg">
                        <span className="text-white font-bold text-xl">{step.num}</span>
                      </div>
                      <h4 className="font-semibold mb-2 text-text-light dark:text-white">{step.title}</h4>
                      <p className="text-sm text-text-light dark:text-text-secondary">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-surface-light-300 dark:bg-surface-dark-100 rounded-discord">
                  <div className="flex items-center space-x-3">
                    <CloudIcon size={20} className="text-brand" />
                    <span className="text-sm text-text-light dark:text-text-secondary">
                      모든 데이터는 클라우드에 안전하게 동기화되어 어디서든 접근 가능합니다
                    </span>
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

export default Security;