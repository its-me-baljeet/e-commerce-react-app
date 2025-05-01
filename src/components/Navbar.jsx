import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-6xl m-auto flex justify-between py-5">
            <div className="text-2xl font-semibold flex items-center gap-3">
                <img src="/my-shop-logo.png" alt="logo" className="h-10" />
                MyShop
            </div>
            <ul className="flex gap-8 text-lg" >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/about-us"}>About Us</Link></li>
                <li><Link to={"/contact-us"}>Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;