import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";
import { hero_testing, hero_rocket } from ".././data/heroData";
import Hero from "../components/Hero";

const Services = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <div className="services-cont">
                <Hero data={hero_testing} />
                <Hero data={hero_rocket} />
            </div>
        </div>
    );
}

export default Services;