import React from "react";
import { motion, type Variants } from "framer-motion";
import { ServerIcon, CloudIcon, DatabaseIcon, LockIcon, ShieldIcon, CheckIcon } from "../../../components/Icons";
import { card } from "@/styles/recipes/card";

/** 공용 이징 */
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

/** 왼쪽 컬럼 + 리스트 통합 Parent/Item */
const leftParent: Variants = {
  hidden: {},
  show: {
    transition: { when: "beforeChildren", staggerChildren: 0.12 },
  },
};
const leftItem: Variants = {
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.6, ease: easeOutExpo },
  },
};

/** 카드 그리드 Parent/Item */
const cardParent: Variants = {
  hidden: {},
  show: {
    transition: { when: "beforeChildren", staggerChildren: 0.12 },
  },
};
const cardItem: Variants = {
  hidden: { y: 24, opacity: 0, scale: 0.98 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, ease: easeOutExpo },
  },
};

const SecurityFeatures: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-surface-light-200 dark:bg-surface-dark-500">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽 텍스트 + 리스트 */}
            <motion.div
              className="will-change-transform space-y-3"
              variants={leftParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4, margin: "0px 0px -10% 0px" }}
            >
              <motion.div
                variants={leftItem}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-status-success/10 rounded-full"
              >
                <div className="w-2 h-2 bg-status-success rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-status-success">
                  Active Protection
                </span>
              </motion.div>

              <motion.h2
                variants={leftItem}
                className="text-3xl font-bold text-text-light dark:text-white"
              >
                디지털 자산을<br />
                완벽하게 보호합니다
              </motion.h2>

              <motion.p
                variants={leftItem}
                className="text-text-light dark:text-text-secondary leading-relaxed"
              >
                최첨단 암호화 기술과 제로 트러스트 아키텍처로
                어떤 위협으로부터도 안전합니다.
              </motion.p>

              {[
                { icon: <LockIcon size={16} />, text: "End-to-End 암호화로 완벽한 데이터 보호" },
                { icon: <ShieldIcon size={16} />, text: "Zero-Knowledge 아키텍처로 프라이버시 보장" },
                { icon: <CheckIcon size={16} />, text: "Multi-Factor 인증으로 접근 제어 강화" },
                { icon: <CheckIcon size={16} />, text: "ISO 27001 및 SOC 2 Type II 인증 획득" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={leftItem}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-light-300 dark:hover:bg-surface-dark-400 transition-colors transform-gpu"
                >
                  <div className="text-brand flex-shrink-0">{item.icon}</div>
                  <span className="text-sm text-text-light dark:text-text-primary">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* 오른쪽 카드 */}
            <motion.div
              className={card({ tone: "elevated" }).root()}
              variants={leftParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                variants={cardItem}
                className="text-lg font-bold mb-6 text-text-light dark:text-white text-center"
              >
                보안 성능 지표
              </motion.h3>
              <motion.div className="grid grid-cols-2 gap-4" variants={cardParent}>
                {[
                  { icon: <ServerIcon size={24} className="mx-auto mb-2 text-brand" />, title: "AES-256", sub: "암호화 표준" },
                  { icon: <DatabaseIcon size={24} className="mx-auto mb-2 text-brand" />, title: "ECC", sub: "키 교환" },
                  { icon: <CloudIcon size={24} className="mx-auto mb-2 text-brand" />, title: "99.9%", sub: "가용성" },
                  { icon: <ShieldIcon size={24} className="mx-auto mb-2 text-brand" />, title: "Zero", sub: "데이터 유출" },
                ].map((cardData, i) => (
                  <motion.div
                    key={i}
                    variants={cardItem}
                    whileHover={{ y: -4, scale: 1.01 }} // transform은 Motion 전담
                    transition={{ type: "tween", duration: 0.2 }}
                    className={card({ tone: "subtle", hoverTone:"light", padding: "md", align: "center" }).root()}
                  >
                    {cardData.icon}
                    <div className="text-xl font-bold text-text-light dark:text-white">{cardData.title}</div>
                    <div className="text-xs text-text-muted">{cardData.sub}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
