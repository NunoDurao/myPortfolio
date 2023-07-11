import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaLightbulb } from "react-icons/fa";
import ImageOne from "../../helper/images/turtles.png";
import ImageTwo from "../../helper/images/camino-ways.jpg";
import ImageThree from "../../helper/images/joker.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Super Ninja Turtles",
    description:"2D Game",
    image: ImageOne,
    link: "https://nunodurao.github.io/Super-Ninja-Turtle/",
  },
  {
    id: 3,
    name: "My Camino Ways",
    description: "Full Stack Web App(hbs)",
    link: "https://bright-cardigan-foal.cyclic.app/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Watchverse",
    description: "Full Stack Web App(React)",
    image: ImageThree,
    link: "https://cerulean-torte-7e554d.netlify.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 3,
    label: "Full Stack Web App",
  },
  {
    filterId: 2,
    label: "2D Game",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaLightbulb size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <a href={item.link}a>
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
