import { useEffect } from "react";

import TopNav from "../TopNav/TopNav";
import BsAccordion from "./Dropdown/BsAccordion";

function Tutorial() {
  useEffect(() => {
    const screen = () => {
    };
    document.addEventListener("mousedown", screen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TopNav back="d-block" hint="d-none" />
      <div className="text-center text-white fs-1 bolder mt-2 mb-5">
        วิธีเล่น
      </div>
      <BsAccordion num="0" />
      <BsAccordion num="1" />
      <BsAccordion num="2" />
      <BsAccordion num="3" />
    </>
  );
}

export default Tutorial;
