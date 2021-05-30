import Button from "./Button";
import lottie from "lottie-web"
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../styles/Hero.scss";
import { Link } from "react-router-dom";


const Hero = ({ data }) => {
    const animContRef = useRef();
    const animItem = useRef();
    const heroContRef = useRef();
    const { mobile } = useSelector((state) => state.isMobileSlice);

    // Animation
    useEffect(() => {
        animItem.current = lottie.loadAnimation({
            container: animContRef.current,
            animationData: data.anim,
            renderer: "svg",
            loop: true,
            autoplay: false,
            name: "animItem",
        });

        return () => {
            animItem.current.destroy("animItem");
        }
    }, [data.anim]);

    const playAnim = () => {
        animItem.current && animItem.current.play();
    };

    const stopAnim = () => {
        animItem.current && animItem.current.stop();
    };

    // Image position
    useEffect(() => {
        if (!mobile) {
            if (data.imgPos === 'right') {
                heroContRef.current.style.flexDirection = "row";
            } else {
                heroContRef.current.style.flexDirection = "row-reverse";
            };
        } else {
            heroContRef.current.style.flexDirection = "column";
        };
    }, [mobile, data.imgPos]);

    return (
        <div className={data.lightBg ? "hero light" : "hero dark"} onMouseEnter={playAnim} onMouseLeave={stopAnim}>
            <div className="hero-cont" ref={heroContRef}>
                <div className="info">
                    <p className="label">{data.label}</p>
                    <h2 className={data.lightBg ? "title dark" : "title light"}>{data.title}</h2>
                    <p className={data.lightBg ? "desc dark" : "desc light"}>{data.desc}</p>
                    <Link to={data.link}><Button btnSize={mobile ? data.btnSize.mobile : data.btnSize.large} btnStyle={data.lightBg ? data.btnStyle.blue : data.btnStyle.red}>{data.btnLabel}</Button></Link>
                </div>
                <div className="anim-cont" ref={animContRef}>
                </div>
            </div>
        </div>
    );
};

export default Hero;