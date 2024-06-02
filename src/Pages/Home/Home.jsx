import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Advertisement from "./Advertisement/Advertisement";
import ReviewSec from "./ReviewSec/ReviewSec";
import Enquiry from "./Enquiry/Enquiry";
import PerfectHome from "./PerfectHome/PerfectHome";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>|Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
                <Advertisement></Advertisement>
                <Enquiry></Enquiry>
                <ReviewSec></ReviewSec>
                <PerfectHome></PerfectHome>
            </section>
            
        </div>
    );
};

export default Home;