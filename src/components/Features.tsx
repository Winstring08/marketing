import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { KeyIcon, DeviceIcon, ShareIcon } from "../components/Icons";

type Feature = { icon: React.ReactNode; title: string; description: string; badge: string };

// 부모 1회 in-view 트리거 → 자식 순차(staggerChildren)
const featuresParent: Variants = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const featureItem: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Features: React.FC = () => {
  // 렌더마다 새 객체/노드 생성 방지
  const features: Feature[] = useMemo(
    () => [
      { icon: <KeyIcon size={24} />,    title: "원터치 로그인",  description: "단 하나의 마스터 키로 모든 계정에 접근", badge: "SECURE" },
      { icon: <DeviceIcon size={24} />, title: "크로스 플랫폼",  description: "모든 디바이스에서 실시간 동기화",       badge: "SYNC" },
      { icon: <ShareIcon size={24} />,  title: "제로 노출 공유",  description: "비밀번호 노출 없이 팀원과 협업",         badge: "TEAM"  },
    ],
    []
  );

  return (
    <section className="features-section py-20 bg-surface-light-100 dark:bg-surface-dark-600">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-white">핵심 기능</h2>
            <p className="text-text-light dark:text-text-secondary">기업의 보안을 위한 필수 기능들</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={featuresParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -15% 0px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureItem}
                className="feature-card will-change-transform"
              >
                <div className="card-discord p-6 h-full transform-gpu hover:-translate-y-1 transition-transform duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-lg flex items-center justify-center">
                      <div className="text-brand">{feature.icon}</div>
                    </div>
                    <span className="text-xxs font-bold uppercase tracking-wider px-2 py-1 bg-surface-light-300 dark:bg-surface-dark-100 text-text-muted rounded">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-light dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-text-light dark:text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
