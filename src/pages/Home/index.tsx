import CTA from "@/pages/Home/sections/CTA";
import Hero from "@/pages/Home/sections/Hero";
import SecurityFeatures from "@/pages/Home/sections/SecurityFeatures";
import AccountFeatures from "@/pages/Home/sections/AccountFeatures";


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AccountFeatures />
      <SecurityFeatures />
      <CTA />
    </>
  );
};

export default Home;
