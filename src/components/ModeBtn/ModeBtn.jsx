import { Link } from "react-router-dom";
import "./ModeBtn.css";

function ModeBtn(props) {

  const id = props.mode

  return (
    <>
        <Link to={`/game:${id}`}
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
