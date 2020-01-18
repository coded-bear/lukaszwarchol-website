import React, { useState, useCallback, memo } from "react";
import { NextPage } from "next";
import { Container } from "../../styled/layout";
import { StyledProjectsBtn } from "../../styled/projects";
import { getLang } from "../../utils/langService";
import { Title, Heading, SubTitle } from "../elements";
import { ButtonProps } from "./interfaces";
import { All, WebApplications, Websites, Mockups } from "./allProjects";

const Button = memo((props: ButtonProps) => (
  <StyledProjectsBtn onClick={props.onClick}>{props.name}</StyledProjectsBtn>
));

const Projects: NextPage<{ t: any }> = ({ t }) => {
  const [view, setView] = useState<number>(1);

  const changeView = useCallback(
    (nr: number) => {
      setView(nr);
    },
    [view]
  );

  return (
    <section>
      <Title text={t.title} />

      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <Container>
        <div>
          {t.views.map((elem: string, index: number) => (
            <Button key={index} onClick={() => changeView(index + 1)} name={elem} />
          ))}
        </div>

        <div>{view === 2 ? <WebApplications /> : view === 3 ? <Websites /> : view === 4 ? <Mockups /> : <All />}</div>
      </Container>
    </section>
  );
};

Projects.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/projects.json`);
  return { t };
};

export default Projects;
