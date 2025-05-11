import Banner from "@/components/modules/home/Banner";


import Skills from "@/components/modules/home/Skills";
import Projects from "@/components/modules/home/Projects";


import Footer from "@/components/modules/Shared/Footer";
import BlogsOverview from "@/components/modules/home/BlogsOverview";
export default function Home() {
  return (
    <div className="  ">

      <Banner />
      <div className="max-w-6xl mx-auto">

        <Skills />
        <Projects />
        {/* <AdditionalInfo /> */}

        <BlogsOverview />
      </div>
      <Footer />
    </div>
  );
}
