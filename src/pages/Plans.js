import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuBtn } from "../redux/menuBtnSlice";

const Plans = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuBtn());
    }, [dispatch])

    return (
        <div className="plans">
            <div className="plans-cont">
                <h1>Plans</h1>
            </div>
        </div>
    );
}
 
export default Plans;