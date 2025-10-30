import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Fritz</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-end</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            
            <br /> 
          </p>
        </div>
        <Link
          to="Contact"
          className="btn btn-primary"
          smooth={true}
          offset={-70}
          duration={500}
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="/img/fritzivanportfolioi.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
