import { v4 as uuidv4 } from 'uuid';
import netflixLogo from "../assets/imgs/netflix-logo.png";
import { RiBikeFill, RiCarFill, RiRocket2Fill } from "react-icons/ri";

export const pricings = [
    {
        id: uuidv4(),
        plan: 'Small',
        price: 29.99,
        recurr: 'per month',
        size: 100,
        desc: "Fibre broadband up to  900/400Mbps",
        promoImg: netflixLogo,
        promoDesc: "on us for a year when you signup for 12 months",
        btnLabel: "Choose a plan",
        icon: <RiBikeFill className="icon" />,
    },
    {
        id: uuidv4(),
        plan: 'Medium',
        price: 59.99,
        recurr: 'per month',
        size: 500,
        desc: "Fibre broadband up to  900/400Mbps",
        promoImg: netflixLogo,
        promoDesc: "on us for a year when you signup for 12 months",
        btnLabel: "Choose a plan",
        icon: <RiCarFill className="icon" />,
    },
    {
        id: uuidv4(),
        plan: 'Large',
        price: 99.99,
        recurr: 'per month',
        size: 'Unlimited',
        desc: "Fibre broadband up to  900/400Mbps",
        promoImg: netflixLogo,
        promoImgAlt: "netflix logo",
        promoDesc: "on us for a year when you signup for 12 months",
        btnLabel: "Choose a plan",
        icon: <RiRocket2Fill className="icon" />,
    },
]