import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show] = useState("top");
  const [mobileMenu] = useState(false);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Home</li>
          <li className="menuItem">Industries</li>
          <li className="menuItem">AI Software</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">Contact Us</li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
