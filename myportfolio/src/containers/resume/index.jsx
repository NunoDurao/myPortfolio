/* eslint-disable no-unused-vars */
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My resume"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Resume;
