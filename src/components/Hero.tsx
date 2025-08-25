import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { SparklesIcon, RocketIcon, ShieldIcon } from "../components/Icons";
import SecurityPolygonScene from "./SecurityPolygon";

// 부모는 순서만 조절
const heroParent: Variants = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const heroItem: Variants = {
  hidden: { y: 40, opacity: 0 },
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

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10" />
        <SecurityPolygonScene/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto text-center py-32 will-change-transform"
          variants={heroParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5, margin: "0px 0px -10% 0px" }}
        >
          <motion.div variants={heroItem} className="inline-flex items-center space-x-2 px-4 py-2 bg-brand/10 dark:bg-brand/20 rounded-full border border-brand/20 dark:border-brand/30 transform-gpu">
            <SparklesIcon size={16} className="text-brand" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Enterprise Security</span>
          </motion.div>

          <motion.h1 variants={heroItem} className="hero-text text-6xl lg:text-7xl font-black text-text-light dark:text-white leading-tight transform-gpu mt-8">
            비밀번호 관리의<br /><span className="gradient-text">새로운 표준</span>
          </motion.h1>

          <motion.p variants={heroItem} className="hero-text text-xl text-text-light dark:text-text-secondary max-w-3xl mx-auto leading-relaxed transform-gpu mt-6">
            Compass Security는 최첨단 암호화 기술과 직관적인 인터페이스로<br />
            디지털 자산을 안전하게 보호합니다
          </motion.p>

          <motion.div variants={heroItem} className="hero-text flex flex-col sm:flex-row gap-4 justify-center pt-6 transform-gpu">
            <Link to="/product" className="btn-brand inline-flex items-center justify-center px-8 py-4 text-lg">
              <RocketIcon size={20} className="mr-2" /> 무료로 시작하기
            </Link>
            <Link to="/security" className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg">
              <ShieldIcon size={20} className="mr-2" /> 보안 기능 살펴보기
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
