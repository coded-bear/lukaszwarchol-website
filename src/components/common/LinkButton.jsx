import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LinkButton = ({ to, children }) => (
  <Link to={to} className="LinkButton">
    <span>{children}</span>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkButton;
