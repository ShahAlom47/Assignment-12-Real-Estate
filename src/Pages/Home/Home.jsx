import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Advertisement from "./Advertisement/Advertisement";
import ReviewSec from "./ReviewSec/ReviewSec";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>|Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
                <Advertisement></Advertisement>
                <ReviewSec></ReviewSec>
            </section>
            
        </div>
    );
};

export default Home;