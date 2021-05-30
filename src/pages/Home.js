import "../styles/Home.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";
import { hero_rocket, hero_testing, hero_security, hero_chatbot } from ".././data/heroData";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <Hero data={hero_rocket} />
            <Hero data={hero_testing} />
            <Pricing />
            <Hero data={hero_security} />
            <Hero data={hero_chatbot} />
        </div>
    );
}

export default Home;