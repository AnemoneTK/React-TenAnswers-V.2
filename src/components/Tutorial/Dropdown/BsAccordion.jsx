import { Accordion } from "react-bootstrap";
import "./style.css";

function BsAccordion({ num }) {
  return (
    <Accordion className="box">
      <Accordion.Item eventKey="0"  className="item">
        <Accordion.Header className="head">{TutorialList[num].head}</Accordion.Header>
        <Accordion.Body className="body">{TutorialList[num].body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const TutorialList = [
  {
    head: "วิธีเล่น",
    body: "เดาตัวเลขตั้งแต่ 0-99 โปรแกรมจะบอกว่าตัวเลขที่พิมพ์มามีค่ามากกว่าหรือน้อยกว่าตัวเลขที่พิมพ์มาโดยสามารถเดาได้สูงสุด 10 ครั้ง",
  },
  {
    head: "ระดับ ง่าย",
    body: "แสดงตัวเลขที่พิมพ์ทั้งหมด บอกขนาดของตัวเลข",
  },
  {
    head: "ระดับ ปานกลาง",
    body: "แสดงตัวเลขที่พิมพ์ล่าสุด บอกขนาดของตัวเลข",
  },
  {
    head: "ระดับ ยาก",
    body: "ไม่แสดงตัวเลขที่พิมพ์ ไม่บอกขนาดของตัวเลข ใช้ดวง 100%",
  },
];

export default BsAccordion;
