import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ShieldIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L4 7V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V7L12 2Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 2L19 4M11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8788 14.0635 13.0249 14.7813 13.0279 15.5066C13.031 16.232 12.8909 16.951 12.6155 17.6221C12.3401 18.2931 11.9348 18.9031 11.4227 19.4173C10.9106 19.9314 10.3015 20.3399 9.63049 20.6188C8.95952 20.8978 8.23937 21.0416 7.51403 21.0421C6.78869 21.0426 6.07214 20.8997 5.40467 20.6217C4.73719 20.3436 4.13217 19.9359 3.62427 19.4224C2.59731 18.3954 2.02778 17.0022 2.03861 15.5533C2.04943 14.1044 2.63973 12.7195 3.68191 11.7069C4.72409 10.6944 6.13358 10.1358 7.58243 10.1476C9.03128 10.1595 10.4314 10.7406 11.4573 11.7697L11.39 11.61ZM11.39 11.61L15 8L17 10L21 6L19 2" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DeviceIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 10H17.74C17.3659 7.66962 15.3681 5.99816 13 6C10.6319 5.99816 8.63407 7.66962 8.26 10H8C5.79086 10 4 11.7909 4 14C4 16.2091 5.79086 18 8 18H18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// New icons for platform selection
export const WindowsIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 5.5L10.5 4.5V11.5H3V5.5Z"/>
    <path d="M11.5 4.35L21 3V11.5H11.5V4.35Z"/>
    <path d="M3 12.5H10.5V19.5L3 18.5V12.5Z"/>
    <path d="M11.5 12.5H21V21L11.5 19.65V12.5Z"/>
  </svg>
);

export const AppleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.28998 21.25 8.52998 21.07 7.66998 20.28C2.78998 15.25 3.50998 7.59 9.04998 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.2C19.01 17.7 18.27 19.19 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z"/>
  </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C13.07 4 14.09 4.2 15.03 4.56C14.64 5.13 14.13 5.74 13.7 6.14C13.47 6.38 13.27 6.55 13.11 6.67C12.67 6.33 12.14 6.11 11.56 6.11C10.54 6.11 9.7 6.95 9.7 7.97C9.7 8.41 9.84 8.82 10.08 9.15C9.76 9.32 9.47 9.54 9.23 9.8C8.69 10.39 8.36 11.16 8.36 12C8.36 12.31 8.4 12.61 8.47 12.9C7.83 13.15 7.31 13.63 7.03 14.25C6.36 13.31 6 12.16 6 10.91C6 7.63 8.69 5 12 5V4ZM14.78 8.32C15.09 8.12 15.44 8 15.82 8C16.83 8 17.65 8.82 17.65 9.83C17.65 10.84 16.83 11.66 15.82 11.66C15.57 11.66 15.33 11.61 15.11 11.52C15.05 11.23 15 10.94 15 10.64C15 9.75 15.29 8.93 14.78 8.32ZM8.5 14.5C8.78 14.5 9 14.72 9 15C9 15.28 8.78 15.5 8.5 15.5C8.22 15.5 8 15.28 8 15C8 14.72 8.22 14.5 8.5 14.5ZM15.5 14.5C15.78 14.5 16 14.72 16 15C16 15.28 15.78 15.5 15.5 15.5C15.22 15.5 15 15.28 15 15C15 14.72 15.22 14.5 15.5 14.5Z"/>
  </svg>
);

export const AndroidIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6 9.48L19.44 5.3C19.54 5.09 19.45 4.84 19.24 4.74C19.03 4.64 18.78 4.73 18.68 4.94L16.81 9.18C15.31 8.45 13.65 8.04 12 8.04C10.35 8.04 8.69 8.45 7.19 9.18L5.32 4.94C5.22 4.73 4.97 4.64 4.76 4.74C4.55 4.84 4.46 5.09 4.56 5.3L6.4 9.48C2.93 11.37 0.5 14.91 0.5 18.92H23.5C23.5 14.91 21.07 11.37 17.6 9.48ZM7 15.25C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75C7.41 13.75 7.75 14.09 7.75 14.5C7.75 14.91 7.41 15.25 7 15.25ZM17 15.25C16.59 15.25 16.25 14.91 16.25 14.5C16.25 14.09 16.59 13.75 17 13.75C17.41 13.75 17.75 14.09 17.75 14.5C17.75 14.91 17.41 15.25 17 15.25Z"/>
  </svg>
);

export const ServerIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="7" r="1" fill="currentColor"/>
    <circle cx="7" cy="17" r="1" fill="currentColor"/>
    <path d="M10 7H16M10 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 6V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V6" 
          stroke="currentColor" strokeWidth="2"/>
    <path d="M5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12" 
          stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L13.09 8.82L19 7L15.45 11.82L21 16L14.18 16.18L16 23L10.82 18.45L6 22L6.91 15.18L1 13L7.82 11.18L5 5L10.18 9.55L12 2Z" 
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4.5 16.5C3.5 17.5 3.5 20.5 3.5 20.5S6.5 20.5 7.5 19.5C8.5 18.5 4.5 14.5 4.5 16.5Z" 
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 15L8 19L5 16M12 15L16 11M12 15L9 12M16 11L20 7C20 7 19 2 14 2C9 2 4 7 4 7L8 11M16 11L13 8" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="7" r="1" fill="currentColor"/>
  </svg>
);

export const FlashIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CrownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 16L3 7L8 10L12 3L16 10L21 7L19 16H5Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 16H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V16Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);