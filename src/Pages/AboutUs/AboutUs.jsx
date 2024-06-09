import { Helmet } from "react-helmet";
import logo from '../../assets/Logo/logo.jpg'


const AboutUs = () => {
    return (
        <div className="py-20 bg-[#ceccc95b]">
            <Helmet>
                <title>Honest |About Us  </title>
            </Helmet>
            <div className=" mb-12 flex justify-center">
                <h1 className="text-center text-3xl  border-b-2 pb-6 inline m-auto  border-gray-700" >About Us</h1>
            </div>
            <div className="max-w ">
                <div className="px-10 ">
                    <div className="lg:flex md:flex items-center">
                        <div className="flex items-center p-4  justify-center lg:w-4/12 md:w-4/12 mb-5 rounded-full">
                            <img
                                src={logo}
                                alt="About Us"
                                className=" h-full w-full  shadow-md rounded-r-full"
                            />
                        </div>
                        <p className="mb-4 p-4 text-xl flex-1">
                            Welcome to <strong>HONEST Real Estate</strong>, your trusted partner in the world of real estate. Whether you`re buying or selling property, we are here to provide you with a seamless and transparent experience.
                        </p>
                    </div>
                    <div>

                        <div className="container mx-auto px-4 py-8">


                            <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
                            <p className="mb-4">
                                At HONEST Real Estate, we believe in integrity, transparency, and efficiency. Our mission is to create a trustworthy platform where users can confidently engage in property transactions. We are dedicated to ensuring that every interaction on our site is secure, straightforward, and beneficial for all parties involved.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2">What We Offer</h2>
                            <h3 className="text-2xl font-semibold mb-2">Comprehensive Property Listings</h3>
                            <p className="mb-4">
                                Explore a wide range of verified properties through our extensive listings. Each listing is accompanied by detailed descriptions, high-quality photos, and user reviews to help you make informed decisions.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">Secure Transactions</h3>
                            <p className="mb-4">
                                We use Stripe for our payment processing, ensuring that your transactions are secure and reliable. Whether you’re paying for a property or processing a refund, you can trust that your financial information is safe with us.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">Wishlist and Requests</h3>
                            <p className="mb-4">
                                Easily add properties to your wishlist and send requests directly to agents. Our platform makes it simple to keep track of the properties you’re interested in and communicate with agents to take the next steps.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">Personalized Dashboards</h3>
                            <p className="mb-4">
                                Enjoy a personalized experience with dedicated dashboards for users, agents, and admins. These dashboards allow you to manage properties, requests, reviews, and more with ease.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">Property Management for Agents</h3>
                            <p className="mb-4">
                                Agents can effortlessly add, edit, and manage their property listings. Keep your listings up-to-date and accurate to attract potential buyers and streamline the sales process.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">User Reviews</h3>
                            <p className="mb-4">
                                Read and write reviews to share your experiences and gain insights from other users. Our review system helps maintain a high level of trust and transparency on our platform.
                            </p>

                            <h3 className="text-2xl font-semibold mb-2">Advertising Section</h3>
                            <p className="mb-4">
                                Discover our highlighted properties in the advertising section. These properties are carefully selected and verified, ensuring that you have access to some of the best real estate options available.
                            </p>

                            <h2 className="text-3xl font-semibold mb-2">Why Choose Us?</h2>
                            <ul className="list-disc list-inside mb-4">
                                <li className="mb-2"><strong>Transparency:</strong> We provide clear and detailed information about each property, ensuring you have all the information you need to make informed decisions.</li>
                                <li className="mb-2"><strong>Security:</strong> Our secure payment gateway ensures that your transactions are safe and protected.</li>
                                <li className="mb-2"><strong>Efficiency:</strong> Our user-friendly interface and comprehensive features make property transactions fast and hassle-free.</li>
                                <li className="mb-2"><strong>Support:</strong> Our dedicated support team is always here to help you with any questions or issues you may have.</li>
                            </ul>

                            <p className="mb-4">
                                Thank you for choosing HONEST Real Estate. We are committed to providing you with the best real estate experience possible. Whether you are buying your dream home or selling a property, we are here to help you every step of the way.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    );
};

export default AboutUs;