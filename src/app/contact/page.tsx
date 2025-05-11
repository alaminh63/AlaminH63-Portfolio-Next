import Contact from "@/components/modules/home/Contact";
import SecondaryBanner from "@/components/modules/Shared/SecondaryBanner";
import Footer from "@/components/modules/Shared/Footer";
export default function page() {
  return (
    <div>
        <SecondaryBanner title="Contact" />
        <Contact />
        <Footer />
    </div>
  )
}
