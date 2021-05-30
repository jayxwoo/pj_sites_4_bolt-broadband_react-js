import "../styles/Navbar.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { handleMenuBtn, closeMenuBtn } from "../redux/menuBtnSlice";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(null);
    const { mobile } = useSelector((state) => state.isMobileSlice);
    const { menuBtnStatus } = useSelector((state) => state.menuBtnSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch, mobile]);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        };
    });

    return (
        <header className={scrolled ? "header scrolled" : "header"}>
            <div className="header-cont">
                <Logo />
                <nav className={menuBtnStatus ? "header__menu active" : "header__menu"}>
                    <ul className="menu-group">
                        <li className="menu-item"><NavLink exact to="/" className="menu-link">Home</NavLink></li>
                        <li className="menu-item"><NavLink to="/services" className="menu-link">Services</NavLink></li>
                        <li className="menu-item"><NavLink to="/plans" className="menu-link">Plans</NavLink></li>
                    </ul>
                    <Link to="/signup" className="btn-link"><Button btnStyle={mobile ? "btn-outline--light" : "btn-outline--dark"} btnSize={mobile ? "btn--mobile" : "btn--medium"} className="btn-signup">Sign Up</Button></Link>
                </nav>
                {mobile && <button onClick={() => { dispatch(handleMenuBtn()) }} className="menu-btn">{menuBtnStatus ? (<MdClose className="menu-icon" />) : (<MdMenu className="menu-icon" />)}</button>}
            </div>
        </header>
    );
}

export default Navbar;