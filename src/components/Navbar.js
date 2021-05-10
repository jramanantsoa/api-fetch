import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: "#BDBDBD" }}>
      <a className="navbar-brand" href="https://fetchmyapi.herokuapp.com/">
        Projects Dashboard
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          height="30"
          alt=""
          loading="lazy"
        />
      </a>
    </nav>
  );
};
export default Navbar;
