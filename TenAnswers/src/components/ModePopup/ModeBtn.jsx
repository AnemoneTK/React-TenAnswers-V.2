import "./ModePopup.css";

function ModeBtn(props) {
  return (
    <>
      <div
        className={`${props.mode} col-12 d-flex justify-content-center align-items-center`}
      >
        <h1 className="col-10 py-4  text text-center fw-bolder m-0">
          {props.mode}
        </h1>
      </div>
    </>
  );
}
export default ModeBtn;
