import { pricings } from "../data/pricingData";
import PricingItem from "./PricingItem";

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="pricing-cont">
                {pricings.map((pricing) => {
                    return (
                        <PricingItem data={pricing} key={pricing.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Pricing;