import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/PricingCard.scss";
import Button from "./Button";

const PricingCard = ({ data }) => {
    const { mobile } = useSelector((state) => state.isMobileSlice);

    return (
        <div className={data.popular ? "pricingCard popular" : "pricingCard"}>
            {data.icon}
            <p className="plan">{data.plan}</p>
            <h2 className="price">${data.price}</h2>
            <p className="recur">{data.recur}</p>
            {data.plusIcon}
            <img className="img" src={data.promoImg} alt={data.promoImgAlt} />
            <ul className="info-group">
                <li className="promoDesc text">{data.promoDesc}</li>
                <li className="size text">{data.size} GB</li>
                <li className="desc text">{data.desc}</li>
            </ul>
            <Link to={data.link} className="link"><Button btnStyle={data.popular ? "btn-outline--dark" : "btn-outline--yellow"} btnSize={mobile ? "btn--mobile" : "btn--regular"}>{data.btnLabel}</Button></Link>
        </div>
    );
}

export default PricingCard;