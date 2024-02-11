import TopNav from "../../TopNav/TopNav";
import BsAccordion from "./BsAccordion";

function Tutorial() {
  return (
    <>
    <TopNav back="d-block" hint="d-none" />
    <div className="text-center text-white fs-1 bolder mt-2 mb-4">วิธีเล่น</div>
    <BsAccordion num='0'/>
    <BsAccordion num='1'/>
    <BsAccordion num='2'/>
    <BsAccordion num='3'/>
    </>
      
    
  );
}

export default Tutorial;
