import "../styles/Logo.scss";
import { FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo"><Link to="/" className="logo-link"><FaBolt className="logo-icon" />BOLT</Link></div>
    );
}

export default Logo;