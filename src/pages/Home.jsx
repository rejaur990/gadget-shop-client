

import Banner from "../components/home/banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";
import Accordion from './../components/home/Accordion';


const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="container mx-auto">
            <div className="my-24">
                <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
            <FeaturedProducts/>
            </div>
            <div className="my-24">
                <h1 className="mb-16 text-2xl font-semibold text-center">
                    User Review
                </h1>
            <UserReview/>
            </div>
            <div className="my-24">
                <h1 className="mb-16 text-2xl font-semibold text-center">
                    Frequently Asked Questions
                </h1>
            <Accordion/>
            </div>
            </div>
        </div>
    );
};

export default Home;