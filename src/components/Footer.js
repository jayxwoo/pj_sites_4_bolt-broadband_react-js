import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer = () => {
    const { mobile } = useSelector((state) => state.isMobileSlice);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${email} has been subscribed!`)
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-cont">
                <div className="top">
                    <h2 className="title">Join our newletter to receive our latest offers and news</h2>
                    <p className="text">You can unsubscribe at any time</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="label a11y-hidden">Email</label>
                        <input type="email" className="input" placeholder="email" id="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Button btnStyle="btn-outline--light" btnSize={mobile ? "btn--mobile" : "btn--medium"} type="submit">Subscribe</Button>
                    </form>
                </div>
                <div className="middle">
                    <div className="middle-cont">
                        <div className="links-cont">
                            <h2 className="title">About</h2>
                            <ul className="links-group">
                                <li className="links-item"><Link className="links-link" to="/services">About</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">Intro</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">History</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">Team</Link></li>
                            </ul>
                        </div>
                        <div className="links-cont">
                            <h2 className="title">Contacts</h2>
                            <ul className="links-group">
                                <li className="links-item"><Link className="links-link" to="/products">Contact</Link></li>
                                <li className="links-item"><Link className="links-link" to="/products">Support</Link></li>
                                <li className="links-item"><Link className="links-link" to="/products">Chat</Link></li>
                                <li className="links-item"><Link className="links-link" to="/products">Email</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle-cont">
                        <div className="links-cont">
                            <h2 className="title">Videos</h2>
                            <ul className="links-group">
                                <li className="links-item"><Link className="links-link" to="/signup">Video</Link></li>
                                <li className="links-item"><Link className="links-link" to="/signup">Clips</Link></li>
                                <li className="links-item"><Link className="links-link" to="/signup">Ads</Link></li>
                                <li className="links-item"><Link className="links-link" to="/signup">Uploads</Link></li>
                            </ul>
                        </div>
                        <div className="links-cont">
                            <h2 className="title">Social Media</h2>
                            <ul className="links-group">
                                <li className="links-item"><Link className="links-link" to="/services">Instagram</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">Facebook</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">Twitter</Link></li>
                                <li className="links-item"><Link className="links-link" to="/services">Youtube</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <Logo light={true} />
                    <small className="copyrights">EasyPay © 2021</small>
                    <div className="social-cont">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;