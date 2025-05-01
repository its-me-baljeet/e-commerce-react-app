import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import FeatureSection from "../sections/FeatureSection";
import FeaturedProductSection from "../sections/FeaturedProductsSection";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="bg-gray-200">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <FeaturedProductSection />
            <Footer />
        </div>
    )
}
export default HomePage;