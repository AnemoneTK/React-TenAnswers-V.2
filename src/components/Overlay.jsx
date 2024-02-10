function Overlay(props) {
  return (
    <>
      <div
        className={`overlay ${props.open ? "d-block" : "d-none"} 
          bg-black bg-opacity-50 w-100 h-100 z-2 position-absolute`}
      ></div>
    </>
  );
}

export default Overlay