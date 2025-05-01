import UpperFooterSection from "../sections/UpperFooterSection";

const Footer = () => {
    return (
        <div className="py-20 flex flex-col gap-5">
            <div className="bg-gray-300">
                <UpperFooterSection />
            </div>
            <div className="w-full max-w-6xl m-auto flex justify-between">
                <p>Copyright © 2025 MyStore</p>
                <p>Powered by MyStore</p>
            </div>
        </div>
    )
}
export default Footer;