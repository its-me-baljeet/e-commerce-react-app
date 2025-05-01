import FeaturedProductList from "../components/FeaturedProductsList";

const FeaturedProductSection = () => {
    return (
        <div className="max-w-6xl m-auto py-14 flex flex-col gap-8 text-center" >
            <h1 className=" text-5xl font-semibold">Featured Products</h1>
            <p>Explore our top tech picks: smartwatches, earbuds, speakers, and more. Elevate your digital lifestyle with cutting-edge accessories and gadgets</p>
            <FeaturedProductList />
        </div>
    )
}
export default FeaturedProductSection;