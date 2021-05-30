import "./styles/App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import { checkIsMobile } from "./redux/isMobileSlice";
import { useEffect } from "react";

function App() {
  const { menuBtnStatus } = useSelector((state) => state.menuBtnSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsMobile());
  }, [dispatch]);

  window.addEventListener('resize', () => {
    dispatch(checkIsMobile());
  });

  return (
    <Router>
      <div className={menuBtnStatus ? "App noScroll" : "App"}>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/plans"><Plans /></Route>
          <Route path="/signup"><Signup /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
