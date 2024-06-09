import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import RootLayout from "@/layouts/RootLayout";
import Hero2 from "../sections/Hero2";
import Service from "../sections/Service";
import Banner from "../sections/Banner";
import Software from "../sections/Software";
import Price from "../sections/Price";
import Meeting from "../sections/Meeting";
import Banner2 from "../sections/Banner2";
import Footer from "../sections/Footer";

const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col  space-y-25">
        <HeroSection />
        <Hero2 />
        <About />
        <Service />
        <Banner />
        <Software />
        <Price />
        <Meeting />
        <Contact />
        <Banner2 />
        <Footer />
      </div>
    </RootLayout>
  );
};

export default Homepage;
