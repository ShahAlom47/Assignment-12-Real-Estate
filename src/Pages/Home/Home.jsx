import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>|Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            
        </div>
    );
};

export default Home;