import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { KeyIcon, DeviceIcon, ShareIcon, ShieldIcon } from "../../../components/Icons";
import { card } from "@/styles/recipes/card";

type Feature = { icon: React.ReactNode; title: string; description: string; badge: string };

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const headerParent: Variants = { hidden: {}, show: { transition: { when: "beforeChildren", staggerChildren: 0.08 } } };
const headerItem: Variants = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.6, ease: easeOutExpo } } };
const featuresParent: Variants = { hidden: {}, show: { transition: { when: "beforeChildren", staggerChildren: 0.08 } } };
const featureItem: Variants = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "tween", duration: 1, ease: easeOutExpo } } };

const Features: React.FC = () => {
  const features: Feature[] = useMemo(
    () => [
      { icon: <KeyIcon size={24} />,    title: "원스텝 로그인",  description: "마스터키 하나로 모든 계정으로 로그인", badge: "SIMPLE" },
      { icon: <DeviceIcon size={24} />, title: "크로스 플랫폼",  description: "웹브라우저와 Windows 앱 어디서든 동일한 환경으로",       badge: "SYNC" },
      { icon: <ShareIcon size={24} />,  title: "제로 지식 공유",  description: "비밀번호 노출 없이 접근 권한만 안전하게 전달",         badge: "SHARE"  },
      { icon: <ShieldIcon size={24} />, title: "제로 노출 저장",     description: "암호화되어 본인만 확인 가능한 비밀번호",        badge: "SECURE"  },
    ],
    []
  );

  const leftCards  = features.slice(0, 2);
  const rightCards = features.slice(2, 4);

  return (
    <section className="min-h-screen bg-surface-light-300 dark:bg-surface-dark-600">
      <div className="mx-auto px-6 lg:px-16 py-16 grid grid-cols-12 gap-x-8 gap-y-12">
        
        {/* 왼쪽: 대제목 + 카드 */}
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          <div className="flex flex-col w-full max-w-[420px]">
            {/* 제목 */}
            <motion.div
              className="text-start will-change-transform"
              variants={headerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
            >
              <motion.h2
                variants={headerItem}
                className="text-[42px] font-bold leading-[1.15] text-text-light dark:text-white mb-1"
              >
                <span className="gradient-text">기억할 필요 없는</span>
              </motion.h2>
              <motion.h2
                variants={headerItem}
                className="text-[42px] font-bold leading-[1.15] text-text-light dark:text-white"
              >
                아이디와 비밀번호
              </motion.h2>
            </motion.div>

            {/* 카드 묶음 (제목과 동일한 간격 확보) */}
            <motion.div
              className="mt-12 flex flex-col gap-6 w-full"
              variants={featuresParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              {leftCards.map((f, i) => (
                <motion.div
                  key={i}
                  variants={featureItem}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className={card({ tone: "default", padding: "md", align: "left" }).root()}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-lg grid place-items-center">
                        <div className="text-brand">{f.icon}</div>
                      </div>
                      <span className="text-xxs font-bold uppercase tracking-wider px-2 py-1 bg-surface-light-300 dark:bg-surface-dark-100 text-text-muted rounded">
                        {f.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-text-light dark:text-white">{f.title}</h3>
                    <p className="text-sm text-text-light dark:text-text-secondary leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 오른쪽: 카드 + 문구 */}
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          <div className="flex flex-col w-full max-w-[420px]">
            {/* 카드 리스트 */}
            <motion.div
              className="flex flex-col gap-6 w-full"
              variants={featuresParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              {rightCards.map((f, i) => (
                <motion.div
                  key={i}
                  variants={featureItem}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <div className={card({ tone: "default", padding: "md", align: "left" }).root()}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-lg grid place-items-center">
                        <div className="text-brand">{f.icon}</div>
                      </div>
                      <span className="text-xxs font-bold uppercase tracking-wider px-2 py-1 bg-surface-light-300 dark:bg-surface-dark-100 text-text-muted rounded">
                        {f.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-text-light dark:text-white">{f.title}</h3>
                    <p className="text-sm text-text-light dark:text-text-secondary leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 문구 (카드와 동일한 간격 확보) */}
            <motion.div
              className="mt-20 text-left w-full will-change-transform"
              variants={headerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.p variants={headerItem} className="text-[20px] font-semibold leading-[1.5] text-black dark:text-white">
                내가 설정한 마스터 비밀번호 하나로
              </motion.p>
              <motion.p variants={headerItem} className="text-[20px] font-semibold leading-[1.5] text-black dark:text-white mt-2">
                모든 로그인 정보를 관리
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
