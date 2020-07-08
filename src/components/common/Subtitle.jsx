import React from "react";
import PropTypes from "prop-types";

const Subtitle = ({ text }) => <p className="subtitle">{text}</p>;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default Subtitle;
