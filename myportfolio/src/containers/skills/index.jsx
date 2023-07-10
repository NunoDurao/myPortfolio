/* eslint-disable no-unused-vars */
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My skills"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Skills;
