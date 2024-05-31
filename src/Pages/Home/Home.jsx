import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Advertisement from "./Advertisement/Advertisement";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>|Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
                <Advertisement></Advertisement>
            </section>
            
        </div>
    );
};

export default Home;