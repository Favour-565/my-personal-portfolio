import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Favour Ezeh</span>{" "}
            from <span className="purple">Enugu State, Nigeria</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Afripoint</span>.
            <br />I hold an Integrated BSc. in{" "}
            <span className="purple">Finance and Banking</span> from{" "}
            <span className="purple">University Of Port Harcourt</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Favour</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
