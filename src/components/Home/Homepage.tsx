import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import RootLayout from "@/layouts/RootLayout";

const Homepage = () => {
  return (
    <RootLayout>
      <div className="flex_col_center space-y-20">
        <HeroSection />
        <About />
        <Services />
        <Contact />
      </div>
    </RootLayout>
  );
};

export default Homepage;
