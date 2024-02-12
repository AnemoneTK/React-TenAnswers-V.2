import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Switch,
  Route,
} from "react-router-dom";
// import { useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  // const [openOverlay, setOverlay] = useState(false);
  // let popRef = useRef();
  return (
    <>
      {/* <Overlay open={openOverlay} /> */}

      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/tutorial">
                <Tutorial />
              </Route>
            </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
