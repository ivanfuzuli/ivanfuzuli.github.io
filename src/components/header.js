import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      backgroundColor: "#222",
    }}
    className="flex text-white flex-col h-48 items-center justify-center"
  >
    <h3 className="text-lg font-bold font-sans">
      <Link to="/">{siteTitle}</Link>
    </h3>
    <h5 className="font-sans">{siteDescription}</h5>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
};

export default Header;
