import { Link } from "react-router-dom";

import "./ModeBtn.css";

function ModeBtn(props) {

  const Mode = props.mode

  return (
    <>
      <Link
        to={`/React-TenAnswers-V.2/game/${Modelevel}`}
        className={`${props.mode} col-12 d-flex justify-content-center align-items-center`}
      >
        <h1 className="col-10 py-4 text text-center fw-bolder m-0">
          {props.text}
        </h1>
      </Link>
    </>
  );
}

export default ModeBtn;
