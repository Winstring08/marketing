import React from "react";
// 애니메이션은 전부 Framer Motion이 담당 (GSAP/ScrollTrigger 제거)
import Hero from "../components/Hero";
import Features from "../components/Features";
import SecurityFeatures from "../components/SecurityFeatures";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-light-200 dark:bg-surface-dark-500 discord-scrollbar">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Security Features (애니메이션 제거, transform/opacity hover만 허용) */}
      <SecurityFeatures />

      {/* CTA Section (고정) */}
      <CTA />

    </div>
  );
};

export default Home;
