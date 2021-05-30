import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";
import { hero_security } from ".././data/heroData";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const Plans = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="plans">
            <div className="plans-cont">
                <Hero data={hero_security} />
                <Pricing />
            </div>
        </div>
    );
}

export default Plans;