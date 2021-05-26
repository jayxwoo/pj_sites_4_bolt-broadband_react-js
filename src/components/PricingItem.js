const PricingItem = ({ data }) => {
    return (
        <div className="pricingItem">
            {data.icon}
            <p className="plan">{data.plan}</p>
            <h2 className="price">{data.price}</h2>
            <p className="recur">{data.recur}</p>
            <img src={data.promoImg} alt={data.promoImgAlt} />
            <ul className="info-group">
                <li className="promoDesc">{data.promoDesc}</li>
                <li className="info-size">{data.size}</li>
                <li className="info-desc">{data.desc}</li>
            </ul>
        </div>
    );
}

export default PricingItem;