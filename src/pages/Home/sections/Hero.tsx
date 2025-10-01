import { DownloadIcon, KeyIcon, SparklesIcon } from "@/components/Icons";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SecurityPolygonScene from "@/pages/Home/components/SecurityPolygon";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";


// 등장 간격 조절용 variants
const heroParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// 실제 애니메이션 variants
const heroItem: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo
    },
  },
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10"/>
      <div className="absolute inset-0 opacity-20">
        <SecurityPolygonScene/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto text-center py-32 will-change-transform"
          variants={heroParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={heroItem} className="flex justify-center">
            <span className="inline-flex items-center gap-3 py-0.5 px-2 rounded-full border border-brand/20 dark:border-brand/30 bg-brand/10 dark:bg-brand/20">
              {/* 원형 아이콘 배지: 칩 안쪽에 배치 */}
              <Badge
                intent="crown"
                size="ss"
                interactive
                className="mb-0 border-none bg-transparent dark:bg-transparent" // 칩 배경과 겹치지 않도록 배경/테두리 제거
                aria-hidden
              />
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Password Manager
              </span>
            </span>
          </motion.div>

          <motion.h1 variants={heroItem} className="hero-text text-6xl lg:text-7xl font-black text-text-light dark:text-white leading-tight transform-gpu mt-8">
            비밀번호 관리의<br /><span className="gradient-text">새로운 표준</span>
          </motion.h1>

          <motion.div variants={heroItem} className="hero-text flex flex-col sm:flex-row gap-4 justify-center pt-6 transform-gpu">
            <Button
              intent="primary"
              size="lg"
              onClick={() => navigate("/download")}
              leftIcon={<DownloadIcon />}
            >
              무료로 시작하기
            </Button>
            <Button
              intent="secondary"
              size="lg"
              onClick={() => navigate("/product")}
              leftIcon={<KeyIcon />}
            >
              제품 더 알아보기
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section >
  );
};

export default Hero;
