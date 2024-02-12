import {
  Link
} from "react-router-dom";

function TopNav(props) {
  return (
    <>
      <div className="nav row p-3 align-items-center h-10">
          <Link to="/" className={`${props.back}  col text-start`}>
            <i className="fa-solid fa-arrow-left fs-4 text-white"></i>
          </Link>
          <Link to="/tutorial" className={`${props.hint}  col text-end`}>
            <i className="fa-regular fa-circle-question fs-2 text-white"></i>
          </Link>
      </div>
    </>
  );
}
export default TopNav;
