function TopNav() {
  return (
    <>
      <div className="nav row p-3 align-items-center h-10">
        <a className="back col text-start">
          <i className="fa-solid fa-arrow-left fs-4 text-white"></i>
        </a>
        <a className="tutorial col text-end">
          <i className="fa-regular fa-circle-question fs-2 text-white"></i>
        </a>
      </div>
    </>
  );
}
export default TopNav