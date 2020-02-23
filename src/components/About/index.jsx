import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../layout";
import { StyledAbout, StyledAboutImage, StyledAboutContent } from "../../styled/about";
import { Heading, LinkButton } from "../elements";
import Experience from "./Experience";
import Technologies from "./Technologies";
import { getHrefs } from "../../utils/langService";
import imgMe from "../../images/about/me.jpg";

const About = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <StyledAbout>
        <StyledAboutImage>
          <img src={imgMe} alt="Łukasz Warchoł" />
        </StyledAboutImage>

        <StyledAboutContent>
          <Heading left text={t.title} />

          {t.description.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}

          <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
        </StyledAboutContent>
      </StyledAbout>

      <Experience t={t.experience} />

      <Technologies t={t.technologies} />
    </Layout>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default About;
