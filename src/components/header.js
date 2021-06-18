import { Link } from "gatsby";
import React from "react";
import * as CONSTANTS from "../constants";

const Header = ({ siteTitle }) => (
  <header>
    <ul
      style={{
        display: "inline-block",
        paddingLeft: "0px",
        margin: "0px",
      }}
    >
      <NavItem>
        <h3>
          <Link to="/">{siteTitle}</Link>
        </h3>
      </NavItem>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/page-2">Page 2</Link>
      </NavItem>
      <NavItem>
        <Link to={`/${CONSTANTS.blogPath}`}>Blog</Link>
      </NavItem>
    </ul>
  </header>
);

const NavItem = ({ children }) => (
  <li style={{ display: "inline-block", marginRight: "10px" }}>{children}</li>
);

export default Header;
