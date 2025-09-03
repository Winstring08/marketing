import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { KeyIcon, DeviceIcon, ShareIcon } from "../../../components/Icons";
import { card } from "@/styles/recipes/card";

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
  const features: Feature[] = useMemo(
    () => [
      { icon: <KeyIcon size={24} />,    title: "원터치 로그인",  description: "단 하나의 마스터 키로 모든 계정에 접근", badge: "SECURE" },
      { icon: <DeviceIcon size={24} />, title: "크로스 플랫폼",  description: "모든 디바이스에서 실시간 동기화",       badge: "SYNC" },
      { icon: <ShareIcon size={24} />,  title: "제로 노출 공유",  description: "비밀번호 노출 없이 팀원과 협업",         badge: "TEAM"  },
    ],
    []
  );

  return (
    <section className="features-section min-h-screen flex items-center bg-surface-light-100 dark:bg-surface-dark-600">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="hero-text text-6xl lg:text-7xl font-black text-text-light dark:text-white leading-tight transform-gpu mt-8">
              핵심 기능
            </h2>
            <p className="hero-text text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed transform-gpu mt-6">
              기업의 보안을 위한 필수 기능들
            </p>
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
                // transform은 FM만 담당 (CSS transition-transform 금지)
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="feature-card will-change-transform transform-gpu"
              >
                {/* 카드 레시피: subtle 톤(회색 계열, 그림자 온화), 텍스트 왼쪽 정렬 */}
                <div className={card({ tone: "default", padding: "md", align: "left" }).root()}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-lg flex items-center justify-center">
                      <div className="text-brand">{feature.icon}</div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
