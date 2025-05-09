import Banner from "@/components/modules/home/Banner";
import About from "@/components/modules/home/About";
import Blogs from "@/components/modules/home/Blogs";
import Skills from "@/components/modules/home/Skills";
import Projects from "@/components/modules/home/Projects";
import Contact from "@/components/modules/home/Contact";
import AdditionalInfo from "@/components/modules/home/AdditionalInfo";
  export default function Home() {
  return (
    <div className="  ">

      <Banner />
      <div className="max-w-screen-lg mx-auto">

        <Skills />
        <Projects />
        <AdditionalInfo />
        <About />
        <Blogs /> 
        <Contact />
      </div>
    </div>
  );
}
