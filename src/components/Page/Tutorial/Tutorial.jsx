import TopNav from "../../TopNav/TopNav";
import Dropdown from "./Dropdown";

function Tutorial() {
  return (
    <>
      <TopNav back="d-block" hint="d-none" />
      <div className="row col-12 ">
        <h1 className="col-12 text-center text-white my-3">วิธีเล่น</h1>
      </div>
        <Dropdown/>
    </>
  );
}

export default Tutorial;
