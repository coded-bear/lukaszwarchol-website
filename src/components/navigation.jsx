import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { SocialMedia } from "./elements";
import { StyledNavigation, StyledNavigationSocialMedia } from "../styled/header";
import imgClose from "../images/common/close.svg";
import { getHrefs } from "../utils/langService";

const NavElem = ({ to, text, closeMenu }) => (
  <Link to={to} onClick={closeMenu}>
    <li>{text}</li>
  </Link>
);

const Navigation = forwardRef(({ lang, t, closeMenu }, ref) => (
  <StyledNavigation ref={ref}>
    <button onClick={closeMenu}>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem to={`/${lang}/`} text="Home" closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} text={t.about} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} text={t.services} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} text={t.projects} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.contact} closeMenu={closeMenu} />
      </ul>
    </nav>

    <StyledNavigationSocialMedia>
      <SocialMedia />
    </StyledNavigationSocialMedia>
  </StyledNavigation>
));

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
};

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default Navigation;
