import React from "react";

const Navbar = () => {
  return (
    <div className="container  ">
      <nav className="nav container-dark flex  ">
        <div className="mob-icon-div">
         <svg viewBox="10 10 13 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_2nG-56YVWlZPZ133BCoDc0 mob-icon pointer"><g data-name="hamburger menu"><path d="M21 15H11a1 1 0 000 2h10a1 1 0 000-2zM21 19H11a1 1 0 000 2h10a1 1 0 000-2zM11 13h10a1 1 0 000-2H11a1 1 0 000 2z"></path></g></svg>
        </div>
        <div className="logo-wrapper   ">
          <div className="flex  ">
            <img src="/assets/logo.jpg" alt="logo" className="logo-asset" />
            <h3 className="white-text logo">AlgoExpert</h3>
          </div>
          <div className="logo-text">Ace the Technical Interviews</div>
        </div>

        <div className="navlinks-wrapper nav-link-wrapper">
          <ul className="flex justify-content">
            <li className="nav-links">
              <a href="#">Products</a>
            </li>
            <li className="nav-links">
              <a href="#">Content</a>
            </li>
            <li className="nav-links">
              <a href="#">Team</a>
            </li>
            <li className="nav-links">
              <a href="#">
                <i><b>Purchase</b></i>
              </a>
            </li>
          </ul>
        </div>
        <div className=" login-wrapper">
          <button className="pointer btn btn-login">
            <span>Log In</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
