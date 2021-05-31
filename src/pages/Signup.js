import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";
import SignupForm from "../components/SignupForm";
import "../styles/Signup.scss";

const Signup = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="signup">
            <div className="signup-cont">
                <SignupForm />
            </div>
        </div>
    );
}

export default Signup;