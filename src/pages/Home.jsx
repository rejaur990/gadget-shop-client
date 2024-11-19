

import Banner from "../components/home/banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";


const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="my-24">
                <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
            <FeaturedProducts/>
            </div>
            <div className="my-24">
                <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
            <UserReview/>
            </div>
        </div>
    );
};

export default Home;