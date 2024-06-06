import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
// import Services from "@/components/sections/Services";
import RootLayout from "@/layouts/RootLayout";
import Hero2 from "../sections/Hero2";
import Service from "../sections/Service";
import Banner from "../sections/Banner";

const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col space-y-20">
        <HeroSection />
        <Hero2 />
        <About />
        {/* <Services /> */}
        <Service />
        <Banner />
        <Contact />
      </div>
    </RootLayout>
  );
};

export default Homepage;
