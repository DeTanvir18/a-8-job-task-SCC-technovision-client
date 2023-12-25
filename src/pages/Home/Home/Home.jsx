import About from "../About/About";
import Banner from "../Banner/Banner";
import BenefitedPeople from "../BenefitedPeople/BenefitedPeople";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BenefitedPeople></BenefitedPeople>
            <About></About>
        </div>
    );
};

export default Home;