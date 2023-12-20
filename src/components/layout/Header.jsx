import React from "react";
import logo from "../../../public/meliscript.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="play" >
          <img src={logo} alt="" />
        </div>
      </div>
      <h1>Meliscript</h1>
    </header>
  );
};

export default Header;
