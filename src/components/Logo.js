import "../styles/Logo.scss";
import { FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = ({light}) => {
    return (
        <div className="logo"><Link to="/" className={light ? "logo-link light" : "logo-link"}><FaBolt className="logo-icon" />BOLT</Link></div>
    );
}

export default Logo;