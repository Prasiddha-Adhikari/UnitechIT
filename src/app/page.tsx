import AboutUs from "@/components/AboutUs";
import Courses from "@/components/Courses";
import ExploreCourses from "@/components/ExploreCourses";
import GrabTheBest from "@/components/GrabTheBest";
import HeroSection from "@/components/HeroSection";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreCourses />
      <Courses />
      <GrabTheBest />
      <AboutUs />
      {/* <Footer /> */}
    </main>
  );
}
