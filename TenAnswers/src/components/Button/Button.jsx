import "./Button.css";
import "bootstrap/dist/css/bootstrap.css";

function Button(props) {
  return (
    <>
        <button className={`${props.type} text-center fs-3 rounded-pill fw-bold col-12 py-2`}>
          {props.textValue}
        </button>
    </>
  );
}

export default Button
