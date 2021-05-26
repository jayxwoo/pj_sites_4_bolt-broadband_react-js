import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";

const Services = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch])

    return (
        <div className="services">
            <div className="services-cont">
                <h1>Services</h1>
            </div>
        </div>
    );
}
 
export default Services;