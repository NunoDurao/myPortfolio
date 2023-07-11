import React from "react";
import { MdAccountCircle} from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiReact, DiJavascript} from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Nuno Durão",
  },
  {
    label: "Age",
    value: "40",
  },
  {
    label: "Address",
    value: "Lisbon/Portugal",
  },
  {
    label: "Email",
    value: "nunofdurao@gmail.com",
  },
  {
    label: "Contact No",
    value: "+351 92 664 73 62",
  },
];

const jobSummary = "As a web developer, I bring a unique perspective to the table with a background in the hospitality industry. Having worked as a receptionist in a hotel, I understand the importance of providing seamless experiences and attention to detail.With a solid foundation from my intensive 9-week bootcamp at Ironhack, I've acquired expertise in JavaScript, HTML, CSS, Node.js, Express.js, React.js, and MongoDB. This comprehensive training, combined with my passion for technology, sports, and travel, drives me to create user-friendly web solutions that captivate and engage.Meticulously crafting every line of code, I strive to ensure a seamless and visually appealing experience for users. If you're looking for a developer who combines a strong technical skill set with a background in hospitality, let's collaborate and create something exceptional.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<MdAccountCircle size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiJavascript size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
