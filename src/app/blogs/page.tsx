
import Blogs from "@/components/modules/blogs/Blogs";
import Footer from "@/components/modules/Shared/Footer";
import SecondaryBanner from "@/components/modules/Shared/SecondaryBanner";
export default function page() {
  return (
    <div className="bg-gray-100" >
      <SecondaryBanner title="Blogs" />
      <div className="max-w-5xl mx-auto mt-20" >

        <Blogs />
      </div>
      <Footer />
    </div>
  )
}
