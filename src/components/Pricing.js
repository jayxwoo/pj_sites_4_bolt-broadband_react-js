import { pricings } from "../data/pricingData";
import PricingCard from "./PricingCard";
import "../styles/Pricing.scss";

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="pricing-cont">
                {pricings.map((pricing) => {
                    return (
                        <PricingCard data={pricing} key={pricing.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Pricing;