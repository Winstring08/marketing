import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon, LockIcon, KeyIcon, CloudIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light-100 dark:bg-surface-dark-200 border-t border-surface-light-300 dark:border-surface-dark-100 mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-brand/10 dark:bg-brand/20">
                <ShieldIcon size={24} className="text-brand" />
              </div>
              <span className="text-lg font-bold text-text-light dark:text-white">Compass Security</span>
            </div>
            <p className="text-sm text-text-light dark:text-text-secondary leading-relaxed">
              엔터프라이즈급 보안 솔루션으로 안전한 디지털 환경을 구축하세요.
            </p>
            <div className="flex space-x-2">
              <button className="p-2 rounded-discord bg-surface-light-300 dark:bg-surface-dark-100 hover:bg-brand/10 dark:hover:bg-brand/20 transition-colors">
                <svg className="w-5 h-5 text-text-muted hover:text-brand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8163 19.388 20.5886 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3826 12.7447C17.3826 13.9014 16.5548 14.8459 15.4936 14.8459Z"/>
                </svg>
              </button>
              <button className="p-2 rounded-discord bg-surface-light-300 dark:bg-surface-dark-100 hover:bg-brand/10 dark:hover:bg-brand/20 transition-colors">
                <svg className="w-5 h-5 text-text-muted hover:text-brand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-text-muted">제품</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  자격증명 관리
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  자동 로그인
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  비밀번호 공유
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-text-muted">보안</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  암호화 기술
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  엔드투엔드 암호화
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-text-light dark:text-text-secondary hover:text-brand dark:hover:text-brand transition-colors">
                  마스터키 생성
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-text-muted">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-1 text-xxs font-bold uppercase tracking-wider bg-brand/10 dark:bg-brand/20 px-3 py-1.5 rounded-discord">
                <LockIcon size={14} className="text-brand" />
                <span className="text-brand">ECC</span>
              </div>
              <div className="flex items-center space-x-1 text-xxs font-bold uppercase tracking-wider bg-brand/10 dark:bg-brand/20 px-3 py-1.5 rounded-discord">
                <KeyIcon size={14} className="text-brand" />
                <span className="text-brand">AES-256</span>
              </div>
              <div className="flex items-center space-x-1 text-xxs font-bold uppercase tracking-wider bg-brand/10 dark:bg-brand/20 px-3 py-1.5 rounded-discord">
                <CloudIcon size={14} className="text-brand" />
                <span className="text-brand">Zero-Knowledge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-light-300 dark:border-surface-dark-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-text-muted">
              © 2024 Compass Security. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs text-text-muted hover:text-brand transition-colors">
                개인정보처리방침
              </Link>
              <Link to="/terms" className="text-xs text-text-muted hover:text-brand transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;