import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";

const Signup = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch])

    return (
        <div className="signup">
            <div className="signup-cont">
                <h1>Sign Up</h1>
            </div>
        </div>
    );
}
 
export default Signup;