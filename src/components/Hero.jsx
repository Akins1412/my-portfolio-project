import React from "react";

function Hero() {
  return (
    <div>
      <section className="intro">
        <div className="hero">
          <div className="me">
            <h3>
              Hola!, I'm Akins <br />A Frontend Dev/ Web Designer
            </h3>
          </div>

          <p className="hero-talk">
            I am committed to delivering seamless user experiences and
            continuously expanding my skill set to stay ahead in the
            ever-evolving tech landscape. With a creative mindset and a
            dedication to clean., efficient code, I strive to bring ideas to
            life and contribute to impactful digital solutions.
          </p>

          <div className="hero-btn">
            <a href="" className="btn-primary">
              Get Started
            </a>
            <a href="" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
