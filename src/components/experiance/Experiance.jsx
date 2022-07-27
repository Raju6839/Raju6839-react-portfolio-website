import React from "react";
import "./experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experiance__backend">
          <h3>Backend Devlopment</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Hibernet</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
