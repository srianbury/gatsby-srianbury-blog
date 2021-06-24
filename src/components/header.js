import { Link } from "gatsby";
import React from "react";
import * as CONSTANTS from "../constants";

const Header = ({ siteTitle }) => (
  <div className="container bg-red-300">
    <div className="flex justify-between items-center mb-4">
      <div className="flex justify-center items-center">
        <Link to="/">
          <div className="text-3xl">{siteTitle}</div>
        </Link>
      </div>
      <ul className="flex m-0">
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
    </div>
  </div>
);

const NavItem = ({ children }) => (
  <li className="my-0 ml-3 hover:underline">{children}</li>
);

export default Header;
