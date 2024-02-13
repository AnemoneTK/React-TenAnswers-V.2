import { Link } from "react-router-dom";
import "./ModeBtn.css";

function ModeBtn(props) {

  return (
    <>
        {/* <Link to={`/game/${props.mode}`} */}
        <Link to="/game"
          className={`${props.mode} col-12 d-flex justify-content-center align-items-center`}
        >
          <h1 className="col-10 py-4 text text-center fw-bolder m-0">
            {props.mode}
          </h1>
        </Link>
    </>
  );
}

export default ModeBtn;
