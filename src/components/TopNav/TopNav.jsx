function TopNav(props) {
  return (
    <>
      <div className="nav row p-3 align-items-center h-10">
        <a className={`${props.back}  col text-start`}>
          <i className="fa-solid fa-arrow-left fs-4 text-white"></i>
        </a>
        <a className={`${props.hint}  col text-end`}>
          <i className="fa-regular fa-circle-question fs-2 text-white"></i>
        </a>
      </div>
    </>
  );
}
export default TopNav