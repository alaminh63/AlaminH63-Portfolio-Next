import ProjectOverview from "@/components/modules/projects/ProjectOverview";
import SecondaryBanner from "@/components/modules/Shared/SecondaryBanner";
import Footer from "@/components/modules/Shared/Footer";
export default function page() {
    return (
        <div className="bg-gray-100">
            <SecondaryBanner title="Projects" />
            <ProjectOverview />
            <Footer />
        </div>
    )
}
