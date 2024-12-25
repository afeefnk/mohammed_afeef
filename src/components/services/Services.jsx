import React, { useState } from "react";
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content" style={{'borderRadius':'20px'}}>
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Static <br/> Websites</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Static Websites</h3>
              <p className="services__modal-description">
              A static website contains Web pages with fixed content. Each page is coded in HTML and displays the same information to every visitor. Static sites are the most basic type of website and are the easiest to create. Unlike dynamic websites, they do not require any Web programming or database design. A static site can be built by simply creating a few HTML pages and publishing them to a Web server. I can make a Static and Portfolio website with Bootstrap, Semantic UI, Material UI.
              </p>
            </div>
          </div>
        </div>

        <div className="services__content" style={{'borderRadius':'20px'}}>
          <div>
            <i className="uil uil-react services__icon"></i>
            <h3 className="services__title">React <br/> Web Apps</h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div  className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">React Web Apps</h3>
              <p className="services__modal-description">
              React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. Redux and React Router are respective examples of such libraries. I can make Frontend, as well as Full Stack.
              </p>
            </div>
          </div>
        </div>

        <div className="services__content" style={{'borderRadius':'20px'}}>
          <div>
            <i className ="uil uil-palette services__icon" ></i>
            <h3 className="services__title">Web <br/> Designing</h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Web Designing</h3>
              <p className="services__modal-description">
              Creative designs attract customers most and improve the user experience which leads to an increase in website traffic. I will design an awesome and attractive website for you as personal, business, or for your services. As the design is later developed by coding the website So it will give you a clear idea of how the website looks and performs.
              </p>
            </div>
          </div>
        </div>

        <div className="services__content" style={{'borderRadius':'20px'}}>
          <div>
            <i className="uil uil-laptop services__icon"></i>
            <h3 className="services__title">MERN <br/> Stack</h3>
          </div>
          <span onClick={() => toggleTab(4)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div  className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">MERN Stack</h3>
              <p className="services__modal-description">
              MERN Stack comprises 4 technologies namely: MongoDB, Express, React, and Node.js. It is designed to make the development process smoother and easier. Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
