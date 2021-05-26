import "./styles/App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";

function App() {
  const { menuBtnStatus } = useSelector((state) => state.menuBtnSlice);

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
      </div>
    </Router>
  );
}

export default App;
