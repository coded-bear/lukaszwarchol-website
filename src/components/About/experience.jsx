import React from "react";
import PropTypes from "prop-types";
import { Intro, SubTitle } from "../elements";

const Experience = ({ t }) => (
  <section className="Experience">
    <div className="container">
      <Intro text={t.title} />
      <SubTitle text={t.subtitle} />

      <div className="Experience__container">
        {t.boxes.map((elem, index) => (
          <div key={index} className="Experience__elem">
            <p className="date">{elem.date}</p>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Experience.propTypes = {
  t: PropTypes.object.isRequired
};

export default Experience;
